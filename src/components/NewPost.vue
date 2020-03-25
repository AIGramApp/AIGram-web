<template>
    <div class="container mx-auto px-5 my-20">
        <div class="max-w-md my-8 rounded overflow-hidden shadow-lg m-auto">
            <img class="w-full" :src="item.image" :alt="item.title" />

            <div class="px-6 py-4">
                <input
                    class="text-base mb-2 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-1 block"
                    v-model="item.title"
                    placeholder="Title"
                />
                <input
                    class="text-gray-700 text-base mb-2 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-1 block"
                    v-model="item.description"
                    placeholder="Summary"
                />
                <input
                    class="text-gray-700 text-base mb-2 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-1 block"
                    v-model="item.link"
                    placeholder="Link"
                    type="link"
                />
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
    get item() {
        return this.state.newPost!;
    }
    tagsChanged(tags: Array<any>) {
        this.item.tags = tags.map(t => t.text);
    }
    submit() {
        this.$emit("submit");
    }
}
</script>
<style lang="css">
.vue-tags-input .ti-input{
    border: none !important;
}
</style>