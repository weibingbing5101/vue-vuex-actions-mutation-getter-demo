<template>
    <div class="warp-box">
        <MHeader title="新闻列表"></MHeader>
        <div>
            <scroller :on-refresh="refresh" ref="scroller" class="top">
                <ScrollList :newsList="newsList"></ScrollList>
            </scroller>
        </div>
    </div>
</template>
<script>
import MHeader from 'components/MHeader';

import ScrollList from '../components/ScrollList';

import {
    getNewsList
} from '../api/index';

export default {
    name: 'Home',
    data() {
        return {
            newsList: []
        }
    },
    created() {
        this.getList();
    },
    methods: {
        refresh() {
            //获取最新数据
            this.getList();
        },
        getList() {
            getNewsList().then(data => {
                this.newsList = data; //读取所有图书放到数组中
                this.$refs.scroller.finishPullToRefresh();
            })
        },
    },
    components: {
        MHeader,
        ScrollList
    }
};
</script>
<style scoped lang='less' scoped>
.content-box {
    height: 100%;
    padding-bottom: 0px;
}

.top {
    top: 40px;
    position: absolute;
}

.list {
    padding-bottom: 40px;
}
</style>
