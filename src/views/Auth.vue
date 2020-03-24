<template></template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GithubAuth } from "@/api/models";
import { mixins } from "vue-class-component";
import BaseComponent from "@/BaseComponent";
@Component
export default class Auth extends mixins(BaseComponent) {
    mounted() {
        const code = this.$route.query["code"];
        const state = this.$route.query["state"];

        //Do the api request to register a new user, otherwise it will set a token to login an existing one
        this.$store
            .dispatch("auth", <GithubAuth>{
                state,
                code
            })
            .then(() => {
                this.$store.dispatch("loadUser");
            })
            .finally(() => {
                this.$router.push({ name: "home" });
            });
    }
}
</script>