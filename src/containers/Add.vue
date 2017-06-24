<template>
    <div class="warp-box">
        <MHeader :title="title"></MHeader>
        <div class="add">
            <div class="group">
                <label for="newsName">新闻标题</label>
                <input type="text" id="newsName" placeholder="请输入新闻标题" v-model="news.newsName">
            </div>
            <div class="group">
                <label for="newsName">新闻封面</label>
                <input type="text" id="newsCover" placeholder="请输入新闻封面" v-model="news.newsCover">
            </div>
            <div class="group">
                <label for="content">新闻内容</label>
                <textarea name="comtent" id="content" placeholder="请输入新闻内容" v-model="news.content"></textarea>
            </div>
            <div class="group">
                <button @click="submit">{{title}}</button>
            </div>
        </div>
    </div>
</template>
<script>
import MHeader from 'components/MHeader';

import {
    addNews
} from '../api/index';

export default {
    name: 'Home',
    data() {
        return {
            news: {
                newsName: '',
                newsCover: '',
                content: ''
            },
            title: '添加新闻'
        }
    },
    methods: {
        submit() {
            addNews(this.news).then((data)=>{
                console.log(data);
            });
        }
    },
    created() {},
    components: {
        MHeader
    }
}
</script>
<style scoped lang='less' scoped>
.add {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    .group {
        label {
            font-size: 16px;
            line-height: 25px;
        }
        input {}
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        button {
            height: 35px;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
    }
    textarea {
        height: 200px;
        resize: none;
    }
}
</style>
