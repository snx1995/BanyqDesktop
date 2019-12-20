<template>
    <div class="main-page">
        <ul>
            <li><router-link :to="{name: 'player'}">Player</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'MainPage',
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.main-page {
    width: 100%;
    height: 100%;
    .inner-app {

    }
}
</style>