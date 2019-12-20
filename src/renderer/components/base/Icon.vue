<template>
    <div class="banyq-icon">
        <svg v-if="type == 'svg'" :width="width + 'px'" :height="height + 'px'">
            <slot></slot>
        </svg>
    </div>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        type: {
            type: String,
            default: 'icon-font'
        },
        width: {
            type: Number,
            default: 18
        },
        height: {
            type: Number,
            default: 18
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.banyq-icon {
    display: inline-block;
}
</style>