<template lang="html">
    <div class="item-view" v-if="item">
      <template v-if="item">
        <div class="item-view-header">
            <a :href="item.url" target="_blank">
              <h1>{{ item.title }}</h1>
            </a>
            <span v-if="item.url" class="host">
              {{ item.url }}
            </span>
            <p class="meta">
                {{ item.score }} points
                | by <router-link :to="'/user/' + item.by ">{{ item.by }}</router-link>
                {{ item.time }} ago
            </p>
        </div>
        <div class="item-view-comments">
            <p class="item-view-comments-header">
                {{ item.kids ? item.descendants + ' comments' : 'No comments yet.' }}
            </p>
            <ul class="comment-children">
              <comment v-for="id in item.kids" :id="id"></comment>
            </ul>
        </div>
      </template>
    </div>
</template>

<script>
import Comment from '../components/Comment.vue'

export default {
  name: 'item-view',
  components: { Comment },
  data () {
    const seed = require('../store/seed.json')
    return {
      item: seed.story
    }
  }
}
</script>

<style lang="css">
</style>
