<template>
    <div id="app">
        <div
            class="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center"
        >
            <div class="w-full max-w-screen-xl relative mx-auto px-6">
                <div class="flex items-center -mx-6">
                    <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6">
                        <div class="flex items-center">
                            <router-link to="/" class="block font-bold">AIGram</router-link>
                        </div>
                    </div>

                    <div class="flex flex-grow lg:w-3/4 xl:w-4/5">
                        <div class="w-full lg:px-6 xl:w-3/4 xl:px-12">
                            <div class="relative">
                                <span
                                    style="position: relative; display: inline-block; direction: ltr; width:100%;"
                                >
                                    <input
                                        class="transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
                                        type="text"
                                        placeholder="Search"
                                        autocomplete="off"
                                        spellcheck="false"
                                        role="combobox"
                                        aria-autocomplete="list"
                                        aria-expanded="false"
                                        aria-label="search input"
                                        dir="auto"
                                        v-model="search"
                                        style="position: relative; vertical-align: top;"
                                        @input="updateSearch"
                                    />
                                </span>
                                <div
                                    class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center"
                                >
                                    <svg
                                        class="fill-current pointer-events-none text-gray-600 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-between w-1/4 px-6">
                            <div class="flex justify-start items-center">
                                <a
                                    class="block flex items-center mr-5 text-gray-700 cursor-pointer"
                                    @click="auth()"
                                    v-if="!hasUser"
                                >Login/Register</a>
                                <account-dropdown @logout="logout" v-if="hasUser"></account-dropdown>

                                <a
                                    class="block flex items-center mr-5 cursor-pointer"
                                    :class="{'text-gray-700': bookmarkMode}"
                                    @click="bookmarkMode = !bookmarkMode"
                                >
                                    <svg
                                        class="fill-current w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <title>Bookmark</title>
                                        <path
                                            d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <router-view></router-view>

        <div
            class="flex bg-white border-b border-gray-200 fixed bottom-0 inset-x-0 z-100 h-16 items-center"
        >
            <div class="w-full max-w-screen-xl relative mx-auto px-6">
                <div class="flex justify-between">
                    <div class="pl-6 m-auto pr-6">
                        <a @click="add" class="block text-center font-bold cursor-pointer">
                            <svg
                                class="fill-current w-4 h-4 m-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M392.533,187.733H221.867V17.067C221.867,7.641,214.226,0,204.8,0s-17.067,7.641-17.067,17.067v170.667H17.067
			C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h170.667v170.667c0,9.426,7.641,17.067,17.067,17.067
			s17.067-7.641,17.067-17.067V221.867h170.667c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"
                                />
                            </svg>
                            <span>Publish</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import feedData from "@/feed.json";
import { AppState } from "./store";
import { mixins } from "vue-class-component";
import BaseComponent from "@/BaseComponent";
import { v4 as uuidv4 } from "uuid";
import AccountDropdown from "@/components/AccountDropdown.vue";

@Component({
    components: { AccountDropdown }
})
export default class App extends mixins(BaseComponent) {
    mounted() {
        this.feed = feedData;
        this.$store.dispatch("loadBookmarks");
        this.$store.dispatch("loadUser");
    }
    updateSearch() {
        if (this.search == "") {
            this.feed = feedData;
        } else {
            const foundItems = feedData.filter(item => {
                return (
                    item.title
                        .toLowerCase()
                        .includes(this.search.toLowerCase()) ||
                    item.description
                        .toLowerCase()
                        .includes(this.search.toLowerCase())
                );
            });
            this.feed = foundItems;
        }
    }
    auth() {
        let state = uuidv4();
        window.location.href = `https://github.com/login/oauth/authorize?client_id=7f717d3d84f0c342fdce&scope=read:user,user:email&state=${state}`;
    }
    logout() {
        this.$store.dispatch("logout");
    }
    add()
    {
        if(this.hasUser)
        {
            this.$router.push({name: 'add'});
        }
        else
        {
            this.auth();
        }
    }
}
</script>
<style lang="css">
body {
    font-family: "Roboto Mono", monospace;
}
</style>