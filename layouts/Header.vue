<template>
  <header id="header" class="header">
    <div class="header__inner">
      <div class="header__container">
        <nav id="gNav" class="gNav">
          <h1 class="gNav__siteBrand">
            <a href="/">
              <span class="gNav__title">{{ title }}</span>
              <span class="gNav__subTitle">{{ subTitle }}</span>
            </a>
          </h1>
          <ul class="gNav__primaryMenu">
            <li class="gNav__menuItem" v-for="item in menuItems"><a :href="item.href">{{ item.name }}</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: '鋤と鉋とプログラミング',
      subTitle: '子ども向けプログラミング教室講師のブログ',
      menuItems: [
        {
          name: 'プログラミング教室のご案内',
          href: 'https://qwel.design/'
        },
        {
          name: 'このブログについて',
          href: '/'
        }
      ]
    }
  }
}
</script>
