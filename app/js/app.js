var infinityCardApp = angular.module('infinityCardApp', []);

infinityCardApp.controller('InfinityCardCtrl', function ($scope) {
    $scope.model = {};
    $scope.skills = [{
        "name": "CH: Level 3. TO",
        "type": "Automatic",
        "desc": "During deployment, you may deploy in the Hidden Deployment or TO Camo state, and may enter TO Camo state. Any BS attacks made against you are -6 to the opponent. Grants Surprise Attack, Surprise Shot L1, and Stealth."
    }, {
        "name": "Doctor",
        "type": "Short",
        "desc": "Target Unconscious friendly unit in base to base. On WIP Roll, heal 1 W and cancel Unconscious. If failed, targed dies. Can spend Command Token to reroll failure if target has cube."
    }, {
        "name": "Infiltration",
        "type": "Deployment",
        "desc": "You may deploy anywhere in your half, or may deploy in the opponents half excluding enemy Deployment Zone on Infiltration Roll (Normal PH-3)."
    }, {
        "name": "Martial Arts Level 2",
        "type": "Automatic",
        "desc": "Gives +3 to CC Damage, or +1 to CC Damage and -3 to Opponent CC."
    }, {
        "name": "Multiterrain",
        "type": "Automatic",
        "desc": "Before deploying, choose one Type of Terrain to specialize in. You may move normally through that Type of Terrain."
    }, {
        "name": "Religious",
        "type": "Automatic",
        "desc": "Pass Guts Rolls automatically. May make a WP Roll to fail Guts Roll. Cannot Retreat."
    }, {
        "name": "Shock Immunity",
        "type": "Automatic",
        "desc": "You are immune to Shock Special Ammunition and treat it like Normal Ammunition."
    }, {
        "name": "V: Courage",
        "type": "Automatic",
        "desc": "Choose the outcome of any of this troopers Guts Rolls. Unaffected by Retreat."
    }, {
        "name": "V: Dogged",
        "type": "Automatic",
        "desc": "When you would go Unconscious, you may place a Dogged Marker instead. If you do, at the end of the turn, this unit dies. A Dogged unit may not be healed."
    }];
    $scope.weapons = [{
        "name": "Chain Rifle",
        "burst": "1",
        "ammo": "N",
        "traits": "Large Teardrop, Intuitive"
    }, {
        "name": "Combi Rifle",
        "burst": "3",
        "ammo": "N",
        "traits": "Suppressive"
    }, {
        "name": "HMG",
        "burst": "4",
        "ammo": "N",
        "traits": "Suppressive"
    }, {
        "name": "Light Flamethrower",
        "burst": "1",
        "ammo": "Fire",
        "traits": "Small Teardrop, Intuitive"
    }, {
        "name": "Light Shotgun",
        "burst": "2",
        "ammo": "N",
        "traits": "Small Teardrop"
    }, {
        "name": "2 Light Shotguns",
        "burst": "3",
        "ammo": "N",
        "traits": "Small Teardrop"
    }, {
        "name": "MULTI Rifle",
        "burst": "3 or 1",
        "ammo": "AP/Shock or DA",
        "traits": "Light MULTI, Suppressive"
    }, {
        "name": "Rifle",
        "burst": "3",
        "ammo": "N",
        "traits": "Suppressive"
    }, {
        "name": "Smoke Grenades",
        "burst": "1",
        "ammo": "Smoke",
        "traits": "Circular, Non Lethal, Special Dodge, Speculative, Targetless, Throwing Weapon"
    }];
    $scope.secondaryWeapons = [{
        "name": "AP CCW",
        "burst": "1",
        "ammo": "AP",
        "traits": "CC"
    }, {
        "name": "CCW",
        "burst": "1",
        "ammo": "N",
        "traits": "CC"
    }, {
        "name": "Knife",
        "burst": "1",
        "ammo": "Shock",
        "traits": "CC, Silent"
    }, {
        "name": "Pistol",
        "burst": "2",
        "ammo": "N",
        "traits": "CC"
    }];
    $scope.equipment = [{
        "name": "MediKit",
        "type": "Short",
        "desc": "Target friendly trooper in the Unconscious state with 1+ W. If the target passes a PH-3 roll, recover 1 W and remove Unconcious state, else die."
    }, {
        "name": "Multispectral Visor L1",
        "type": "Automatic",
        "desc": "Your BS Attacks are not modified by Mimetism, Camo, and Low Visibility Zone MODs. Your modifiers for TO Camo, ODD, and Poor Visibility Zones are -3 instead of -6."
    }];
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
    /* Begin unit properties */
    $scope.model.name = "Travis Young";
    $scope.model.faction = "Ariadna";
    $scope.model.unit = "Caledonian Volunteer";
    $scope.model.unitImage = "https://static1.squarespace.com/static/5079f36584ae362b5e77c2e9/565e0b51e4b02f39f712b791/565f28dee4b09f89c54287d0/1449076959301/Travis_Young.png";
    $scope.model.scaleHoriz = false;
    $scope.model.fury = "notImpetuous";
    $scope.model.cube = false;
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
});

/* json-text directive taken from here:
http://stackoverflow.com/questions/17893708/angularjs-textarea-bind-to-json-object-shows-object-object
*/
infinityCardApp.directive('jsonText', function () {
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
});