<template>
    <div class="container mx-auto px-5 my-20">
        <template v-if="bookmarkMode">
            <h1 class="text-center">Your bookmarks</h1>
        </template>


        <template v-if="feed.length > 0">
            <card v-for="item in feed" :item="item" :key="item.link" @bookmark="setBookmark"></card>
        </template>
        <template v-if="feed.length == 0">
            <div class="max-w-md my-8 rounded overflow-hidden shadow-lg m-auto">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">No results found</div>
                    <p class="text-gray-700 text-base">Try a different search query</p>
                </div>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import Card from "@/components/Card.vue";
import { FeedItem } from "@/api/models";
import { AppState } from "@/store";
import { mixins } from 'vue-class-component';
import BaseComponent from '@/BaseComponent';
@Component({
    components: { Card }
})
export default class Home extends mixins(BaseComponent) {

    mounted(){
        this.$store.dispatch("feed");
    }
}
</script>
