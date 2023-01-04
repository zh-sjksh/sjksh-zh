var symptomName = last_year_month();
$(function(){
  init();
})

 function init(){

   var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

   //互联网平均工资
   var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
   histogramChart1.setOption({

     color:['#5bc0de'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '5%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}元"
    },
     calculable : true,
     xAxis : [
         {
             type : 'category',
             data : ['2022年7月','2022年8月','2022年9月','2022年10月','2022年11月','2022年12月'],
             axisLine:{
                  lineStyle:{
                      color: '#5bc0de'
                  },
              },
              axisLabel : {
                interval:0,
                rotate:40,
                  textStyle: {
                      color: '#fff'
                  }
              }
         }
     ],
     yAxis : [
         {
             type : 'value',
             axisLine:{
                 lineStyle:{
                     color: '#5bc0de'
                 },
             },
             splitLine: {
                 "show": false
             },
             axisLabel: {
                 textStyle: {
                     color: '#fff'
                 },
                 formatter: function (value) {
                     return value + ""
                 },
             },
         }
     ],
     series : [
         {
             name:'平均工资',
             type:'bar',
             barWidth : 40,
             data:[17921,16235,15081,14296,13626,13715],
         },
     ],
     toolbox: {
        right:"2%",
        feature: {
          dataView:{show:true,readOnly:false},
          magicType:{show:true,type:['line','bar']},
          restore:{show:true},
          saveAsImage: {}
        },
        itemSize:20,
        iconStyle:{
        color:'white',
        borderColor:'white'
      },
      emphasis:{
        iconStyle:{
          textPosition:'bottom',
        }
      }
      },
   })
   //各岗位平均工资
   var lineChart2 = echarts.init(document.getElementById('lineChart2'));
   lineChart2.setOption({
    color:["#32cd32","#ff7f50","#87cefa","#FD6C88","#4b5cc4","#faff72"],
    tooltip : {
     trigger: 'item',
     formatter: "{a}<br/>{b}<br/>{c}元"
    },
    calculable : true,
    series : [
        {
            name:'12月平均工资',
            type:'pie',
            radius : [40, 140],
            center : ['50%', '50%'],
            roseType : 'area',
            x: '10%',
            sort : 'ascending',
            data:[
                {value:10349, name:'软件工程'},
                {value:10588, name:'软件开发'},
                {value:10271, name:'软件测试'},
                {value:10640, name:'硬件岗位'},
                {value:11785, name:'JAVA软件开发'},
                {value:15193, name:'IOS开发'},
            ]
        }
    ],
    toolbox: {
        right:"2%",
        top:"2%",
        feature: {
          dataView:{show:true,readOnly:false},
          magicType:{show:true,type:['line','bar']},
          restore:{show:true},
          saveAsImage: {}
        },
        itemSize:20,
        iconStyle:{
        color:'white',
        borderColor:'white'
      },
      emphasis:{
        iconStyle:{
          textPosition:'bottom',
        }
      }
      },
   })
 }