function InfinityCardController($scope, $http, ngDialog) {
    $scope.skills = [];
    $http.get('resources/skills.json').success(function (data) {
        $scope.skills = data;
    });
    $scope.weapons = [];
    $http.get('resources/weapons.json').success(function (data) {
        $scope.weapons = data;
    });
    $scope.secondaryWeapons = [];
    $http.get('resources/ccweapons.json').success(function (data) {
        $scope.secondaryWeapons = data;
    });
    $scope.equipment = [];
    $http.get('resources/equipment.json').success(function (data) {
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
    $scope.orderTypes = ["Automatic", "Short", "Short-Aro", "Entire", "Deployment"];
    /* Unit Designations */
    $scope.units = [];
    $http.get('resources/aleph.json').success(function (data) {
        $scope.units.push(data);
    });
    $http.get('resources/ariadna.json').success(function (data) {
        $scope.units.push(data);
    });
    $http.get('resources/ca.json').success(function (data) {
        $scope.units.push(data);
    });
    $http.get('resources/nomads.json').success(function (data) {
        $scope.units.push(data);
    });
    $http.get('resources/panoceania.json').success(function (data) {
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
    $scope.model.cardBackground = "#DCDDDF";
    $scope.model.headerBackground = "#0090A5";
    $scope.model.headerTextColor = "#FFFFFF";
    $scope.model.unitStatsBackground = "#0090A5";
    $scope.model.unitStatsText = "#FFFFFF";
    $scope.model.scoresBackground = "#0090A5";
    $scope.model.scoresText = "#FFFFFF";
    $scope.model.healthType = "W";
    $scope.model.skillsBackground = "#888888";
    $scope.model.skillsText = "#FFFFFF";
    $scope.model.equipmentBackground = "#888888";
    $scope.model.equipmentText = "#FFFFFF";
    $scope.model.backgroundBackground = "#888888";
    $scope.model.backgroundText = "#FFFFFF";
    $scope.model.hiddenInfoHeaderBackground = "#000000";
    $scope.model.hiddenInfoHeaderColor = "#FFFFFF";
    $scope.model.hiddenInfoBackground = "#0090A5";
    $scope.model.hiddenInfoColor = "#FFFFFF";
    $scope.model.weaponText = "#0090A5";
    $scope.model.ccWeaponText = "#004D58";
    $scope.model.skillsListText = "#A54900";
    $scope.model.equipmentListText = "#582700";
    /* End unit properties */

    /* Temp Skill */
    $scope.tempSkill = {};
    $scope.tempSkill.name = "Your Skill Name Here";
    $scope.tempSkill.type = "Short";
    $scope.tempSkill.desc = "Skill description."
    /* End Temp Skill */

    /* Dialog Objects */
    $scope.tempWeapon = {};
    $scope.tempCcWeapon = {};
    $scope.tempEquipment = {};
    $scope.tempEquipment.name = "Your Equipment Name Here";
    $scope.tempEquipment.type = "Short";
    $scope.tempEquipment.desc = "Your description here.";
    /* End Dialog Objects */

    /* Additional Controls */
    $scope.showSkillInput = false;
    /* End Additional Controls */

    /* Event Handlers */
    $scope.setFaction = function (faction) {
        if (typeof faction === "undefined") {
            faction = this.temp.faction;
        }
        $scope.model.faction = faction.faction;
    }

    $scope.saveToPc = function (data) {
        var filename = $scope.model.name + '.json';
        console.log('Saving to PC using file name:' + filename);
        var data = JSON.stringify($scope.model, undefined, 2);

        var blob = new Blob([data], {
                type: 'text/json'
            }),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a');

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window,
            0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    };

    $scope.setUnit = function (unit) {
        if (typeof unit === "undefined")
            unit = this.temp.unit;
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
        model.selectedSkillsBack = unit.skillsBack;
        model.selectedEquipment = unit.equipment;
        model.selectedEquipmentBack = unit.equipmentBack;
        model.selectedWeapons = unit.weapons;
        model.selectedSecondaries = unit.ccWeapons;
        model.hackable = unit.hackable;
        model.cube = unit.cube;
        model.fury = unit.fury;
        model.order = unit.order;
        model.topLeft = {};
        model.topRight = {};
        model.bottomLeft = {};
        model.bottomRight = {};

        if (typeof unit.name !== "undefined")
            model.name = unit.name;
        if (typeof unit.backgroundOnFront !== "undefined")
            model.backgroundOnFront = unit.backgroundOnFront;
        else
            model.backgroundOnFront = true;
        if (typeof unit.background !== "undefined")
            model.background = unit.background;
        model.specialist = unit.specialist;
        // Defaulting health type to Wounds.
        if (typeof unit.healthType === "undefined")
            model.healthType = "W";
    }

    $scope.setLoadout = function (loadout, unit) {
        if (typeof loadout === "undefined")
            loadout = this.temp.loadout;
        if (typeof unit === "undefined")
            unit = this.temp.unit;
        $scope.setUnit(unit);
        var model = $scope.model;
        model.selectedWeapons = mergeArray(model.selectedWeapons, loadout.weapons);
        model.selectedEquipment = mergeArray(model.selectedEquipment, loadout.equipment);
        model.selectedEquipmentBack = mergeArray(model.selectedEquipmentBack, loadout.equipmentBack);
        model.selectedSkills = mergeArray(model.selectedSkills, loadout.skills);
        model.selectedSkillsBack = mergeArray(model.selectedSkillsBack, loadout.skillsBack);
        model.selectedSecondaries = mergeArray(model.selectedSecondaries, loadout.ccWeapons);
        model.specialist = loadout.specialist;
        model.cost = loadout.cost;
        model.swc = loadout.swc;
        model.hasCamo = loadout.hasCamo;
        model.canBeLt = loadout.canBeLt;
    }

    $scope.resetColors = function () {
        $scope.model.cardBackground = "#DCDDDF";
        $scope.model.headerBackground = "#0090A5";
        $scope.model.headerTextColor = "#FFFFFF";
        $scope.model.unitStatsBackground = "#0090A5";
        $scope.model.unitStatsText = "#FFFFFF";
        $scope.model.scoresBackground = "#0090A5";
        $scope.model.scoresText = "#FFFFFF";
        $scope.model.healthType = "W";
        $scope.model.skillsBackground = "#888888";
        $scope.model.skillsText = "#FFFFFF";
        $scope.model.equipmentBackground = "#888888";
        $scope.model.equipmentText = "#FFFFFF";
        $scope.model.backgroundBackground = "#888888";
        $scope.model.backgroundText = "#FFFFFF";
        $scope.model.hiddenInfoHeaderBackground = "#000000";
        $scope.model.hiddenInfoHeaderColor = "#FFFFFF";
        $scope.model.hiddenInfoBackground = "#0090A5";
        $scope.model.hiddenInfoColor = "#FFFFFF";
        $scope.model.weaponText = "#0090A5";
        $scope.model.ccWeaponText = "#004D58";
        $scope.model.skillsListText = "#A54900";
        $scope.model.equipmentListText = "#582700";
    }

    $scope.showAddSkill = function () {
        $scope.showSkillInput = !$scope.showSkillInput;
    }

    $scope.showAddWeapon = function () {
        $scope.showWeaponInput = !$scope.showWeaponInput;
    }

    $scope.showAddCcWeapon = function () {
        $scope.showCcWeaponInput = !$scope.showCcWeaponInput;
    }

    $scope.showAddEquipment = function () {
        $scope.showEquipmentInput = !$scope.showEquipmentInput;
    }

    $scope.exportSkill = function () {
        $scope.exportObject = $scope.tempSkill;
        var dialog = ngDialog.open({
            template: 'template/dialog/export-object-dialog.html',
            controller: 'InfinityCardController',
            scope: $scope
        })
    }

    $scope.addSkill = function (tempSkill) {
        debugger;
        var newSkill = {};
        newSkill.name = $scope.tempSkill.name;
        newSkill.type = $scope.tempSkill.type;
        newSkill.desc = $scope.tempSkill.desc;
        $scope.skills.push(newSkill);

        return true;
    }

    $scope.exportEquipment = function () {
        $scope.exportObject = $scope.tempEquipment;
        var dialog = ngDialog.open({
            template: 'template/dialog/export-object-dialog.html',
            controller: 'InfinityCardController',
            scope: $scope
        })
    }

    $scope.addEquipment = function () {
        var newEquipment = {};
        newEquipment.name = $scope.tempEquipment.name;
        newEquipment.type = $scope.tempEquipment.type;
        newEquipment.desc = $scope.tempEquipment.desc;
        $scope.equipment.push(newEquipment);

        return true;
    }

    $scope.addWeapon = function () {
        var newWeapon = {};
        newWeapon.name = $scope.tempWeapon.name;
        newWeapon.burst = $scope.tempWeapon.burst;
        newWeapon.dam = $scope.tempWeapon.dam;
        newWeapon.ammo = $scope.tempWeapon.ammo;
        newWeapon.traits = $scope.tempWeapon.traits;
        $scope.weapons.push(newWeapon);
        return true;
    }

    $scope.exportWeapon = function () {
        $scope.exportObject = $scope.tempWeapon;
        var dialog = ngDialog.open({
            template: 'template/dialog/export-object-dialog.html',
            controller: 'InfinityCardController',
            scope: $scope
        })
    }

    $scope.addCcWeapon = function () {
        debugger;
        var tempCcWeapon = $scope.tempCcWeapon;
        var newCcWeapon = {};
        newCcWeapon.name = tempCcWeapon.name;
        newCcWeapon.burst = tempCcWeapon.burst;
        newCcWeapon.dam = tempCcWeapon.dam;
        newCcWeapon.ammo = tempCcWeapon.ammo;
        newCcWeapon.traits = tempCcWeapon.traits;
        $scope.secondaryWeapons.push(newCcWeapon);
        return true;
    }

    $scope.exportCcWeapon = function () {
        $scope.exportObject = $scope.tempCcWeapon;
        var dialog = ngDialog.open({
            template: 'template/dialog/export-object-dialog.html',
            controller: 'InfinityCardController',
            scope: $scope
        })
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

angular.module('infinityCardApp', ['color.picker', 'ngDialog'])
    .controller('InfinityCardController', InfinityCardController)
    .directive('jsonText', jsonText);