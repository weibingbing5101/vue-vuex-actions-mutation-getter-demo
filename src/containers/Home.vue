<template>
    <div class="warp-box">
        <MHeader title="新闻"></MHeader>
        <div v-if="sliderimgs.length">
            <Slider :data="sliderimgs"></Slider>
        </div>
        <p class="new-update">热点新闻</p>
        <div class="listbox">
            <ScrollList :newsList="books">
            </ScrollList>
        </div>
        <Loading v-if="isLoading"></Loading>
    </div>
</template>
<script>
import MHeader from '../components/MHeader';
import Loading from '../components/Loading';
import Slider from '../components/Slider';

import ScrollList from '../components/ScrollList';

import {
    mapGetters,
    mapActions,
    mapState
} from 'vuex';

import {
    getSliderImg,
    getHotNews,
    // getSaveNews
} from '../api/index.js';


export default {
    name: 'Home',
    data() {
        return {
            isLoading: true,
            sliderimgs: [],
            books: []
        }
    },
    created() {
        this.getAllData();
    },
    // ,getSaveNews()
    methods: {
        ...mapActions(['getSaveNews']),

        // getAllData 如果想实现all方法  可以写到actions里面
        getAllData() {
            this.getSaveNews(); // 用actions 获取收藏的新闻到state
            Promise.all([getSliderImg(), getHotNews()]).then((data) => {
                this.isLoading = false;
                console.log(data)
                this.sliderimgs = data[0];
                this.books = data[1];
            });
        }
    },
    components: {
        MHeader,
        Loading,
        Slider,
        ScrollList
    },
    activated() {
        this.getAllData();
    }
}
</script>
<style scoped lang='less' scoped>
.new-update {
    line-height: 40px;
    padding: 0px 10px;
}

.books-itme-span {
    text-indent: 2em;
}

.listbox {}

.top {
    top: 0px;
}
</style>
