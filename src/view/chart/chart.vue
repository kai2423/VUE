<template>
    <div>
        <Row :gutter="20" style="margin-bottom:20px;">
            <Col span="12">
                <Card>
                    <div class="myChart" id="exam01"></div>
                </Card>
            </Col>
            <Col span="12">
                <Card>
                    <div class="myChart" id="exam02"></div>
                </Card>
            </Col>
        </Row>
        <Row :gutter="20">
            <Col span="12">
                <Card>
                    <div class="myChart" id="exam03"></div>
                </Card>
            </Col>
            <Col span="12">
                <Card>
                    <div class="myChart" id="exam04"></div>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let exam01 = this.$echarts.init(document.getElementById('exam01'))
            let exam02 = this.$echarts.init(document.getElementById('exam02'))
            let exam03 = this.$echarts.init(document.getElementById('exam03'))
            let exam04 = this.$echarts.init(document.getElementById('exam04'))
            exam01.setOption({
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            })
            exam02.setOption({
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:274, name:'联盟广告'},
                            {value:235, name:'视频广告'},
                            {value:400, name:'搜索引擎'}
                        ].sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#000'
                                }
                            }
                        }
                    }
                ]
            })
            exam03.setOption({
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            })
            exam04.setOption({
                xAxis: {},
                yAxis: {},
                series: [{
                    symbolSize: 20,
                    data: [
                        [10.0, 8.04],
                        [8.0, 6.95],
                        [13.0, 7.58],
                        [9.0, 8.81],
                        [11.0, 8.33],
                        [14.0, 9.96],
                        [6.0, 7.24],
                        [4.0, 4.26],
                        [12.0, 10.84],
                        [7.0, 4.82],
                        [5.0, 5.68]
                    ],
                    type: 'scatter'
                }]
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .myChart {
        display: block;
        width: 100%;
        height: 300px;
    }
</style>

