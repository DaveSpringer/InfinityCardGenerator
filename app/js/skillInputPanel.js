function skillInputPanel() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            tempSkill: '=',
            orderTypes: '=',
            addSkill: '&',
            exportSkill: '&',
            showSkillInput: '='
        },
        templateUrl: 'template/dialog/add-skill.html'
    };
}

angular.module('infinityCardApp')
    .directive('skillInputPanel', skillInputPanel);