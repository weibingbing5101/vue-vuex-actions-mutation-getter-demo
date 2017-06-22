<template>
    <ul class="list">
        <li v-for="item in newsList">
            <img v-lazy="item.newsCover" alt="">
            <div>
                <h3>{{item.newsName}}</h3>
                <p class="content">{{item.content}}</p>
                <div class="btn-list">
                    <i class="iconfont icon-shoucang" @click="save(item)">点赞</i>
                    <i v-if="remove" class="iconfont icon-shoucang quxian" @click="remove(item)">取消点赞</i>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import {
    saveNews
} from '../api/index';

export default {
    props: {
        refresh: {
            type: Function //,
                // detault: function() {}
        },
        newsList: {
            type: Array
        },
        remove: {
            type: Function
        }
    },
    data() {
        return {

        }
    },
    methods: {
        // 点赞时获取已经点赞的列表进行判断
        save(item) {
            saveNews(item).then((data) => {
                console.log(data);
            });
        }
    }
}
</script>
<style scoped lang='less'>
h3 {
    line-height: 40px;
    padding: 0px 10px;
}

.content {
    text-indent: 2em;
    padding: 0px 10px;
}

.btn-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px;
    &>button {
        margin: 0px 10px;
    }
}

.icon-shoucang {
    padding: 0px 20px;
}

.icon-shoucang {
    color: red;
}
.btn-list .quxian{
    color: #3e3e3e;
}
</style>
