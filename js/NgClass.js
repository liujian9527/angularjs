var myCSSModule = angular.module('MyCSSModule', []);
myCSSModule.controller('HeaderController', ['$scope',
    function($scope) {
        $scope.isError = false;
        $scope.isWarning = false;
        $scope.showError = function() {
            $scope.messageText = 'This is an error!';
            $scope.isError = true;
            $scope.isWarning = false;
        };
        $scope.showWarning = function() {
            $scope.messageText = 'Just a warning. Please carry on.';
            $scope.isWarning = true;
            $scope.isError = false;
        };
    }
])

//angular.element(document).ready(function(){
//angular.bootstrap(document,['mymodule']);
//})

//1，ng-app。 2. bootstrap方法。 3，启动多个app。第三种是前两种的结合