$(function () {
    echart_1();
    echart_2();
    echart_3();
    echart_4();
    echart_map();
    setDivHeight();

    //根据屏幕设置div高度
    function setDivHeight() {
        $(".data_content").height(window.innerHeight - 120);
    }

    //echart_1 全省碳排放趋势预测
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:[],
                textStyle:{
                    color: '#fff'
                },
                top: '8%'
            },
            grid: {
                top: '30%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['01','02','03','04','05','06','07','08','09','10','11','12'],
                splitLine: {
                    show: false
                },
                offset:10,
                axisTick:{ //y轴刻度线
                    show:false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '单位万吨',
                nameTextStyle: {
                    color: "#FFF",
                    nameLocation: "center",
                },
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: "#3A4467"
                    }
                },
                min: 5000,
                axisLine: {
                    show:false,
                },
                axisTick:{ //y轴刻度线
                    show:false,
                },
                axisLabel: {
                    textStyle: {
                        color: "#FFF"
                    }
                },
            },
            series: [
                {
                    name: '碳排放量',
                    lineStyle: {
                        color: '#1DA0FF'
                    },
                    smooth: false, //true 有弧度 ，false 没弧度（直线）
                    symbol: 'circle',
                    type: 'line',
                    itemStyle: {
                        normal: {
                            color: '#1DA0FF'
                        }
                    },
                    markPoint: {
                        symbol:'circle',
                        symbolSize: 10,

                        itemStyle:{
                            normal:{
                                color: '#F48D01',
                                label:{
                                    show: true,
                                    color: '#FFF',
                                    position: 'bottom',
                                }
                            }
                        },
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    data: [7100, 6600, 6200, 5900, 5810, 6700, 6800, 7550, 7100, 6950, 6900, 7713]
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //电子商务销售额、订单数
    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['正常值', '超出值'],
                textStyle:{
                    color: '#fff'
                },
                top: '8%'
            },
            grid: {
                top: '20%',
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '临沂', '德州', '聊城', '滨州', '菏泽'],
                splitLine: {
                    show: false
                },
                offset:5,
                axisTick:{ //y轴刻度线
                    show:false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    color: '#FFF',
                    //  让x轴文字方向为竖向
                    interval: 0,
                    formatter: function(value) {
                        return value.split('').join('\n')
                    }
                }
            },
            yAxis: {
                name: '单位万吨',
                nameTextStyle: {
                    color: "#FFF",
                    nameLocation: "center",
                },
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: "#3A4467"
                    }
                },
                axisLine: {
                    show:false,
                },
                axisTick:{ //y轴刻度线
                    show:false,
                },
                axisLabel: {
                    textStyle: {
                        color: "#FFF"
                    }
                },
            },
            series: [

                {

                    name: '超出值',
                    type: 'bar',
                    barGap: "-100%",
                    data: [9461.88, 0, 0, 0, 0, 0, 10233.63, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    itemStyle: {
                        normal: {
                            color: '#FE0000',
                            barBorderRadius: [5, 5, 5, 5]
                        }
                    }
                },
                {

                    name: '正常值',
                    type: 'bar',
                    barGap: "-100%",
                    data: [5961.88, 4933.63, 4183.14, 1133.01, 4204.47,4061.88, 7883.14, 2183.14, 1633.01, 2704.47, 3861.88, 5100, 2050, 2100, 5500, 2000,],
                    itemStyle: {
                        normal: {
                            color: '#AF6911',
                            barBorderRadius: [5, 5, 5, 5]
                        }
                    }
                },
            ]
        };
        myChart.setOption(option);
    }

    // echart_map中国地图
    function echart_map() {
        var myChart = echarts.init(document.getElementById('chart_map'));
        function showProvince() {
            var geoCoordMap = {
                '富川瑶族自治县': [111.1627,24.4913],'龙州县': [106.8545,22.3426],'南丹县': [107.5422,24.9753],
                '扶绥县': [107.9041,22.6349],'天峨县': [107.1737,24.9991],'大化瑶族自治县': [107.9981,23.7364],
                '乐业县': [106.5616,24.7858],'西林县': [105.0938,24.4895],'资源县': [110.6525,26.0424],
                '都安瑶族自治县': [108.1055,23.9312],'上林县': [108.6050,23.4320],'凌云县': [106.5615,24.3475],
                '东兰县': [107.3742,24.5107],'巴马瑶族自治县': [107.2596,24.1410],'田阳县': [106.9156,23.7356],
                '靖西市': [106.4176,23.1340],'大新县': [107.2012,22.8304],'三江侗族自治县': [109.6078,25.7831],
                '龙胜各族自治县': [110.0114,25.7980],'全州县': [111.0730,25.9286],'融安县': [109.3976,25.2246],
                '柳城县': [109.2446,24.6505],'忻城县': [108.6657,24.0661],'鹿寨县': [109.7517,24.4730],
                '宾阳县': [108.8103,23.2176],'兴业县': [109.8751,22.7363],'横县': [109.2614,22.6799],
                '灵山县': [109.2909,22.4165],'浦北县': [109.5569,22.2715],'东兴市': [107.9718,21.5479],
                '灌阳县': [111.1608,25.4893],'恭城瑶族自治县': [110.8283,24.8313],'荔浦县': [110.3981,24.4965],
                '昭平县': [110.8113,24.1694],'金秀瑶族自治县': [110.1894,24.1303],'桂平市': [110.0790,23.3941],
                '田东县': [107.1260,23.5972],'凤山县': [107.0422,24.5469],'环江毛南族自治县': [108.2583,24.8260],
                '马山县': [108.1770,23.7081],'罗城仫佬族自治县': [108.9046,24.7773],'德保县': [106.6155,23.3234],
                '融水苗族自治县': [109.2563,25.0662],'天等县': [107.1436,23.0813],'隆林县': [105.3438,24.7706],
                '那坡县': [105.8334,23.3871],'平果县': [107.5898,23.3293]
            };
            var data = [
                {
                    name: '富川瑶族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '龙州县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '南丹县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },
                {
                    name: '扶绥县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '天峨县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '大化瑶族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '乐业县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '西林县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业2家<br/>电商服务站目前数量94个站点<br/>广西乐村淘科技有限公司、广西国际电子商务中心<br/>主要推广的产品有西林沙糖桔、麻鸭、姜晶等地理标志保护产品']
                },{
                    name: '资源县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '都安瑶族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '上林县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '凌云县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '东兰县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '巴马瑶族自治县',
                    value: [50,'项目承建企业1家<br/>电商服务站目前数量85个站点<br/>参加电商培训人数1500人<br/>特色粮经作物：包括蚕桑、火麻、龙骨花、中药材、红薯、马铃薯、小杂粮等。<br/>主要承建内容:县级服务中心建设、乡镇级服务站、村级服务点建设']
                },{
                    name: '田阳县',
                    value: [50,'项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '靖西市',
                    value: [50,'项目承建企业1家<br/>电商服务站目前数量60个站点<br/>参加电商培训人数1500人<br/>特色产品：靖西绣球、靖西壮锦、靖西东利大香儒<br/>主要承建内容:靖西各镇乡村服务站点建设']
                },{
                    name: '大新县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '三江侗族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '龙胜各族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '全州县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '融安县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '柳城县',
                    value: [50,'项目承建企业2家<br/>电商服务站目前数量125个站点<br/>参加电商培训人数5000人<br/>特色产品：新味嘉木瓜丝、寨隆壮方红糖<br/>主要承建内容:农村电子商务公共服务体系村级服务点建设。']
                },{
                    name: '忻城县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '鹿寨县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '宾阳县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '兴业县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '横县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '灵山县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '浦北县',
                    value: [50,'项目承建企业2家<br/>电商服务站目前数量161个站点<br/>参加电商培训人数8572人<br/>特色产品：浦北扁柑、浦北黑猪、官垌鱼、浦北黑叶荔<br/>主要承建内容:建设浦北县电子商务公共服务中心，<br/>县级公共服务中心与品牌推与展示区、创业孵化区、培训区集聚发展。']
                },{
                    name: '东兴市',
                    value: [50,'项目承建企业3家<br/>电商服务站目前数量34个站点<br/>特色产品：东兴红姑娘红薯、东兴黄皮果、京族二宝<br/>主要承建内容:建设东兴市电子商务进农村服务中心。<br/>含公共服务区、多平台运营服务区等。']
                },{
                    name: '灌阳县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '恭城瑶族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '荔浦县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '昭平县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '金秀瑶族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '桂平市',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '田东县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '凤山县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '环江毛南族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '马山县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '罗城仫佬族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '德保县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '融水苗族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '天等县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '隆林县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '那坡县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '平果县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                }
            ];
            var max = 480,
                min = 9;
            var maxSize4Pin = 50,
                minSize4Pin = 20;
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];

                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                        });
                    }
                }
                return res;
            };

            myChart.setOption(option = {
                tooltip: {
                    trigger: 'item',
                    formatter: function loadData(result){
                        return result.name+'<br />' +result.value[3];
                    }
                },
                geo: {
                    zoom:1.2,
                    show: true,
                    map:'山东',
                    mapType: '山东',
                    label: {
                        normal: {
                            show : true,
                            textStyle:{color:"#4bf316"}
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 2,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(   47,79,79, .2)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    }
                },
                series: [
                    {
                        name: '电商进农村示范县',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin',
                        symbolSize: function(val) {
                            var a = (maxSize4Pin - minSize4Pin) / (max - min);
                            var b = minSize4Pin - a * min;
                            b = maxSize4Pin - a * max;
                            return a * val[2] + b;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 10,
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'red', //标志颜色
                            }
                        },
                        zlevel: 6,
                        data: convertData(data),
                    },
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 47)),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        itemStyle: {
                            normal: {
                                color: '#05C3F9',
                                shadowBlur: 10,
                                shadowColor: '#05C3F9'
                            }
                        },
                        zlevel: 1
                    },

                ]
            });
        }
        showProvince();
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_3货物周转量
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['低碳情景','基准情景','高耗能情景'],
                textStyle:{
                    color: '#fff'
                },
                top: '8%'
            },
            grid: {
                top: '30%',
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2018','2022','2026','2030','2034','2038','2042','2046','2050'],
                splitLine: {
                    show: false
                },
                offset:10,
                axisTick:{ //y轴刻度线
                    show:false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '单位万吨',
                nameTextStyle: {
                    color: "#FFF",
                    nameLocation: "center",
                },
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: "#3A4467"
                    }
                },
                min:50,
                axisLine: {
                    show:false,
                },
                axisTick:{ //y轴刻度线
                    show:false,
                },
                axisLabel: {
                    textStyle: {
                        color: "#FFF"
                    }
                },
            },
            series: [
                {
                    name:'低碳情景',
                    type:'line',
                    lineStyle: {
                        color: '#53C7A0'
                    },
                    smooth: false, //true 有弧度 ，false 没弧度（直线）
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#53C7A0'
                        }
                    },
                    data:[78, 90, 108, 105, 95,86     , 76, 72, 73]
                },
                {
                    name:'基准情景',
                    type:'line',
                    lineStyle: {
                        color: '#28A1FB'
                    },
                    smooth: false, //true 有弧度 ，false 没弧度（直线）
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#28A1FB'
                        }
                    },
                    data:[78,89, 98, 108, 109,105   , 97, 86, 69.4]
                },
                {
                    name:'高耗能情景',
                    type:'line',
                    lineStyle: {
                        color: '#E37A17'
                    },
                    smooth: false, //true 有弧度 ，false 没弧度（直线）
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#E37A17'
                        }
                    },
                    data:[81, 86, 93, 105, 118,126   , 128, 124, 107]
                },
            ]
        };
        myChart.setOption(option);
    }

    //湖南省飞机场
    function echart_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['低碳情景','基准情景','高耗能情景'],
                textStyle:{
                    color: '#fff'
                },
                top: '8%'
            },
            grid: {
                top: '30%',
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2018','2022','2026','2030','2034','2038','2042','2046','2050'],
                splitLine: {
                    show: false
                },
                offset:10,
                axisTick:{ //y轴刻度线
                    show:false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '单位万吨',
                nameTextStyle: {
                    color: "#FFF",
                    nameLocation: "center",
                },
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: "#3A4467"
                    }
                },
                min:50,
                axisLine: {
                    show:false,
                },
                axisTick:{ //y轴刻度线
                    show:false,
                },
                axisLabel: {
                    textStyle: {
                        color: "#FFF"
                    }
                },
            },
            series: [
                {
                    name:'低碳情景',
                    type:'line',
                    lineStyle: {
                        color: '#53C7A0'
                    },
                    smooth: false, //true 有弧度 ，false 没弧度（直线）
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#53C7A0'
                        }
                    },
                    data:[78, 90, 108, 105, 95,86     , 76, 72, 73]
                },
                {
                    name:'基准情景',
                    type:'line',
                    lineStyle: {
                        color: '#28A1FB'
                    },
                    smooth: false, //true 有弧度 ，false 没弧度（直线）
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#28A1FB'
                        }
                    },
                    data:[78,89, 98, 108, 109,105   , 97, 86, 69.4]
                },
                {
                    name:'高耗能情景',
                    type:'line',
                    lineStyle: {
                        color: '#E37A17'
                    },
                    smooth: false, //true 有弧度 ，false 没弧度（直线）
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#E37A17'
                        }
                    },
                    data:[81, 86, 93, 105, 118,126   , 128, 124, 107]
                },
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }



});
