<template>
  <Header />
  <main id="main" class="main">
    <div class="main__inner">
      <div class="main__container">
        <div class="main__content">
          <article class="article">
            <slot />
          </article>
        </div>
        <div class="main__aside">
          <Sidebar />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Header, Sidebar, Footer
  }
}
</script>
