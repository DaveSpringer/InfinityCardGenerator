function cardFront() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            model: '=model',
            skills: '=',
            equipment: '='
        },
        templateUrl: 'template/card/card-front.html'
    };
}

angular.module('infinityCardApp')
    .directive('cardFront', cardFront);