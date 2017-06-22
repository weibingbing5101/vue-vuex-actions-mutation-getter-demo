<!-- 此页面完全应用vuex请供参考 -->
<template>
    <div class="warp-box">
        <MHeader title="点赞的新闻"></MHeader>
        <div class="aaa">
            <scroller :on-refresh="refresh" ref="scroller" class="top">
                <ScrollList :newsList="getrSaveNews" :remove="remove"></ScrollList>
            </scroller>
        </div>
    </div>
</template>
<script>
import MHeader from 'components/MHeader'

import ScrollList from '../components/ScrollList';


import {
    mapGetters,
    mapActions,
    mapState
} from 'vuex';


export default {
    name: 'Home',
    data() {
        return {}
    },
    created() {
        this.getSaveNews();
    },
    components: {
        MHeader,
        ScrollList
    },
    methods: {
        remove(item) {
            this["removeSaveNew"](item);
        },
        refresh() {
            this.getSaveNews();
            this.$refs.scroller.finishPullToRefresh();
        },
        ...mapActions(['getSaveNews', 'removeSaveNew'])
    },
    computed: {
        // ...mapState(['collect'])   // 获取state上面的一个值
        ...mapGetters(["getrSaveNews"]) //经过计算的state会反回到这里  比mapstate要准确
    },
    activated() {
        this.getSaveNews();
    }
}
</script>
<style scoped lang='less' scoped>
.warp-box {}

.top {
    top: 40px;
    position: absolute;
}

.list {
    padding-bottom: 40px;
}
</style>
