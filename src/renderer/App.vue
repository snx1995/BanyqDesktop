<template>
    <div id="app">
        <div class="body">
            <router-view></router-view>
        </div>
        <div class="header">
            <div></div>
            <div class="window-ctrls" @click="handleWindowCtrlClick">
                <Icon type="svg" class="window-ctrl" data-ctrl="devTools">
                    <path d="M1 1H17V17H1ZM1 5H17M7 7L3 11L7 15M9 7L13 15" fill="none" stroke="#555" style="stroke-width: 1px;"/>
                </Icon>
                <Icon type="svg" class="window-ctrl" data-ctrl="back">
                    <path d="M16 2L2 9L16 16" fill="none" stroke="#555" style="stroke-width: 1px;"/>
                </Icon>
                <Icon type="svg" class="window-ctrl" data-ctrl="go">
                    <path d="M2 2L16 9L2 16" fill="none" stroke="#555" style="stroke-width: 1px;"/>
                </Icon>
                <Icon type="svg" class="window-ctrl" data-ctrl="top">
                    <path d="M2 2H16M2 16L9 7L16 16" fill="none" stroke="#555" style="stroke-width: 1px;"/>
                </Icon>
                <Icon type="svg" class="window-ctrl" data-ctrl="minimize">
                    <path d="M1 17H17" fill="none" stroke="#555" style="stroke-width: 1px;"/>
                </Icon>
                <Icon type="svg" class="window-ctrl" data-ctrl="unmaximize">
                    <path d="M1 4H14V17H1ZM4 4V1H17V14H14" fill="none" stroke="#555" style="stroke-width: 1px;"/>
                </Icon>
                <Icon type="svg" class="window-ctrl" data-ctrl="maximize">
                    <path d="M1 1H17V17H1Z" fill="none" stroke="#555" style="stroke-width: 1px;"/>
                </Icon>
                <Icon type="svg" class="window-ctrl" data-ctrl="close">
                    <path d="M1 1L17 17M1 17L17 1" fill="none" stroke="#555" style="stroke-width: 1px;"/>
                </Icon>
            </div>
        </div>
    </div>
</template>
<script>
import { ipcRenderer } from 'electron';
export default {
    name: "electron-vue-temp",
    data() {
        return {

        }
    },
    methods: {
        handleWindowCtrlClick(e) {
            const target = e.target;
            if (target.matches('.window-ctrl, .window-ctrl *')) {
                const closest = target.closest('.window-ctrl');
                const winctrl = closest ? closest : target;
                ipcRenderer.send('cmd', winctrl.dataset.ctrl);
            }
        }
    }
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    > * {
        -webkit-app-region: no-drag;
    }
    .window-ctrls {
        padding: 0 2px;
        height: 18px;
        .window-ctrl {
            cursor: pointer;
            &:hover {
                opacity: .9;
            }
            &:active {
                opacity: .8;
            }
        }
    }
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
