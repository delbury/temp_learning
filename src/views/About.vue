<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 class="sub-title">副标题</h2>
    <div class="container">
      <h3 class="header">副副标题</h3>
      <div class="content">内容</div>
    </div>
  </div>
</template>

<script>
import { print } from './option'
export default {
  created() {
    print('23333')
  },
}
</script>
