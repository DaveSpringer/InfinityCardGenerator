function InfinityCardController($scope, $http) {
    $scope.skills = [];
    $http.get('resources/skills.json').success(function(data) {
        $scope.skills = data;
    });
    $scope.weapons = [];
    $http.get('resources/weapons.json').success(function(data) {
        $scope.weapons = data;
    });
    $scope.secondaryWeapons = [];
    $http.get('resources/ccweapons.json').success(function(data) {
        $scope.secondaryWeapons = data;
    });
    $scope.equipment = [];
    $http.get('resources/equipment.json').success(function(data) {
        $scope.equipment = data;
    });
    $scope.specialistTypes = [{
        "name": "None",
        "value": ""
    }, {
        "name": "Chain of Command",
        "value": "Chain of Com"
    }, {
        "name": "Doctor",
        "value": "Doctor"
    }, {
        "name": "Engineer",
        "value": "Engineer"
    }, {
        "name": "Forward Observer",
        "value": "Forward Obs"
    }, {
        "name": "Hacker",
        "value": "Hacker"
    }, {
        "name": "Paramedic",
        "value": "Paramedic"
    }, {
        "name": "Special Troop",
        "value": "Specialist"
    }];
    /* Unit Designations */
    $scope.units = [];
    $http.get('resources/ariadna.json').success(function(data) {
        $scope.units.push(data);
    });
    $http.get('resources/panoceania.json').success(function(data) {
        $scope.units.push(data);
    });
    $http.get('resources/nomads.json').success(function(data) {
        $scope.units.push(data);
    });
    /* Begin unit properties */
    $scope.model = {};
    $scope.model.name = "Travis Young";
    $scope.model.faction = "Ariadna";
    $scope.model.unit = "Caledonian Volunteer";
    $scope.model.unitImage = "https://static1.squarespace.com/static/5079f36584ae362b5e77c2e9/565e0b51e4b02f39f712b791/565f28dee4b09f89c54287d0/1449076959301/Travis_Young.png";
    $scope.model.scaleHoriz = false;
    $scope.model.fury = "notImpetuous";
    $scope.model.cube = "none";
    $scope.model.hackable = false;
    $scope.model.order = "regular";
    $scope.model.cost = "10";
    $scope.model.swc = "0";
    $scope.model.specialist = "Paramedic";
    $scope.model.MOV = "4-4";
    $scope.model.CC = "13";
    $scope.model.BS = "10";
    $scope.model.PH = "11";
    $scope.model.WIP = "12";
    $scope.model.ARM = "1";
    $scope.model.BTS = "0";
    $scope.model.W = "1";
    $scope.model.S = "2";
    $scope.model.selectedWeapons = ["Rifle"];
    $scope.model.selectedSecondaries = ["Knife", "Pistol"];
    $scope.model.selectedEquipment = ["MediKit"];
    $scope.model.selectedEquipmentBack = [];
    $scope.model.selectedSkills = [];
    $scope.model.selectedSkillsBack = [];
    $scope.model.kills = 0;
    $scope.model.deaths = 0;
    $scope.model.backgroundOnFront = true;
    $scope.model.background = "Travis is the oldest of the three Young boys, and began training to become a doctor prior to his family's debt catching up to him. After his sister was abducted by a Kazak crime syndicate, Travis left the University to help rescue her. During the failed attempt, Travis and his brothers killed over a dozen lackeys. For their own safety, Travis convinced his brothers to volunteer for the Caledonian army where they have thrived.";
    $scope.model.hasCamo = false;
    $scope.model.canBeLt = false;
    /* End unit properties */
    
    /* Event Handlers */
    $scope.setFaction = function() {
        var faction = $scope.temp.faction;
        if (typeof faction !== "undefined") {
            $scope.model.faction = faction.faction;
        }
    }
    
    $scope.setUnit = function() {
        var unit = $scope.temp.unit;
        if (typeof faction === "undefined")
            return;
        var model = $scope.model;
        model.unit = unit.unitName;
        model.MOV = unit.mov;
        model.CC = unit.cc;
        model.BS = unit.bs;
        model.PH = unit.ph;
        model.WIP = unit.wip;
        model.ARM = unit.arm;
        model.BTS = unit.bts;
        model.W = unit.w;
        model.S = unit.s;
        model.selectedSkills = unit.skills;
        model.selectedEquipment = unit.equipment;
        model.selectedWeapons = unit.weapons;
        model.selectedSecondaries = unit.ccWeapons;
        model.hackable = unit.hackable;
        model.cube = unit.cube;
        model.fury = unit.fury;
        model.order = unit.order;
    }
    
    $scope.setLoadout = function() {
        $scope.setUnit();
        var loadout = $scope.temp.loadout;
        if (typeof loadout === "undefined")
            return;
        var model = $scope.model;
        model.selectedWeapons = mergeArray(model.selectedWeapons, loadout.weapons);
        model.selectedEquipment = mergeArray(model.selectedEquipment, loadout.equipment);
        model.selectedEquipmentBack = [];
        model.selectedSkills = mergeArray(model.selectedSkills, loadout.skills);
        model.selectedSkillsBack = [];
        model.selectedSecondaries = mergeArray(model.selectedSecondaries, loadout.ccWeapons);
        model.specialist = loadout.specialist;
        model.cost = loadout.cost;
        model.swc = loadout.swc;
        model.hasCamo = loadout.hasCamo;
        model.canBeLt = loadout.canBeLt;
    }
}

function mergeArray(array1, array2) {
    if (typeof array1 === "undefined")
        return array2;
    if (typeof array2 === "undefined")
        return array1;
    return array1.concat(array2)
}

/* json-text directive taken from here:
http://stackoverflow.com/questions/17893708/angularjs-textarea-bind-to-json-object-shows-object-object
*/
function jsonText() {
    return {
        restrict: 'A', // only activate on element attribute
        require: 'ngModel', // get a hold of NgModelController
        link: function (scope, element, attrs, ngModelCtrl) {

            var lastValid;

            // push() if faster than unshift(), and avail. in IE8 and earlier (unshift isn't)
            ngModelCtrl.$parsers.push(fromUser);
            ngModelCtrl.$formatters.push(toUser);

            // clear any invalid changes on blur
            element.bind('blur', function () {
                element.val(toUser(scope.$eval(attrs.ngModel)));
            });

            // $watch(attrs.ngModel) wouldn't work if this directive created a new scope;
            // see http://stackoverflow.com/questions/14693052/watch-ngmodel-from-inside-directive-using-isolate-scope how to do it then
            scope.$watch(attrs.ngModel, function (newValue, oldValue) {
                lastValid = lastValid || newValue;

                if (newValue != oldValue) {
                    ngModelCtrl.$setViewValue(toUser(newValue));

                    // TODO avoid this causing the focus of the input to be lost..
                    ngModelCtrl.$render();
                }
            }, true); // MUST use objectEquality (true) here, for some reason..

            function fromUser(text) {
                // Beware: trim() is not available in old browsers
                if (!text || text.trim() === '') {
                    return {};
                } else {
                    try {
                        lastValid = angular.fromJson(text);
                        ngModelCtrl.$setValidity('invalidJson', true);
                    } catch (e) {
                        ngModelCtrl.$setValidity('invalidJson', false);
                    }
                    return lastValid;
                }
            }

            function toUser(object) {
                // better than JSON.stringify(), because it formats + filters $$hashKey etc.
                return angular.toJson(object, true);
            }
        }
    };
}

angular.module('infinityCardApp', [])
    .controller('InfinityCardController', InfinityCardController)
    .directive('jsonText', jsonText);