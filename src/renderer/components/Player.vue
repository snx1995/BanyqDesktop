<template>
    <div class="player">
        <div class="player-content">
            <div class="left-list">
                <ul>
                    <li v-for="(item, index) in playList" :key="index" @dblclick="jump(index)" :class="{active: playIndex == index}">
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom-bar">
            <button @click="handlePrev">prev</button>
            <button @click="handlePlay">play/pause</button>
            <button @click="handlePost">post</button>
            <button @click="handleImport">import</button>
        </div>
        <audio :src="playSrc" ref="audio" style="display: none;" />
        <input type="file" accept=".mp3" ref="fileInput" multiple @change="handleFileChange" style="display: none;">
    </div>
</template>
<script>
export default {
    name: 'Player',
    data() {
        return {
            playList: [],
            playIndex: 0
        }
    },
    methods: {
        handleFileChange() {
            this.playList = this.$refs.fileInput.files;
        },
        handlePrev() {
            if (this.playIndex > 0) {
                this.playIndex --;
            } else this.playIndex = this.playList.length - 1;
            this.jump();
        },
        handlePost() {
            if (this.playIndex < this.playList.length - 1) {
                this.playIndex ++;
            } else this.playIndex = 0;
            this.jump();
        },
        handlePlay() {
            this.$nextTick(() => {
                const audio = this.$refs.audio;
                if (audio.paused)  audio.play();
                else audio.pause();
            })
        },
        handleImport() {
            this.$refs.fileInput.click();
        },
        jump(index) {
            if (index != undefined) this.playIndex = index;
            this.handlePlay();
        }
    },
    computed: {
        playSrc() {
            if (this.playList.length > 0) return window.URL.createObjectURL(this.playList[this.playIndex]);
            return '';
        }
    }
}
</script>
<style lang="less" scoped>
@bottomBarHeight: 50px;
.player {
    width: 100%;
    height: 100%;
    .bottom-bar {
        height: @bottomBarHeight;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        border-top: 1px solid #ddd;
    }
    .player-content {
        @letfWdith: 150px;
        width: 100%;
        height: 100%;
        padding-bottom: @bottomBarHeight;
        box-sizing: border-box;
        .left-list {
            width: @letfWdith;
            height: 100%;
            border-right: 1px solid #ddd;
            ul {
                li {
                    padding: 5px 0;
                    font-size: 12px;
                    color: #aaa;
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    cursor: pointer;
                    &:hover, &.active {
                        background-color: #ddd;
                        color: #555;
                    }
                }
            }
        }
    }
}
</style>