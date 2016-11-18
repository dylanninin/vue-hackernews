<template lang="html">
  <li class="comment">
    <div class="by">
      <router-link :to="'/user/' + comment.by">{{ comment.by }}</router-link>
      {{ comment.time }} ago
      <span v-if="comment.kids && comment.kids.length ">
        | <a class="expand" @click="open = !open">
          {{ (open ? 'collapase ' : 'expand ') + comment.kids.length + 'replies' }}
        </a>
      </span>
    </div>
    <div class="text" v-html="comment.text"></div>
    <ul class="comment-children" v-show="open">
        <!--
        TODO Recursive component RangeError: Maximum call stack size exceeded
        <comment v-for="id in comment.kids" :id="id"></comment>
        -->
    </ul>
  </li>
</template>

<script>
export default {
  name: 'comment',
  props: ['id'],
  data () {
    const seed = require('../store/seed.json')
    return {
      open: true,
      comment: seed.comment
    }
  }
}
</script>

<style lang="stylus">
.comment-children
  .comment-children
    margin-left 1em

.comment
  border-top 1px solid #eee
  position relative
  .expand
    cursor pointer
  .by, .text
    font-size .9em
    padding 1em 0
  .by
    color #999
    padding-bottom 0
    a
      color #999
      text-decoration underline
  .text
    overflow-wrap break-word
    a:hover
      color #ff6600
</style>
