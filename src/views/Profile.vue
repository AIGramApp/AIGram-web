<template>
    <div class="container mx-auto px-5 my-20" v-if="profile">
        <div class="max-w-md my-8  m-auto">
            <a
                class="flex items-center px-6 py-4 shadow-lg rounded overflow-hidden"
                :href="'https://github.com/' + profile.user.username"
                target="_blank"
            >
                <img
                    class="w-8 h-8 rounded-full mr-4"
                    :src="profile.user.avatar"
                    :alt="profile.user.username"
                />
                <div class="text-sm">
                    <p class="text-gray-900 leading-none">@{{profile.user.username}}</p>
                    <p class="text-gray-600">{{profile.user.name}}</p>
                </div>
            </a>

            <!--Display items-->
            <card
                v-for="item in profile.posts"
                :item="item"
                :key="item.link"
                @bookmark="setBookmark"
            ></card>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import BaseComponent from "../BaseComponent";
import Card from "@/components/Card.vue";

@Component({
    components: { Card }
})
export default class Profile extends mixins(BaseComponent) {
    mounted() {
        const id = this.$route.params["id"];
        this.$store.dispatch("loadProfile", id).catch(() => {
            this.$router.push({ name: "home" });
        });
    }

    get profile() {
        return this.state.profile;
    }
}
</script>