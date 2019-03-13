<template>
    <div class="layout">
        <Layout>
            <Header>
                <Affix>
                    <HeadBar></HeadBar>
                </Affix>
            </Header>
            <Layout>
                <Sider style="background:#fff;border-right:1px solid #dcdee2;">
                    <Affix :offset-top="64">
                        <SideBar></SideBar>
                    </Affix>
                </Sider>
                <Layout>
                    <Content :style="{padding: '20px', minHeight: autoHeight, background: '#fff'}">
                        <transition>
                            <router-view></router-view>
                        </transition> 
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import HeadBar from '_c/header/headBar.vue'
import SideBar from '_c/sider/siderBar.vue'

export default {
    components: {
        HeadBar,
        SideBar
    },
    data() {
        return {
            autoHeight: ''
        }
    },
    beforeMount() {
        this.$router.push('/form1')
        this.autoHeight = window.innerHeight - 64 + 'px'
    }
}
</script>

<style lang="less" scoped>
    .ivu-layout{
        border: none;
        position: relative;
    }
    .ivu-layout-header {
		padding: 0;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>
