<template>
    <div id="box">
        <el-card id="main1"></el-card>
        <el-card id="main2"></el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr1: '', //班级与人数
            // 作业完成率
            workComplete: [],
            checkRate: [],
            work: []
        }
    },

    created() {
        // 班级人数饼图
        this.service.get('/student').then((res) => {
            // 生成对应班级和人数
            // 获得班级名称
            let name = Array.from(new Set(res.data.map((item) => { return item.class + '' })))
            let list = []
            // 构建数据模板
            name.forEach(item => {
                list.push(
                    {
                        name: item,
                        value: 0
                    }
                )
            })
            //计算人数
            list.forEach(item => {
                res.data.forEach(element => {
                    if (element.class == item.name) {
                        item.value += 1
                    }
                })
            })
            list.map(item => {
                item.name = item.name + '班'
            })
            this.arr1 = list
            this.draw(this.arr1)
        }).catch(err => {
            console.log(err);
        })
        // 作业完成率图
        this.service.get('/work').then((res) => {
            res.data.forEach(item => {
                this.workComplete.push(Math.round((Number(item.completedNumber) / (Number(item.completedNumber) + Number(item.uncompletedNumber))) * 100));
                this.checkRate.push(Math.round(Number(item.completedNumber / (Number(item.completedNumber) + Number(item.uncompletedNumber) * 2)) * 100));
                this.work.push(item.jobName)
            })
            this.draw2(this.work, this.workComplete, this.checkRate)
        }).catch(err => console.log(err))
    },

    methods: {
        // 班级人数饼图渲染
        draw(arr1) {
            var myChart = this.echarts.init(document.getElementById('main1'))
            let option = {
                // 标题
                title: {
                    text: '班级人数(单位：人)'
                },
                // 悬浮显示数据
                tooltip: {
                    show: true
                },
                legend: {
                    top: 'bottom'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                series: [
                    {
                        name: '班级人数',
                        type: 'pie',
                        radius: [50, 250],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8
                        },
                        data: arr1
                    }
                ]
            };
            myChart.setOption(option)
        },
        // 作业完成率渲染
        draw2(work, workComplete, checkRate) {
            var myChart1 = this.echarts.init(document.getElementById('main2'))
            let option = {
                title: {
                    text: '作业完成率(单位：%)'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: work
                },
                series: [
                    {
                        name: '作业完成率',
                        type: 'bar',
                        data: workComplete
                    },
                    {
                        name: '作业批改率',
                        type: 'bar',
                        data: checkRate
                    }
                ]
            };
            myChart1.setOption(option)
        }
    }
    ,
    mounted() {
    },

}
</script>

<style lang="scss" scoped>
#box {
    width: 100%;
    display: flex;

    #main1,
    #main2 {
        width: 50%;
        height: 700px;
    }
}
</style>