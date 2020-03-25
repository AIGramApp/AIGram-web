<template>
    <div class="flex w-full h-screen items-center justify-center bg-grey-lighter">
        <label
            class="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer"
        >
            <svg
                class="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path
                    d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                />
            </svg>
            <span class="mt-2 text-base leading-normal">Select one image</span>
            <input type="file" class="hidden" accept="image/*" @change="fileUploaded"/>
        </label>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import BaseComponent from "../BaseComponent";

@Component
export default class FileUploader extends mixins(BaseComponent) {
    fileUploaded(event: any)
    {
        const file = (event.target.files as FileList).item(0);
        if(file)
        {
            //Emit the event the file was uploaded
            this.$emit("fileAdded", file);
        }
    }
}
</script>