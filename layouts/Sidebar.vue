<template>
  <aside id="sidebar" class="sidebar">
    <h2>新着記事</h2>
      <ul class="sidebar__list">
        <li v-for="article in articles" :key="article._path">
          <a :href="article._path">{{ article.title }}</a>
        </li>
      </ul>
  </aside>
</template>

<script setup lang="ts">
const articles = await queryContent()
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false }) // exclude the Partial files
  .find();
</script>
