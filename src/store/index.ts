import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { FeedItem } from '@/models';

Vue.use(Vuex);

export interface AppState {
    feed: Array<FeedItem>;
    search: string;

    bookmarks: string[];
}

const store: StoreOptions<AppState> = {
    state: {
        feed: [],
        search: "",
        bookmarks: []
    },
    mutations: {
        setFeed(state, feed) {
            state.feed = feed;
        },
        setSearch(state, search) {
            state.search = search;
        },
        setBookmarks(state, bookmarks) {
            state.bookmarks = bookmarks;
        }
    },
    actions: {
        saveBookmarks({ state }) {
            localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
        },
        loadBookmarks({ state, commit }) {
            if (localStorage.getItem("bookmarks")) {
                const bookmarks = JSON.parse(localStorage.getItem("bookmarks")!);
                commit("setBookmarks", bookmarks);
            }
        }
    },
};

export default new Vuex.Store(store);
