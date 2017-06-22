<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in data">
                <img :src="item" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
export default {
    props: ['data'],
    data() {
        return {}
    },
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: '.swiper-pagination'
        });
    }
}
</script>
<style scoped lang='less'>
.swiper-container {
    width: 100%;
}

.swiper-wrapper {
    width: 100%;
}

img {
    display: block;
    width: 100%;
}
</style>
