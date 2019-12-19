<template>
    <div id="app">
        <div class="header"></div>
        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: "electron-vue-temp"
};
</script>
<style>
* {
    padding: 0;
    margin: 0;
}
body, html {
    width: 100%;
    height: 100%;
}
</style>
<style lang="less" scoped>
@header: 30px;
.header {
    position: relative;
    top: 0;
    left: 0;
    -webkit-app-region: drag;
    height: @header;
}
.body {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: @header;
}
</style>
