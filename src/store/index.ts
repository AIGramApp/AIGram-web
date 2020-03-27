import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { FeedItem, User, GithubAuth, AddPostStage, UserProfile } from '@/api/models';
import Axios from 'axios'
import urls, { join, base } from '@/api/urls';
import Cookies from 'js-cookie';
Vue.use(Vuex);

export interface AppState {
    feed: Array<FeedItem>;
    search: string;

    bookmarks: number[];

    bookmarkMode: boolean;
    user: User | null;

    newPostStage: AddPostStage;

    newPost: FeedItem | null;

    profile: UserProfile | null;

    loading: boolean;
}

const store: StoreOptions<AppState> = {
    state: {
        feed: [],
        search: "",
        bookmarks: [],
        bookmarkMode: false,
        user: null,
        newPostStage: AddPostStage.Image,
        newPost: null,
        profile: null,
        loading: false
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
        },
        setBookmarkMode(state, value) {
            state.bookmarkMode = value;
        },
        setUser(state, user) {
            state.user = user;
        },
        setNewPostStage(state, stage) {
            state.newPostStage = stage;
        },
        setNewPost(state, post) {
            state.newPost = post;
        },
        setProfile(state, profile){
            state.profile = profile;
        },
        setLoading(state, value){
            state.loading = value;
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
        },
        auth({ state }, model: GithubAuth) {
            return Axios.post(join(base, urls.auth.base), model).then(response => response.data.token).then(token => {
                const expiry = new Date();
                expiry.setHours(expiry.getHours() + 8);
                Cookies.set("AIGRAM_TOKEN", token, {
                    path: "/",
                    expires: expiry
                });
            }).catch((e) => { throw e.response.data; });
        },
        loadUser({ state, commit }) {
            return Axios.get(join(base, urls.user.base)).then(response => response.data).then(user => {
                return commit("setUser", user);
            }).catch((e) => { throw e.response.data; });
        },
        logout({ state, commit }) {
            Cookies.remove("AIGRAM_TOKEN", {
                path: "/"
            });
            commit("setUser", null);
        },
        uploadImage({ state, commit }, file: File) {
            const formData = new FormData();
            formData.append("image", file);
            return Axios.post(join(base, urls.posts.base, urls.posts.upload), formData).then(response => response.data.filename).catch((e) => { throw e.response.data; });
        },
        publishPost({ state, commit }) {
            return Axios.post(join(base, urls.posts.base, urls.posts.publish), state.newPost).then(response => response.data).catch(e => { throw e.response.data; });
        },
        feed({state, commit}){
            return Axios.get(join(base, urls.feed.base)).then(response => response.data).then(feed => {
                commit("setFeed", feed);
            });
        },
        loadProfile({state, commit}, id){
            return Axios.get(join(base, urls.user.profile, String(id))).then(response => response.data).then(profile => {
                commit("setProfile", profile);
            }).catch((e) => {throw e.response.data;});
        }
    },
};

export default new Vuex.Store(store);
