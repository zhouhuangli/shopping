<template>
    <div class="home">
        <mt-header title="黑马程序员" fixed></mt-header>
        <div class="body_container">
            <div class="lunbo">
                <mt-swipe :auto="40000">
                    <mt-swipe-item>1</mt-swipe-item>
                    <mt-swipe-item>2</mt-swipe-item>
                    <mt-swipe-item>3</mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="list_box">
                <ul>
                    <li>
                        <span></span>
                        <div></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.home{
    .body_container{
        width: 100%;
        margin-top: 40px;
        .lunbo{
            height: 200px;
        }
    }
}

.mint-swipe-items-wrap > div{
    height: 200px;
    font-size: 30px;
    line-height: 200px;
    background: yellow;
}
.mint-swipe-indicators.is-active{
    background: black !important;
}
</style>
