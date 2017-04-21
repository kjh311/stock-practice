var app = angular.module("myapp", [])

// app.config(['$httpProvider', function($httpProvider) {
//         $httpProvider.defaults.useXDomain = true;
// $httpProvider.defaults.withCredentials = true;
// delete $httpProvider.defaults.headers.common["X-Requested-With"];
// $httpProvider.defaults.headers.common["Accept"] = "application/json";
// $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
//     }
// ]);


   
   app.controller("MyController", function($scope, $http) {
 

      


// http://cors.io/?

var fbdata = {};
var dayOne = {};
var dayOneDate = {};
var dayTwo = {};
var dayThree = {};
var dayFour = {};
var dayFive = {};
var daySix = {};
var daySeven = {};
var dayEight = {};
var dayNine = {};
var dayTen = {};

      $http.get("http://api.kibot.com/?action=history&symbol=FB&interval=daily&period=10&user=guest&password=guest").success(function(data) {
        $scope.FBdata = data;
        fbdata = data;
        res = fbdata.split(",");
        dayOne = parseFloat(res[4]);
        dayTwo = parseFloat(res[9]);
        dayThree = parseFloat(res[14]);
        dayFour = parseFloat(res[19]);
        dayFive = parseFloat(res[24]);
        daySix = parseFloat(res[29]);
        daySeven = parseFloat(res[34]);
        dayEight = parseFloat(res[39]);
        dayNine = parseFloat(res[44]);
        dayTen = parseFloat(res[49]);
        console.log(res[14]);
        console.log(typeof dayOne);
      });


      google.charts.load('current', {'packages':['line']});
      setTimeout(function(){
        google.charts.setOnLoadCallback(drawChart);
      }, 1000);

    function drawChart() {

      var blah = new google.visualization.DataTable();
      blah.addColumn('number', 'Day');
      blah.addColumn('number', 'My Stock');
      // blah.addColumn('number', 'The Avengers');
      // blah.addColumn('number', 'Transformers: Age of Extinction');

      blah.addRows([
        [1,  dayOne],
        [2,  dayTwo],
        [3,  dayThree],
        [4,  dayFour],
        [5,  dayFive],
        [6,   daySix],
        [7,   daySeven],
        [8,  dayEight],
        [9,  dayNine],
        [10, dayTen]
      ]);

      var options = {
        chart: {
          title: 'Stock Price',
          subtitle: 'in millions of dollars (USD)'
        },
        width: 1000,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('linechart_material'));

      chart.draw(blah, google.charts.Line.convertOptions(options));
    }
   });