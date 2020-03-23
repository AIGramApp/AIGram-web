<template>
  <div class="container mx-auto px-5 my-20">
      <card v-for="item in feed" :item="item" :key="item.link"></card>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Card from '@/components/Card.vue'
import { FeedItem } from '../models';
import feedData from '@/feed.json'
@Component({
    components: {Card}
})
export default class Home extends Vue{
    
    feed = feedData;
}
</script>
