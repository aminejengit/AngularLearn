var app = angular.module("myApp",[]);
app.controller("myCtrl", function ($scope,DataService) {
    $scope.firstName = "Amine";
    $scope.lastName = "Jen";
    $scope.somme = DataService.somme(6,9);
});