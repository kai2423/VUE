<template>
    <Menu mode="horizontal" :theme="theme1">
        <Row>
            <Col span="8">
                <div class="logo">
                    <Icon type="md-analytics" />
                    back-stage
                </div>
            </Col>
            <Col span="8" push="8">
                <div class="icon">
                    <Avatar src="http://pica.nipic.com/2008-01-12/200811215275498_2.jpg" />
                    <Dropdown @on-click="handleClick">
                        <span>{{username}}</span>
                        <Icon type="ios-arrow-down"></Icon>
                        <DropdownMenu slot="list">
                            <DropdownItem>个人中心</DropdownItem>
                            <DropdownItem>未读消息</DropdownItem>
                            <DropdownItem name="logout" divided>注销登录</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Col>
        </Row>
    </Menu>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
                username: ''
            }
        },
        methods: {
            handleClick(name) {
                if (name === 'logout') {
                    sessionStorage.removeItem('user')
                    this.$store.dispatch('handleLogout')
                    this.$router.push('/login')
                }
            }
        },
        beforeMount() {
            this.$store.dispatch('getUserInfo')
            this.username = this.$store.state.user.user.username
        }
    }
</script>

<style lang="less" scoped>
    .ivu-menu {
        height: 64px;
        line-height: 64px;
    }
    .logo {
        display: inline-block;
        width: 200px;
        text-align: center;
        font-size: 30px;
        cursor: default;
        user-select: none;
        border-right: 1px solid #dcdee2;
    }
    .icon {
        display: block;
        width: 200px;
        float: right;
        text-align: center;
    }
</style>
