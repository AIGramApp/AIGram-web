<template>
    <div class="container mx-auto px-5 my-20">
        <div class="max-w-md my-8 rounded overflow-hidden shadow-lg m-auto">
            <img class="w-full" :src="item.image" :alt="item.title" />

            <div class="px-6 py-4">
                <input
                    class="font-bold text-xl mb-2 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-1 block"
                    v-model="item.title"
                    placeholder="Short title"
                />
                <input
                    class="font-bold text-gray-700 text-base mb-2 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-1 block"
                    v-model="item.description"
                    placeholder="Short summary"
                />
                <input
                    class="font-bold text-gray-700 text-base mb-2 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-1 block"
                    v-model="item.link"
                    placeholder="Link"
                />
            </div>
            <div class="px-6 py-4">
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    v-for="tag in item.tags"
                    :key="tag"
                >#{{tag}}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import BaseComponent from "../BaseComponent";

@Component
export default class NewPost extends mixins(BaseComponent) {
    get item() {
        return this.state.newPost!;
    }
}
</script>