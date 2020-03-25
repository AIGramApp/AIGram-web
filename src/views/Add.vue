<template>
    <div class="add">
        <file-uploader @fileAdded="fileAdded"></file-uploader>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component';
import BaseComponent from '../BaseComponent';
import FileUploader from '@/components/FileUploader.vue'

@Component({
    components: {FileUploader}
})
export default class Add extends mixins(BaseComponent)
{
    fileAdded(file: File)
    {
        console.log(file);
        this.$store.dispatch("uploadImage", file).then(filename => {
            console.log(filename);
        })
    }
}
</script>