<template>
    <div id="app">
        <div class="content-box">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <Tab></Tab>
    </div>
</template>
<script>
import Tab from './components/Tab.vue';
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    components: {
        Tab
    }
}
</script>
<style>
</style>
