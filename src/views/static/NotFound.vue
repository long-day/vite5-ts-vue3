<script setup lang="ts">
import { Result, Button } from 'ant-design-vue';
</script>

<template>
  <div class="not-found-root">
    <Result status="404" title="404" sub-title="页面未找到!">
      <template #extra>
        <Button
          v-if="false"
          type="primary"
          @click="
            () => {
              console.log('去登陆');
            }
          "
          >去登陆</Button
        >
      </template>
    </Result>
  </div>
</template>

<style scoped></style>
