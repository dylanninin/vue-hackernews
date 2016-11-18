<template lang="html">
    <div class="user-view">
        <template v-if="user">
          <h1>User: {{ user.id }}</h1>
          <ul class="meta">
              <li><span class="label">Created:</span>{{ user.created }} ago</li>
              <li><span class="label">Karma:</span>{{ user.karma }}</li>
              <li v-if="user.about" v-html="user.about" class="about"></li>
          </ul>
          <p class="links">
              <a :href="'https://news.ycombinator/submitted?id=' + user.id">submissions</a>
              |
              <a :href="'https://news.ycombinator/threads?id=' + user.id">comments</a>
          </p>
        </template>
    </div>
</template>

<script>
export default {
  name: 'user-view',
  data () {
    const seed = require('../store/seed.json')
    return {
      user: seed.user
    }
  }
}
</script>

<style lang="css">
</style>
