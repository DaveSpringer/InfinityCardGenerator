function inputPanel() {
    return {
        restrict: 'E',
        transclude: true,
        require: "^ngController",
        scope: {
            header: '@'
        },
        templateUrl: 'template/input-panel/input-panel.html'
    };
}

angular.module('infinityCardApp')
    .directive('inputPanel', inputPanel);