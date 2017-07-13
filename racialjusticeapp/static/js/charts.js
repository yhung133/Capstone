var barchart1 = echarts.init(document.getElementById('barchart1'));
var option1 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            
            type : 'shadow'        
        }
    },
    legend: {
        top: 'bottom',
        data:['White','Black','Asian','Hispanic','Other']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['01/01/10','04/01/10','07/01/10','10/01/10','01/01/11','04/01/11','07/01/11','10/01/11','01/01/12','04/01/12','07/01/12', '10/01/12','01/01/13','04/01/13','07/01/13','10/01/13','01/01/14','04/01/14','07/01/14','10/01/14','01/01/15','04/01/15','07/01/15','10/01/15','01/01/16','04/01/16','07/01/16','10/01/16']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Asian',
            type:'bar',
            stack: 'race',
            data:[178,131,196,226,271,190,239,271,300,225,268,242,284,210,281,245,207,200,254,305,283,244,265,230,243,190,181,43]
        },
        {
            name:'Black',
            type:'bar',
            stack: 'race',
            data:[1614,1721,2025,1626,1632,1653,1841,1367,1513,1186,1287,1101,1297,1477,1456,1244,1150,1157,1196,1149,1334,1448,1602,1303,1322,1281,1279,193]
        },
        {
            name:'Other',
            type:'bar',
            stack: 'race',
            data:[13,5,12,14,10,9,6,17,12,16,8,22,7,12,7,7,14,10,11,18,13,14,17,14,10,14,17,9]
        },
        {
            name:'Hispanic',
            type:'bar',
            stack:'race',
            data:[230,254,273,221,243,184,217,219,175,200,190,171,212,186,202,188,197,193,191,171,225,162,198,188,148,171,151,24]
        },
        {
            name:'White',
            type:'bar',
            stack:'race',
            data:[2077,1795,2138,1816,2448,1970,2029,1920,2143,1414,1891,1651,1637,1463,1593,1557,1519,1363,1353,1401,1536,1474,1770,1387,1379,1138,1138,219]
        }
    ]
};
barchart1.setOption(option1);

var piechart1 = echarts.init(document.getElementById('piechart1'));
var option2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['White','Black','Asian','Hispanic','Other']
    },
    series: [
        {
            name:'Composition',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:22139, name:'Asian'},
                {value:27360, name:'Black'},
                {value:626, name:'Other'},
                {value:11905, name:'Hispanic'},
                {value:146829, name:'White'}
            ]
        }
    ]
};
piechart1.setOption(option2);

var piechart2 = echarts.init(document.getElementById('piechart2'));
var option3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['White','Black','Asian','Hispanic','Other']
    },
    series: [
        {
            name:'Composition',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:2714, name:'Asian'},
                {value:57831, name:'Black'},
                {value:6831, name:'Other'},
                {value:7711, name:'Hispanic'},
                {value:63905, name:'White'}
            ]
        }
    ]
};
piechart2.setOption(option3);

var piechart3 = echarts.init(document.getElementById('piechart3'));
var option4 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['Champaign','UIUC','Urbana']
    },
    series: [
        {
            name:'Jurisdiction',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:80456, name:'Champaign'},
                {value:15339, name:'UIUC'},
                {value:43197, name:'Urbana'},
            ]
        }
    ]
};
piechart3.setOption(option4);

var barchart2 = echarts.init(document.getElementById('barchart2'));
var option5 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            
            type : 'shadow'        
        }
    },
    legend: {
        top: 'bottom',
        data:['White','Black','Asian','Hispanic','Other']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['01/01/10','04/01/10','07/01/10','10/01/10','01/01/11','04/01/11','07/01/11','10/01/11','01/01/12','04/01/12','07/01/12', '10/01/12','01/01/13','04/01/13','07/01/13','10/01/13','01/01/14','04/01/14','07/01/14','10/01/14','01/01/15','04/01/15','07/01/15','10/01/15','01/01/16','04/01/16','07/01/16','10/01/16']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Asian',
            type:'bar',
            stack: 'race',
            data:[178,131,196,226,271,190,239,271,300,225,268,242,284,210,281,245,207,200,254,305,283,244,265,230,243,190,181,43]
        },
        {
            name:'Black',
            type:'bar',
            stack: 'race',
            data:[1614,1721,2025,1626,1632,1653,1841,1367,1513,1186,1287,1101,1297,1477,1456,1244,1150,1157,1196,1149,1334,1448,1602,1303,1322,1281,1279,193]
        },
        {
            name:'Other',
            type:'bar',
            stack: 'race',
            data:[13,5,12,14,10,9,6,17,12,16,8,22,7,12,7,7,14,10,11,18,13,14,17,14,10,14,17,9]
        },
        {
            name:'Hispanic',
            type:'bar',
            stack:'race',
            data:[230,254,273,221,243,184,217,219,175,200,190,171,212,186,202,188,197,193,191,171,225,162,198,188,148,171,151,24]
        },
        {
            name:'White',
            type:'bar',
            stack:'race',
            data:[2077,1795,2138,1816,2448,1970,2029,1920,2143,1414,1891,1651,1637,1463,1593,1557,1519,1363,1353,1401,1536,1474,1770,1387,1379,1138,1138,219]
        }
    ]
};
barchart2.setOption(option5);