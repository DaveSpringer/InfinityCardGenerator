function weaponInputPanel() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            tempWeapon: '=',
            addWeapon: '&',
            exportWeapon: '&'
        },
        templateUrl: 'template/dialog/add-weapon.html'
    };
}

angular.module('infinityCardApp')
    .directive('weaponInputPanel', weaponInputPanel);