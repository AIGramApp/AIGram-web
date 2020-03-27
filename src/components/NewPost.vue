<template>
    <div class="container mx-auto px-5 my-20">
        <div class="max-w-md my-8 rounded overflow-hidden shadow-lg m-auto">
            <img class="w-full" :src="item.image" :alt="item.title" />

            <div class="px-6 py-4">
                <div class="mb-2">
                    <input
                        class="text-base shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-1 block"
                        v-model="item.title"
                        placeholder="Title"
                        :class="{'border-red-500': errors && errors.title}"
                    />
                    <p
                        class="text-red-500 text-xs italic"
                        v-if="errors && errors.title"
                    >Please enter the title</p>
                </div>
                <div class="mb-2">
                    <input
                        class="text-gray-700 text-base shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-1 block"
                        v-model="item.description"
                        placeholder="Summary"
                        :class="{'border-red-500': errors && errors.description}"
                    />
                    <p
                        class="text-red-500 text-xs italic"
                        v-if="errors && errors.description"
                    >Please enter the summary</p>
                </div>

                <div class="md-2">
                    <input
                        class="text-gray-700 text-base shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-1 block"
                        v-model="item.link"
                        placeholder="Link"
                        type="link"
                    />
                    <p
                        class="text-red-500 text-xs italic"
                        v-if="errors && errors.link"
                    >Please enter the link</p>
                </div>

                <vue-tags-input
                    @tags-changed="tagsChanged"
                    v-model="tag"
                    :tags="tags"
                    placeholder="Tags"
                    :max-tags="5"
                    class="text-gray-700 text-base mb-2 shadow appearance-none border rounded w-full py-2 leading-tight focus:outline-none focus:shadow-outline mt-1 block"
                />
            </div>
            <button
                class="bg-blue-500 hover:bg-blue-700 block w-full text-white font-bold py-2 px-4"
                @click="submit"
            >Publish</button>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import BaseComponent from "../BaseComponent";
import VueTagsInput from "@johmun/vue-tags-input";
@Component({
    components: { VueTagsInput }
})
export default class NewPost extends mixins(BaseComponent) {
    tag = "";
    tags = [];
    errors: {
        title: boolean;
        description: boolean;
        link: boolean;
    } | null = null;
    get item() {
        return this.state.newPost!;
    }
    tagsChanged(tags: Array<any>) {
        this.item.tags = tags.map(t => t.text);
    }
    submit() {
        this.errors = {
            title: false,
            description: false,
            link: false
        };
        const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const reg = new RegExp(expression);
        if (this.item.title == "") {
            this.errors.title = true;
        }
        if (this.item.description == "") {
            this.errors.description = true;
        }
        if (this.item.link == "" || !this.item.link.match(reg)) {
            this.errors.link = true;
        }
        if (this.errors.title || this.errors.description || this.errors.link) {
            //If any errors show the errors
            return;
        }
        this.$emit("submit");
    }
}
</script>
<style lang="css">
.vue-tags-input .ti-input {
    border: none !important;
}
</style>