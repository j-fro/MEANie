var myApp = angular.module('myApp', []);
myApp.controller('whereMyPeeps', ['$scope', '$http', function($scope, $http) {
    $scope.addRecord = function() {
        event.preventDefault();
        var objectToSend = {
            name: $scope.nameIn,
            location: $scope.locationIn,
        };
        $http({
            method: 'POST',
            url: '/testPost',
            data: objectToSend
        })
        .then(function(response) {
            console.log(response);
            if(response.statusText === 'OK') {
                $scope.getRecords();
                $scope.nameIn = '';
                $scope.locationIn = '';
            }
        });
    };
    $scope.getRecords = function() {
        $http({
                method: 'GET',
                url: '/getRecords',
            })
            .then(function(response) {
                $scope.allTheRecords = response.data;
                console.log($scope.allTheRecords);
            })
            .catch(function(response) {
                console.log(response.statusText);
            });
    };
}]);
