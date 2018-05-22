let app = angular.module("app", ["ui.ace"]);

app.controller("codeController", ["$scope", function($scope){

    console.log("INSIDE CONTROLLER!!!");

    $scope.fetchValue = function(){
        console.log($scope.code);
    };


    $scope.resetValue = function(){
        console.log($scope.code);
        $scope.code = `var st = "Hello World";
        var str1 = "More!!!"`
    };
}]);