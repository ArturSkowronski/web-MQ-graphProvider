// Change Chart type function
function ChangeChartType(chart, series, newType) {
    newType = newType.toLowerCase();
    chart1
}
var WSerror=true;
// Two charts definition
var chart1, chart2;

// Once DOM (document) is finished loading
$(document).ready(function() {
     var CustomType= 'column';
    // First chart initialization
    if(WSerror){
       confirm("Problem z uruchomieniem Websockets - (Firewall?). Uruchomić symulacje?")
    }
    function ChangeChartType(title, xAxisData,xAxisTitle,yAxisData, yAxisTitle,type) {

    chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'highcharts',
            type: type,
            height: 350
        },

        title: {
            text: title
        },
        xAxis: {
            title: {
                text: xAxisTitle
            },
            categories: xAxisData
        },
        yAxis: {
            title: {
                text: yAxisTitle
            }
        },
        series: yAxisData
    });
    }

    $('#generate_chart').click(function () {

        datasrc=$('#datasrc').val();
        x_val=$('#x_axis').val();
        y_val=$('#y_axis').val();



        if(datasrc==x_val||datasrc==y_val||y_val==x_val){
            var title="Nieprawidłowa kombinacja"
        }

        if(x_val=="Czas"||y_val=="Pogoda"){
            var title="Nieprawidłowa kombinacja"
        }

        if(datasrc=="Użytkownik"&&x_val=="Czas"&&y_val=="Taryfa"){
            var title="Wykres użytej uśrednionej taryfy od godziny dla użytkownika";
            var xAxisTitle='Dzień';
            var yAxisTitle='Taryfa';
            var type='';
            var xAxisData=[];
            var yAxisData=[{
                name: 'Użytkownik 1',
                data: [5.3, 5.8, 4.8,4.7, 6.2, 7.4, 3.4,2.3]
            },
                {
                    name: 'Użytkownik 2',
                    data: [5.5, 5.7, 4.4,4.2, 6.6, 7.4, 3.2,2.9]
                },

                {
                    name: 'Użytkownik 3',
                    data: [6.3, 4.3, 5.2,3.5, 8.7, 2.3, 4.1,1.3]
                },

            ]
        }

        if(datasrc=="Urządzenie"&&x_val=="Czas"&&y_val=="Taryfa"){
            var title="Wykres użytej taryfy od godziny dla urządzenia";
            var xAxisTitle='Dzień';
            var yAxisTitle='Taryfa';
            var type='';
            var xAxisData=[];
            var yAxisData=[{
                name: 'RCX672',
                data: [5.3, 5.8, 4.8,4.7, 6.2, 7.4, 3.4,2.3]
            },
                {
                    name: 'RCX253',
                    data: [5.5, 5.7, 4.4,4.2, 6.6, 7.4, 3.2,2.9]
                },

                {
                    name: 'RCY232',
                    data: [5.7, 5.3, 4.2,4.5, 6.7, 7.3, 3.1,2.3]
                },

            ]
        }



        if(datasrc=="Urządzenie"&&x_val=="Pogoda"&&y_val=="Taryfa"){
            var title="Wykres użytej taryfy od pogody dla użytkownika";
            var xAxisTitle='Pogoda';
            var yAxisTitle='Taryfa';
            var type='column';
            var xAxisData=["Słońce","Zachmurzenie","Deszcz"];
            var yAxisData=[{
                name: 'RCX672',
                data: [6.8, 4.7, 3.6]
            },
                {
                    name: 'RCX253',
                    data: [4.3,3.5,3.8]
                },

                {
                    name: 'RCY232',
                    data: [2.4, 8.2, 5.9]
                },

            ]
        }


        if(datasrc=="Użytkownik"&&x_val=="Pogoda"&&y_val=="Taryfa"){
            var title="Wykres użytej taryfy od pogody dla użytkownika";
            var xAxisTitle='Pogoda';
            var yAxisTitle='Taryfa';
            var type='column';
            var xAxisData=["Słońce","Zachmurzenie","Deszcz"];
            var yAxisData=[{
                name: 'Użytkownik 1',
                data: [6.7, 4.5, 3.4]
            },
                {
                    name: 'Użytkownik 2',
                    data: [4.2,3.7,3.6]
                },

                {
                    name: 'Użytkownik 3',
                    data: [2.3, 8.3, 5.8]
                },

            ]
        }

        var localhost="http://node-mq-graphprovider.herokuapp.com";
        $('#rest_link').attr("href","rest/"+datasrc+"/"+x_val+"/"+y_val);
        $('#rest_link').html(""+localhost+"/rest/"+datasrc+"/"+x_val+"/"+y_val);
        ChangeChartType(title,xAxisData,xAxisTitle,yAxisData,yAxisTitle, type);
    });
});
