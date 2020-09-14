<template>
  <div class="hello">
    <h1 class="message">{{ msg }}</h1>
    <h1 ref="title" class="title">hhh</h1>
    <div id="counter-box">
      <span class="change-text" name="ccc">{{ counter }}</span>
      <button @click="counter++">点击</button>
    </div>

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'dddffff',
    },
  },
  data() {
    return {
      text: 'this is a line message.',
      counter: 0,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
