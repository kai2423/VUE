<template>
    <Form :model="formItem" :label-width="80">
        <FormItem label="昵称"">
            <Input v-model="formItem.input" placeholder="恺恺"></Input>
        </FormItem>
        <FormItem label="你的省份">
            <Select v-model="formItem.select">
                <Option value="beijing">江西</Option>
                <Option value="shanghai">北京</Option>
                <Option value="shenzhen">上海</Option>
                <Option value="shenzhen">天津</Option>
                <Option value="shenzhen">重庆</Option>
                <Option value="shenzhen">上海</Option>
                <Option value="shenzhen">安徽</Option>
                <Option value="shenzhen">福建</Option>
                <Option value="shenzhen">甘肃</Option>
                <Option value="shenzhen">广西</Option>
                <Option value="shenzhen">贵州</Option>
                <Option value="shenzhen">海南</Option>
                <Option value="shenzhen">河北</Option>
                <Option value="shenzhen">河南</Option>
                <Option value="shenzhen">黑龙江</Option>
                <Option value="shenzhen">湖北</Option>
                <Option value="shenzhen">湖南</Option>
                <Option value="shenzhen">吉林</Option>
                <Option value="shenzhen">江苏</Option>
                <Option value="shenzhen">辽宁</Option>
                <Option value="shenzhen">内蒙古自治区</Option>
                <Option value="shenzhen">宁夏自治区</Option>
                <Option value="shenzhen">青海</Option>
                <Option value="shenzhen">山东</Option>
                <Option value="shenzhen">山西</Option>
                <Option value="shenzhen">四川</Option>
                <Option value="shenzhen">云南</Option>
                <Option value="shenzhen">浙江</Option>
                <Option value="shenzhen">台湾</Option>
                <Option value="shenzhen">西藏藏族自治区</Option>
                <Option value="shenzhen">新疆维吾尔自治区</Option>

            </Select>
        </FormItem>
        <FormItem label="生日">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="日期" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="11">
                    <TimePicker type="time" placeholder="时间" v-model="formItem.time"></TimePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="性别">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="爱好">
            <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="我的幸福指数">
            <br>
            <Slider v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="说说"">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="输入一些东西吧 。。。"></Input>
        </FormItem>
        <FormItem label="信息是否公开">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem>
            <Button type="primary">提交</Button>
            <Button style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>