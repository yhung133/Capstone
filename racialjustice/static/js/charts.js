crimes = ["Minor in Possession", "Cannabis Control Act", "Robbery", "WARRANT-IN STATE", "Deceptive Practices", "Drug Paraphernalia Act", "Controlled Substance Act", "None", "Interference w/Public Officers", "Battery", "Burglary or Theft From Vehicle", "Theft", "Crim Damage & Trespass to Prop", "Disorderly Conduct", "Intimidation", "Burglary", "Liquor Control Act Violations", "OTHER CRIMINAL OFFENSES", "Unlawful use of I.D.", "Assault", "Noise", "Intoxicating Compounds", "Deadly Weapons", "VIOLATION ORDER PROTECTION", "Sex Offenses", "WARRANT-OUT OF STATE", "BURGLARY TOOLS-POSSESSION", "Arson", "Kidnapping", "Criminal Sexual Assault", "Motor Vehicle Theft", "Bicyclist violation", "DOMESTIC DISPUTE", "Viol of Criminal Registry Laws", "Offenses Involving Children", "PROBATION VIOLATION", "Methamphetamine Offenses", "Homicide", "Hypo Syringes & Needles Act", "DOMESTIC-DISCL DOM VIO VICTIM LOCAT", "Threat - Terrorism", "PAROLE VIOLATION"]

resolutions = ["Jail", "Bond", "RoR", "NtA", "PtC", "Unknown"]

d_reso = {"WARRANT-OUT OF STATE": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [3, 0, 0, 0, 0, 0], "OTHER": [2, 0, 0, 0, 0, 0], "BLACK": [24, 0, 0, 0, 0, 0], "ASIAN": [1, 0, 0, 0, 0, 0], "WHITE": [20, 0, 0, 0, 0, 0]}, "Homicide": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [2, 0, 0, 0, 0, 0], "OTHER": [0, 0, 0, 0, 0, 0], "BLACK": [26, 1, 0, 0, 0, 0], "ASIAN": [1, 0, 0, 0, 0, 0], "WHITE": [5, 0, 0, 0, 0, 0]}, "all": {"UNKNOWN": [16, 4, 7, 56, 0, 4], "HISPANIC": [754, 32, 60, 872, 2, 74], "OTHER": [301, 38, 153, 884, 0, 74], "BLACK": [15954, 213, 832, 5819, 7, 2042], "ASIAN": [102, 34, 24, 351, 7, 5], "WHITE": [6687, 399, 1105, 12717, 19, 665]}, "WARRANT-IN STATE": {"UNKNOWN": [9, 0, 0, 0, 0, 0], "HISPANIC": [207, 1, 0, 0, 0, 4], "OTHER": [42, 0, 0, 0, 0, 3], "BLACK": [6309, 13, 14, 6, 0, 145], "ASIAN": [7, 0, 0, 0, 0, 0], "WHITE": [1991, 4, 1, 0, 0, 40]}, "Deadly Weapons": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [4, 0, 0, 0, 0, 0], "OTHER": [1, 0, 0, 0, 0, 0], "BLACK": [287, 1, 0, 9, 0, 33], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [42, 0, 0, 3, 0, 2]}, "Controlled Substance Act": {"UNKNOWN": [1, 0, 0, 0, 0, 0], "HISPANIC": [15, 0, 0, 4, 0, 1], "OTHER": [8, 0, 0, 2, 0, 0], "BLACK": [422, 2, 0, 33, 0, 15], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [301, 0, 0, 62, 0, 15]}, "Burglary or Theft From Vehicle": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [2, 0, 0, 0, 0, 0], "OTHER": [1, 0, 0, 0, 0, 0], "BLACK": [134, 0, 0, 5, 0, 95], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [72, 1, 0, 0, 0, 18]}, "Disorderly Conduct": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [30, 0, 0, 1, 0, 1], "OTHER": [11, 0, 0, 4, 0, 2], "BLACK": [387, 0, 0, 24, 0, 97], "ASIAN": [4, 0, 0, 0, 0, 0], "WHITE": [185, 0, 0, 24, 0, 18]}, "Viol of Criminal Registry Laws": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [0, 0, 0, 0, 0, 0], "OTHER": [0, 0, 0, 0, 0, 0], "BLACK": [66, 0, 0, 0, 0, 2], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [34, 0, 0, 1, 0, 1]}, "Intoxicating Compounds": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [8, 1, 0, 1, 0, 2], "OTHER": [5, 0, 0, 0, 0, 0], "BLACK": [30, 2, 4, 1, 0, 0], "ASIAN": [3, 0, 0, 1, 0, 0], "WHITE": [92, 2, 3, 12, 0, 0]}, "Noise": {"UNKNOWN": [0, 0, 0, 3, 0, 0], "HISPANIC": [0, 0, 0, 80, 0, 0], "OTHER": [0, 0, 1, 24, 0, 0], "BLACK": [1, 0, 3, 662, 0, 0], "ASIAN": [0, 0, 0, 36, 0, 0], "WHITE": [1, 0, 1, 398, 0, 0]}, "DOMESTIC-DISCL DOM VIO VICTIM LOCAT": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [0, 0, 0, 0, 0, 0], "OTHER": [0, 0, 0, 0, 0, 0], "BLACK": [1, 0, 0, 0, 0, 0], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [0, 0, 0, 0, 0, 0]}, "Assault": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [9, 0, 0, 0, 0, 1], "OTHER": [6, 0, 0, 0, 0, 0], "BLACK": [234, 2, 2, 9, 0, 53], "ASIAN": [4, 0, 0, 0, 0, 0], "WHITE": [122, 0, 0, 9, 0, 6]}, "OTHER CRIMINAL OFFENSES": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [5, 0, 0, 0, 0, 0], "OTHER": [1, 0, 0, 0, 0, 0], "BLACK": [15, 0, 0, 2, 0, 1], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [18, 0, 0, 6, 1, 1]}, "Intimidation": {"UNKNOWN": [0, 0, 0, 1, 0, 0], "HISPANIC": [1, 0, 0, 0, 0, 0], "OTHER": [1, 0, 0, 0, 0, 0], "BLACK": [29, 0, 0, 1, 0, 3], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [18, 0, 0, 1, 0, 4]}, "Drug Paraphernalia Act": {"UNKNOWN": [0, 0, 0, 1, 0, 0], "HISPANIC": [2, 0, 1, 27, 0, 1], "OTHER": [4, 0, 0, 20, 0, 0], "BLACK": [36, 0, 0, 118, 0, 2], "ASIAN": [3, 0, 0, 0, 0, 0], "WHITE": [86, 0, 0, 281, 0, 15]}, "Bicyclist violation": {"UNKNOWN": [0, 0, 0, 2, 0, 0], "HISPANIC": [0, 0, 0, 46, 0, 0], "OTHER": [0, 0, 1, 55, 0, 0], "BLACK": [1, 0, 18, 35, 0, 2], "ASIAN": [0, 0, 0, 184, 0, 0], "WHITE": [1, 0, 5, 477, 0, 0]}, "Theft": {"UNKNOWN": [3, 0, 0, 4, 0, 0], "HISPANIC": [72, 2, 2, 100, 0, 20], "OTHER": [45, 0, 0, 89, 0, 23], "BLACK": [1266, 4, 21, 1200, 0, 362], "ASIAN": [10, 0, 0, 14, 0, 2], "WHITE": [812, 1, 4, 981, 1, 100]}, "Burglary": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [34, 0, 0, 2, 0, 3], "OTHER": [8, 0, 0, 0, 0, 1], "BLACK": [713, 0, 4, 16, 0, 162], "ASIAN": [4, 0, 0, 0, 0, 2], "WHITE": [295, 0, 1, 17, 0, 47]}, "Cannabis Control Act": {"UNKNOWN": [0, 0, 0, 3, 0, 0], "HISPANIC": [22, 0, 1, 49, 0, 7], "OTHER": [26, 0, 0, 32, 0, 0], "BLACK": [416, 0, 2, 930, 0, 56], "ASIAN": [1, 0, 0, 8, 0, 0], "WHITE": [211, 1, 0, 487, 0, 48]}, "Criminal Sexual Assault": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [10, 0, 0, 0, 0, 2], "OTHER": [1, 0, 0, 0, 0, 0], "BLACK": [31, 0, 0, 0, 0, 6], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [25, 0, 0, 0, 0, 2]}, "None": {"UNKNOWN": [0, 4, 7, 14, 0, 4], "HISPANIC": [16, 26, 52, 157, 2, 6], "OTHER": [2, 38, 149, 140, 0, 41], "BLACK": [262, 183, 726, 1295, 7, 81], "ASIAN": [2, 34, 24, 42, 7, 0], "WHITE": [148, 389, 1048, 2194, 17, 100]}, "Hypo Syringes & Needles Act": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [1, 0, 0, 0, 0, 0], "OTHER": [0, 0, 0, 0, 0, 0], "BLACK": [1, 0, 0, 0, 0, 0], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [9, 0, 0, 0, 0, 0]}, "Arson": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [0, 0, 0, 0, 0, 0], "OTHER": [0, 0, 0, 0, 0, 0], "BLACK": [6, 0, 0, 0, 0, 8], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [6, 0, 0, 0, 0, 11]}, "Unlawful use of I.D.": {"UNKNOWN": [0, 0, 0, 2, 0, 0], "HISPANIC": [1, 0, 0, 19, 0, 1], "OTHER": [0, 0, 0, 73, 0, 0], "BLACK": [0, 0, 0, 37, 0, 0], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [3, 0, 0, 684, 0, 1]}, "DOMESTIC DISPUTE": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [0, 0, 0, 0, 0, 0], "OTHER": [0, 0, 0, 0, 0, 0], "BLACK": [7, 0, 0, 0, 0, 1], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [7, 0, 0, 0, 0, 1]}, "Threat - Terrorism": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [0, 0, 0, 0, 0, 0], "OTHER": [1, 0, 0, 0, 0, 0], "BLACK": [0, 0, 0, 0, 0, 0], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [1, 0, 0, 0, 0, 0]}, "Kidnapping": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [1, 0, 0, 0, 0, 0], "OTHER": [1, 0, 0, 1, 0, 0], "BLACK": [36, 0, 0, 13, 0, 1], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [16, 0, 0, 14, 0, 1]}, "Interference w/Public Officers": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [24, 1, 0, 1, 0, 0], "OTHER": [10, 0, 0, 2, 0, 0], "BLACK": [595, 1, 2, 14, 0, 94], "ASIAN": [2, 0, 0, 0, 0, 0], "WHITE": [204, 0, 0, 27, 0, 15]}, "BURGLARY TOOLS-POSSESSION": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [0, 0, 0, 0, 0, 0], "OTHER": [2, 0, 0, 0, 0, 0], "BLACK": [5, 0, 0, 0, 0, 0], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [6, 0, 0, 0, 0, 0]}, "Robbery": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [4, 0, 0, 0, 0, 0], "OTHER": [0, 0, 0, 0, 0, 0], "BLACK": [216, 0, 2, 1, 0, 59], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [31, 0, 0, 2, 0, 3]}, "VIOLATION ORDER PROTECTION": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [8, 0, 0, 0, 0, 0], "OTHER": [1, 0, 0, 1, 0, 0], "BLACK": [83, 0, 0, 3, 0, 2], "ASIAN": [1, 0, 0, 0, 0, 0], "WHITE": [44, 1, 0, 3, 0, 0]}, "Minor in Possession": {"UNKNOWN": [0, 0, 0, 16, 0, 0], "HISPANIC": [2, 0, 1, 218, 0, 0], "OTHER": [0, 0, 1, 320, 0, 0], "BLACK": [0, 0, 0, 274, 0, 1], "ASIAN": [0, 0, 0, 30, 0, 0], "WHITE": [7, 0, 29, 5223, 0, 7]}, "Deceptive Practices": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [21, 0, 0, 8, 0, 2], "OTHER": [6, 0, 0, 5, 0, 1], "BLACK": [359, 0, 3, 76, 0, 57], "ASIAN": [1, 0, 0, 2, 0, 1], "WHITE": [147, 0, 0, 41, 0, 12]}, "PROBATION VIOLATION": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [0, 0, 0, 0, 0, 1], "OTHER": [0, 0, 0, 0, 0, 0], "BLACK": [6, 0, 0, 0, 0, 3], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [4, 0, 0, 0, 0, 0]}, "Liquor Control Act Violations": {"UNKNOWN": [0, 0, 0, 9, 0, 0], "HISPANIC": [6, 0, 0, 118, 0, 1], "OTHER": [7, 0, 0, 69, 0, 0], "BLACK": [12, 0, 0, 507, 0, 3], "ASIAN": [0, 0, 0, 26, 0, 0], "WHITE": [67, 0, 7, 1308, 0, 6]}, "Crim Damage & Trespass to Prop": {"UNKNOWN": [2, 0, 0, 1, 0, 0], "HISPANIC": [40, 0, 1, 17, 0, 2], "OTHER": [38, 0, 1, 21, 0, 1], "BLACK": [1021, 2, 13, 310, 0, 126], "ASIAN": [18, 0, 0, 2, 0, 0], "WHITE": [407, 0, 3, 196, 0, 55]}, "Battery": {"UNKNOWN": [1, 0, 0, 0, 0, 0], "HISPANIC": [193, 1, 2, 23, 0, 19], "OTHER": [70, 0, 0, 24, 0, 2], "BLACK": [2798, 2, 11, 204, 0, 533], "ASIAN": [40, 0, 0, 5, 0, 0], "WHITE": [1163, 0, 3, 229, 0, 124]}, "Offenses Involving Children": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [1, 0, 0, 1, 0, 0], "OTHER": [0, 0, 0, 2, 0, 0], "BLACK": [43, 0, 5, 29, 0, 9], "ASIAN": [0, 0, 0, 1, 0, 0], "WHITE": [9, 0, 0, 28, 0, 0]}, "Motor Vehicle Theft": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [2, 0, 0, 0, 0, 0], "OTHER": [0, 0, 0, 0, 0, 0], "BLACK": [33, 0, 2, 1, 0, 23], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [23, 0, 0, 1, 0, 4]}, "Sex Offenses": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [7, 0, 0, 0, 0, 0], "OTHER": [1, 0, 0, 0, 0, 0], "BLACK": [38, 0, 0, 4, 0, 7], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [47, 0, 0, 5, 0, 8]}, "PAROLE VIOLATION": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [1, 0, 0, 0, 0, 0], "OTHER": [0, 0, 0, 0, 0, 0], "BLACK": [0, 0, 0, 0, 0, 0], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [2, 0, 0, 0, 0, 0]}, "Methamphetamine Offenses": {"UNKNOWN": [0, 0, 0, 0, 0, 0], "HISPANIC": [0, 0, 0, 0, 0, 0], "OTHER": [0, 0, 0, 0, 0, 0], "BLACK": [5, 0, 0, 0, 0, 0], "ASIAN": [0, 0, 0, 0, 0, 0], "WHITE": [5, 0, 0, 3, 0, 0]}}

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
            data :['01/01/10','04/01/10','07/01/10','10/01/10','01/01/11','04/01/11','07/01/11','10/01/11','01/01/12','04/01/12','07/01/12','10/01/12','01/01/13','04/01/13','07/01/13','10/01/13','01/01/14','04/01/14','07/01/14','10/01/14','01/01/15','04/01/15','07/01/15','10/01/15','01/01/16','04/01/16','07/01/16']
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
            data:[178,131,196,226,271,190,239,271,300,225,268,242,284,210,281,245,207,200,254,305,283,244,265,230,243,190,181]
        },
        {
            name:'Black',
            type:'bar',
            stack: 'race',
            data:[1614,1721,2025,1626,1632,1653,1841,1367,1513,1186,1287,1101,1297,1477,1456,1244,1150,1157,1196,1149,1334,1448,1602,1303,1322,1281,1279]
        },
        {
            name:'Other',
            type:'bar',
            stack: 'race',
            data:[13,5,12,14,10,9,6,17,12,16,8,22,7,12,7,7,14,10,11,18,13,14,17,14,10,14,17]
        },
        {
            name:'Hispanic',
            type:'bar',
            stack:'race',
            data:[230,254,273,221,243,184,217,219,175,200,190,171,212,186,202,188,197,193,191,171,225,162,198,188,148,171,151]
        },
        {
            name:'White',
            type:'bar',
            stack:'race',
            data:[2077,1795,2138,1816,2448,1970,2029,1920,2143,1414,1891,1651,1637,1463,1593,1557,1519,1363,1353,1401,1536,1474,1770,1387,1379,1138,1138]
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

$(function(){
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
                data : resolutions
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
                stack:'reso',
                data:d_reso['all']['ASIAN']
            },
            {
                name:'Black',
                type:'bar',
                stack:'reso',
                data: d_reso['all']['BLACK']
            },
            {
                name:'Other',
                type:'bar',
                stack:'reso',
                data:d_reso['all']['OTHER']
            },
            {
                name:'Hispanic',
                type:'bar',
                stack:'reso',
                data:d_reso['all']['HISPANIC']
            },
            {
                name:'White',
                type:'bar',
                stack:'reso',
                data:d_reso['all']['WHITE']
            }
        ]
    };
    barchart2.setOption(option5);
    
    $("#selectCrime").change(function (evt) {
        var crime = $("#selectCrime").val();
        if (crime == 'All Non Motor-Vehicle-Offense Crimes'){
            crime = 'all';
        }
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
                    data : resolutions
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
                    stack:'reso',
                    data:d_reso[crime]['ASIAN']
                },
                {
                    name:'Black',
                    type:'bar',
                    stack:'reso',
                    data: d_reso[crime]['BLACK']
                },
                {
                    name:'Other',
                    type:'bar',
                    stack:'reso',
                    data:d_reso[crime]['OTHER']
                },
                {
                    name:'Hispanic',
                    type:'bar',
                    stack:'reso',
                    data:d_reso[crime]['HISPANIC']
                },
                {
                    name:'White',
                    type:'bar',
                    stack:'reso',
                    data:d_reso[crime]['WHITE']
                }
            ]
        };        
        barchart2.setOption(option5);
    });
});

setTimeout(function (){
    window.onresize = function () {
        barchart1.resize();
        piechart1.resize();
        piechart2.resize();
        piechart3.resize();
        barchart2.resize();
    }
},200)