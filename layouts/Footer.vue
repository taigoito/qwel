<template>
  <footer id="footer" class="footer">
    <div class="footer__inner">
      <div class="footer__container">
        <small v-html="copyright"></small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: '&copy; 2019 - 2023 QWEL DESIGN'
    }
  }
}
</script>
