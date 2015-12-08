var infinityCardApp = angular.module('infinityCardApp', []);

infinityCardApp.controller('InfinityCardCtrl', function ($scope) {
    $scope.model = {};
    $scope.skills = [{
        "name": "AD: Combat Jump",
        "type": "Entire",
        "desc": "Place a Circular Template to be the Drop Zone. The template must be clear of all obstructions. Place yourself completely inside the Drop Zone. On PH Roll, remove template. On PH Fail, you scatter 16 inches from your final location. Share Open Information."
    }, {
        "name": "Assault",
        "type": "Entire",
        "desc": "Target an enemy in your LoF at least within the sum of your MOV. Move into base to base contact and perform a CC attack at a -3 mod."
    }, {
        "name": "CH: Mimetism",
        "type": "Automatic",
        "desc": "Opponents make BS Attacks against you at a -3 MOD."
    }, {
        "name": "CH: Camo",
        "type": "Automatic",
        "desc": "During the Deployment Phase, you may deploy in the Camouflaged state. Opponents make BS attacks against you at a -3 MOD. Grants Surprise Attack, Surprise Shot L1, and Stealth."
    }, {
        "name": "CH: TO Camo",
        "type": "Automatic",
        "desc": "During deployment, you may deploy in the Hidden Deployment or TO Camo state, and may enter TO Camo state. BS attacks made against you are -6 to the opponent. Grants Surprise Attack, Surprise Shot L1, and Stealth."
    }, {
        "name": "Doctor",
        "type": "Short",
        "desc": "Target Unconscious friendly unit in base to base. On WIP Roll, heal 1 W and cancel Unconscious. If failed, targed dies. Can spend Command Token to reroll failure if target has cube."
    }, {
        "name": "Infiltration",
        "type": "Deployment",
        "desc": "You may deploy anywhere in your half, or may deploy in the opponents half excluding enemy Deployment Zone on Infiltration Roll (Normal PH-3)."
    }, {
        "name": "Kinematika L1",
        "type": "Automatic",
        "desc": "When declaring Dodge or Engage in the Reactive Turn, you may move one additional inch."
    }, {
        "name": "Kinematika L2",
        "type": "Automatic",
        "desc": "When declaring Dodge or Engage in the Reactive Turn, you may move two additional inches."
    }, {
        "name": "Martial Arts Level 1",
        "type": "Automatic",
        "desc": "Gives +1 to CC damage and -3 to Opponent CC. You also have Stealth and V: Courage."
    }, {
        "name": "Martial Arts Level 2",
        "type": "Automatic",
        "desc": "Gives +3 to CC Damage, or +1 to CC Damage and -3 to Opponent CC. You also have Stealth and V: Courage."
    }, {
        "name": "Martial Arts Level 3",
        "type": "Automatic",
        "desc": "Gives +3 to CC and -3 to Opponent CC, or +3 to CC Damage, or +1 to CC Damage and -3 to Opponent CC. You also have Stealth and V: Courage."
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
        "name": "Stealth",
        "type": "Automatic",
        "desc": "Active turn only. You may make Cautious Movements inside the ZoC of an enemy. A Short Movement Skill inside an enemy's ZoC but outside his LoF does not grant AROs."
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
        "name": "Boarding Shotgun",
        "burst": "2",
        "ammo": "N or AP",
        "traits": "N: Small Teardrop; AP: None"
    }, {
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
        "name": "E/Mitter",
        "burst": "1",
        "ammo": "E/M",
        "traits": "None"
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
        "name": "Light Grenade Launcher",
        "burst": "1",
        "ammo": "N",
        "traits": "Circular, Speculative"
    }, {
        "name": "Light Smoke GL",
        "burst": "1",
        "ammo": "Smoke",
        "traits": "Circular, Speculative, Non-Lethal, Special Dodge, Targetless"
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
        "name": "MULTI Sniper Rifle",
        "burst": "2",
        "ammo": "AP or DA",
        "traits": "Medium MULTI"
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
    }, {
        "name": "Spitfire",
        "burst": "4",
        "ammo": "N",
        "traits": "Suppressive"
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
        "name": "Assault Hacking Device",
        "type": "Equipment",
        "desc": "You may use the following Hacking Programs: CLAW Level 3. You may enlists REMs."
    }, {
        "name": "Defensive Hacking Device",
        "type": "Equipment",
        "desc": "You may use the following Hacking Programs: SHIELD Level 3, Gatget Level 1. If targeted by a Hacking Attack, you have Firewall MODs. You may enlist REMs."
    }, {
        "name": "Hacking Device",
        "type": "Equipment",
        "desc": "You may use the following Hacking Programs: CLAW Level 1, SWORD Level 1, SHIELD Level 1, and all GADGET. You may enlist REMs."
    }, {
        "name": "Hacking Device Plus",
        "type": "Equipment",
        "desc": "You may use the following Hacking Programs: CLAW Level 2, SWORD Level 1, SHIELD Level 2, all GADGET, Sucker Punch, Cyber Mask, and White Noise. You may enlist REMs."
    }, {
        "name": "MediKit",
        "type": "Short",
        "desc": "Target friendly trooper in the Unconscious state with 1+ W. If the target passes a PH-3 roll, recover 1 W and remove Unconcious state, else die."
    }, {
        "name": "Multispectral Visor L1",
        "type": "Automatic",
        "desc": "Your BS Attacks and Discover attempts are not modified by Mimetism, Camo, and Low Visibility Zone MODs. Your modifiers for TO Camo, ODD, and Poor Visibility Zones are -3 instead of -6."
    }, {
        "name": "Multispectral Visor L2",
        "type": "Automatic",
        "desc": "You are not effected by Camo, ODD, Low Visibility, and Poor Visibility. You may draw LoF through Zero Visibility Zones and ignore MODs. You ignore the Dodge effect of Smoke Special Ammunition."
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