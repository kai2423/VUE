<template>
	<Menu ref="leftMenu" :theme="theme1" width="200" @on-select="handleRouter" active-name="1-1" :open-names="['1']">
		<Submenu name="1">
			<template slot="title">
				<Icon type="ios-paper" />
				个人信息
			</template>
			<MenuItem name="1-1" class="subitem">我的信息</MenuItem>
			<MenuItem name="1-2" class="subitem">文件上传</MenuItem>
		</Submenu>
		<MenuItem name="2">
			<Icon type="ios-podium" />
			我的图表
		</MenuItem>
			<MenuItem name="3">
				<Icon type="md-list"></Icon>
				我的表格
			</MenuItem>
	</Menu>
</template>
<script>
export default {
  	data() {
    	return {
			theme1: 'light'
    	};
	},
	methods: {
		handleRouter(name) {
			if (name === '1-1') this.$router.push('/form1')
			if (name === '1-2') this.$router.push('/form2')
			if (name === '2') this.$router.push('/chart')
			if (name === '3') this.$router.push('/table')
		}
	},
    mounted() {
		this.$nextTick(() => {
			this.$refs.leftMenu.updateOpened()
			this.$refs.leftMenu.updateActiveName()
		});
	}
}
</script>

<style lang="less" scoped>
	.ivu-menu-vertical.ivu-menu-light:after {
		width: 0px;
		height: 0px;
	}
	.subitem {
		background: #fcf9f9;
	}
</style>


