import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { FeedItem } from '@/models';

Vue.use(Vuex);

export interface AppState {
    feed: Array<FeedItem>;
    search: string;
}

const store: StoreOptions<AppState> = {
    state: {
        feed: [],
        search: ""
    },
    mutations: {
        setFeed(state, feed) {
            state.feed = feed;
        },
        setSearch(state, search){
            state.search = search;
        }
    },
    actions: {
    },
};

export default new Vuex.Store(store);
