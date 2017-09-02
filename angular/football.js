

var myApp = angular.module("matchesApp", []);

myApp.controller("MainController", ["$scope","$http",function($scope,$http){

	
    console.log('in controller');
	$scope.title = "Stats for EPL";
	$scope.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
	$scope.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
	$scope.name="";
	
  $scope.loadMatches = function(){
  	
 $scope.matches1 = [];	
	$scope.totalMatches = [];
  	 $scope.matches2= [];
	console.log('in loadMatches');
      
      
      var url1Call = function () {
            $http({
            method: 'GET',
            url:$scope.baseUrl1
          }).then(function successCallback(response) {
              // $scope callback will be called asynchronously
              // when the response is available
                console.log('success in url1');
                $scope.matches1.push(response.data);
                url2Call();


                // console.log($scope.matches1);

            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              alert("some error occurred. Check the console.");

            });
    };


      var url2Call = function () {
          $http({
            method: 'GET',
            url: $scope.baseUrl2
          }).then(function successCallback(response) {
              // $scope callback will be called asynchronously
              // when the response is available
              console.log('success in url2');
              $scope.matches2.push(response.data);
              $scope.matches1.push($scope.matches2[0]);
              urlcallsDone();



            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              alert("some error occurred. Check the console.");

            });
      };

     
    var urlcallsDone = function () {
         console.log($scope.matches1.length);
          console.log($scope.matches1);
    };

      url1Call();
      

    
   //  $scope.matches1.push($scope.matches1,$scope.matches2);
   
   // console.log($scope.matches1);


  };
   


}]);


