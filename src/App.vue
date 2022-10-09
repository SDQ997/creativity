<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body,html{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app{
  width: 100%;
  height: 100%;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width:12px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  -webkit-box-shadow:inset 0 0 6px rgba(230, 230, 230, 0.3);
  border-radius:10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius:10px;
  background:rgba(233, 233, 233, 0.1);
  -webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background:rgba(163, 163, 163, 0.5);
}
</style>
