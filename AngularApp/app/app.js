var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, DataService) {
    $scope.firstName = "Amine";
    $scope.lastName = "Jen";
    $scope.workers = DataService.getWorkers();
    $scope.change = function (worker) {
        worker.nom = "kaka";
    };
    $scope.reset = function (){
        $scope.workers = DataService.getWorkers();
    }
});

