// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var data1=[];
var data2=[];
var data3=[];
for(var i=0;i<50;i++){
    data1.push(Math.random()*5000);
    data2.push(Math.random()*50);
}
for(var j=0;j<50;j++){
    data3.push(j);
}
var option = {
    grid:{
        left:0,
        right:0,
        top:0,
        bottom:0
    },
    //代表x轴，这里type类型代表字符
    xAxis: [{
        show:false,
        type: 'category',
        boundaryGap: false,//这里表示是否补齐空白
        splitLine:{show: false},//去除网格线
        data: data3
    }],
    //代表y轴，这里type类型代表num类型
    yAxis: [
        {
            type: 'value',
            splitLine:{
                lineStyle:{
                    type:'dashed'
                }
            }
        },
        {
            type: 'value',
            splitLine:{
                lineStyle:{
                    type:'dashed'
                }
            }
        }
    ],
    //图表类型，type表示按照什么类型图表显示，line代表折线，下面的内容与
    //legend一一对应
    series: [{
        name: '海拔(米)',
        type: 'line',
        smooth: true,
        symbol:'none',
        itemStyle: {
            normal: {
                color:'#00B8DF',
                lineStyle:{
                    color:'#00B8DF'
                },
                areaStyle: {
                    type: 'default',
                    color:'#00B8DF'
                }
            }
        },
        data: data1
    }, {
        name: '速度（公里/时）',
        type: 'line',
        smooth: true,
        symbol:'none',
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color:'#34E299',
                lineStyle:{
                    color:'#34E299'
                }
            }
        },
        data:data2
    }]
};
//配置图表设置并读取
myChart.setOption(option);
