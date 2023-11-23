<script setup lang="ts"></script>

<template>
  <div class="not-found-root">
    <a-image
      class="not-found-img"
      width="90%"
      height="90%"
      src="src/assets/image/404-select.png"
      fit="scale-down"
      alt="Page Not Found"
    />
  </div>
</template>

<style scoped>
.not-found-root {
  margin-top: 60px;
  height: calc(100dvh - 60px);
  width: calc(100dvw);
  pointer-events: none;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;
}
.not-found-root :deep(.arco-image) {
  display: flex;
  justify-content: center; /* 水平居中 */
  pointer-events: none;
}
.not-found-img {
  user-select: none;
  pointer-events: none;
}
</style>
