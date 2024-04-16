<script setup lang="ts">
const auth: boolean = true;
</script>

<template>
  <div class="header">
    <div class="header__body container">
      <div class="header__left">
        <div class="header__logotype">Логотип</div>
        <div class="header__catalog">Каталог</div>
      </div>
      <div class="header__right">
        <div class="header__search">Поиск</div>
        <div class="header__profile" v-if="auth">Профиль</div>
        <div class="header__login" v-else>Войти</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply sticky top-0 w-full bg-white;
  height: theme("header.height");
  border-bottom: 1px solid theme("colors.gray.100");
  &__body {
    @apply flex justify-between items-center shrink-0;
  }
  &__left {
  }
  &__right {
  }
}
</style>
