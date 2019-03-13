<template>
    <Card style="width:360px;margin:120px auto;">
        <p slot="title">
            <Icon type="ios-body"></Icon>
            管理员登录
        </p>
        <Form>
            <FormItem prop="user">
                <Input type="text" v-model="user.username" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="user.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Checkbox v-model="config.remember">记住密码</Checkbox>
            </FormItem>
            <FormItem style="margin-bottom:0;">
                <Button type="primary" @click="handleSubmit" long>登录</Button>
            </FormItem>
        </Form>
    </Card>
</template>

<script>
    export default {
        data () {
            return {
                user: {
                    username: 'aszed',
                    password: 'admin'
                },
                config: {
                    remember: true
                }
            }
        },
        methods: {
            handleSubmit() {
                this.$axios.post('/getLogin', this.user)
                .then(res => {
                    if (res.data.success) {
                        this.$Message.info('登录成功')
                        let user = res.data.userInfo
                        sessionStorage.setItem('user', JSON.stringify(user))
                        this.$store.dispatch('handleLogin', user)
                        this.$router.push({ path: '/home' })
                    } else {
                        this.$Message.warning('登录失败')
                    }
                })
                .catch(err => {
                    this.$Message.error('登录错误')
                });
            }
        }
    }
</script>