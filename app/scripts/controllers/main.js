/**
 * Created by AZMA on 20/04/2016.
 */
function mainController($scope, $http) {
  $http.get('scripts/data.json').success(function(data) {
    $scope.appoinments = data;
    $scope.appoOrder = 'name';
    $scope.CustomOrder = function (item) {
      if($scope.appoOrder == "name")
        return item.name;
      else if($scope.appoOrder == "doctor")
        return item.doctor;
      else if($scope.appoOrder =="date")
        return new Date(item.date);
      else if($scope.appoOrder =="time")
        return new Date("04/20/2016 " + item.time);
    }
  });
}
angular.module('myApp', [])
.controller('MyController', ['$scope', '$http', mainController]);

