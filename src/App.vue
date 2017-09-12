<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: "PingFangSC-Regular", "Microsoft Yahei", "Helvetica Neue",Helvetica,Arial;
}

ul,
li {
  list-style: none;
}
a:hover, a:visited, a:link, a:active{
  text-decoration: none;
}
a {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}
</style>
