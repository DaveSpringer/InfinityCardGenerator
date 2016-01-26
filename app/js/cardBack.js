function cardBack() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            model: '=',
            skills: '=',
            equipment: '='
        },
        templateUrl: 'template/card/card-back.html'
    };
}

angular.module('infinityCardApp')
    .directive('cardBack', cardBack);