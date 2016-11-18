<template lang="html">
  <li class="news-item">
    <span class="score">{{ item.score }}</span>
    <span class="title">
      <template v-if="item.url">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
        <span class="host">({{ item.url }})</span>
      </template>
      <template v-else>
        <router-link :to="'/item/' + item.id">{{ item.title }}</router-link>
      </tempalte>
    </span>
    <br/>
    <span class="meta">
      <span v-if="item.type !== 'job'" class="By">
        by <router-link :to="'/user/' + item.by">{{ item.by }}</router-link>
      </span>
      <span class="time">{{ time.time }} ago </span>
      <span v-if="item.type !== 'job'" class="comments-link">
        | <router-link :to="'/item/' + item.id">{{ item.descendants }}</router-link>
      </span>
    </span>
    <span class="label" v-if="item.type !== 'story'">{{ item.type }}</span>
  </li>
</template>

<script>
export default {
  name: 'news-item',
  props: ['item']
}
</script>

<style lang="css">
</style>
