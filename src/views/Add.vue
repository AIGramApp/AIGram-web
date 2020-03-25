<template>
    <div class="add">
        <template v-if="stage == 1">
            <file-uploader @fileAdded="fileAdded"></file-uploader>
        </template>
        <template v-if="stage == 2">
            <new-post></new-post>
        </template>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import BaseComponent from "../BaseComponent";
import FileUploader from "@/components/FileUploader.vue";
import { AddPostStage, FeedItem } from "../api/models";
import NewPost from '@/components/NewPost.vue';
@Component({
    components: { FileUploader, NewPost }
})
export default class Add extends mixins(BaseComponent) {
    mounted() {
        this.stage = AddPostStage.Image;
        this.post = <FeedItem>{};
    }
    fileAdded(file: File) {
        this.$store.dispatch("uploadImage", file).then(filename => {
            console.log(filename);
            this.post!.image = filename;
            this.stage = AddPostStage.Meta;
        });
    }
    get post() {
        return this.state.newPost;
    }
    set post(post: FeedItem | null) {
        this.$store.commit("setNewPost", post);
    }
    get stage() {
        return this.state.newPostStage;
    }
    set stage(value: AddPostStage) {
        this.$store.commit("setNewPostStage", value);
    }
}
</script>