import { Component, Vue } from 'vue-property-decorator'
import { AppState } from './store';
import { FeedItem } from '@/api/models';
import feedData from "@/feed.json";


@Component
export default class BaseComponent extends Vue {
    get state() {
        return this.$store.state as AppState;
    }
    get search() {
        return this.state.search;
    }
    set search(value: string) {
        this.$store.commit("setSearch", value);
    }
    set bookmarkMode(value: boolean) {
        // TODO bookmarks
        // this.$store.commit("setBookmarkMode", value);
        // if (this.bookmarkMode) {
        //     //Only show bookmarked items
        //     this.feed = this.feed.filter((item) => this.state.bookmarks.includes(item.link));
        // }
        // else{
        //     this.feed = feedData;
        // }
    }
    get bookmarkMode() {
        return this.state.bookmarkMode;
    }
    get feed() {
        return this.state.feed;
    }
    set feed(value: Array<FeedItem>) {
        this.$store.commit("setFeed", value);
    }
    get hasUser()
    {
        return this.state.user != null;
    }
    get user()
    {
        return this.state.user!;
    }
}