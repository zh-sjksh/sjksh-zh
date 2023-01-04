var symptomName = last_year_month();
$(function(){
  init();
})

 function init(){

   var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

   //教师平均工资
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
             data:[9986,9985,9955,9620,9826,10290],
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
   //各科老师平均工资
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
            name:'11月平均工资',
            type:'pie',
            radius : [40, 140],
            center : ['50%', '50%'],
            roseType : 'area',
            x: '10%',
            sort : 'ascending',
            data:[
                {value:10553, name:'语文老师'},
                {value:8058, name:'数学老师'},
                {value:10937, name:'物理老师'},
                {value:10438, name:'化学老师'},
                {value:10224, name:'英语老师'},
                {value:10439, name:'音乐老师'},
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