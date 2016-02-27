function ccWeaponInputPanel() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            tempCcWeapon: '=',
            addCcWeapon: '&',
            exportCcWeapon: '&'
        },
        templateUrl: 'template/dialog/add-cc-weapon.html'
    };
}

angular.module('infinityCardApp')
    .directive('ccWeaponInputPanel', ccWeaponInputPanel);