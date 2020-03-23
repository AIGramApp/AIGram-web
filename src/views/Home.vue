<template>
  <div class="container mx-auto px-5 my-20">
      <card v-for="item in feed" :item="item" :key="item.link"></card>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State} from 'vuex-class'
import Card from '@/components/Card.vue'
import { FeedItem } from '../models';
@Component({
    components: {Card}
})
export default class Home extends Vue{
    @State
    feed!: Array<FeedItem>;
}
</script>
