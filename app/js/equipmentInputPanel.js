function equipmentInputPanel() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            tempEquipment: '=',
            orderTypes: '=',
            addEquipment: '&',
            exportEquipment: '&'
        },
        templateUrl: 'template/dialog/add-equipment-dialog.html'
    };
}

angular.module('infinityCardApp')
    .directive('equipmentInputPanel', equipmentInputPanel);