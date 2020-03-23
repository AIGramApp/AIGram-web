<template>
  <div class="container mx-auto px-5">
      <card v-for="item in feed" :item="item" :key="item.link"></card>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Card from '@/components/Card.vue'
import { FeedItem } from '../models';

@Component({
    components: {Card}
})
export default class Home extends Vue{
    feed: Array<FeedItem> = [
        <FeedItem>{
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/TensorFlowLogo.svg/1200px-TensorFlowLogo.svg.png",
            title: "Tensorflow framework released",
            tags: ["framework"],
            description: "A new version of the popular framework is released.",
            link: "http://tensorflow4.org/"
        },
        <FeedItem>{
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/TensorFlowLogo.svg/1200px-TensorFlowLogo.svg.png",
            title: "Tensorflow framework released",
            tags: ["framework"],
            description: "A new version of the popular framework is released.",
            link: "http://tensorflow2.org/"
        },
        <FeedItem>{
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/TensorFlowLogo.svg/1200px-TensorFlowLogo.svg.png",
            title: "Tensorflow framework released",
            tags: ["framework"],
            description: "A new version of the popular framework is released.",
            link: "http://tensorflow3.org/"
        }
    ];
}
</script>
