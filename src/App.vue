<template>
    <div id="app">
        <div
            class="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center"
        >
            <div class="w-full max-w-screen-xl relative mx-auto px-6">
                <div class="flex items-center -mx-6">
                    <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6">
                        <div class="flex items-center">
                            <a href="/" class="block">AIGram</a>
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
                                        style="position: relative; vertical-align: top;"
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

                        <div
                            class="flex items-center justify-between w-1/4 px-6"
                        >
                            <div class="flex justify-start items-center text-gray-500">
                                <a
                                    class="block flex items-center hover:text-gray-700 mr-5"
                                    href="https://twitter.com/tailwindcss"
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
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>