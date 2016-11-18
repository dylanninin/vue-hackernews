<template lang="html">
  <div class="news-view">
    <div class="news-list-nav">
        <router-link v-if="page > 1" :to="'/' + type + '/' + (page - 1)">&lt; prev</router-link>
        <a v-else class="disabled">&lt; prev</a>
        <span>{{ page }}/{{ maxPage }}</span>
        <router-link v-if="hasMore" :to="'/' + type + '/' + (page + 1)">more &gt;</router-link>
        <a v-else class="disabled">more &gt;</a>
    </div>
    <transition :name="transition">
      <div class="news-list" :key="displayedPage" v-if="displayedPage > 0">
          <transition-group tag="ul" name="item">
            <item v-for="item in displayedItems" :key="item.id" :item="item">
            </item>
          </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'item-list',

  components: {
    Item
  },

  props: {
    type: {
      default: 'top',
      type: String
    }
  },

  data () {
    const seed = require('../store/seed.json')
    return {
      transition: 'slide-left',
      displayedPage: 1,
      displayedItems: Array.from({length: 30}, () => seed.story)
    }
  },

  computed: {
    page () {
      return 1
    },
    maxPage () {
      return 10
    },
    hasMore () {
      return this.page < this.maxPage
    }
  }
}
</script>

<style lang="css">
</style>
