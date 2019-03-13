<template>
    <div>
        <Table border ref="selection" :columns="columns" :data="list" style="margin-bottom:10px;"></Table>
        <Button @click="handleSelectAll(true)">全选</Button>
        <Button @click="handleSelectAll(false)">取消</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '邮箱',
                        key: 'email'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                list: []
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }
        },
        beforeMount() {
            this.$axios.get('/getList')
            .then(res => {
                this.list = res.data
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
</script>