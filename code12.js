gdjs.RulesCode = {};
gdjs.RulesCode.GDMatchStickObjects1= [];
gdjs.RulesCode.GDMatchStickObjects2= [];
gdjs.RulesCode.GDParkingObjects1= [];
gdjs.RulesCode.GDParkingObjects2= [];
gdjs.RulesCode.GDNewTextObjects1= [];
gdjs.RulesCode.GDNewTextObjects2= [];
gdjs.RulesCode.GDMOVObjects1= [];
gdjs.RulesCode.GDMOVObjects2= [];
gdjs.RulesCode.GDLVL1Objects1= [];
gdjs.RulesCode.GDLVL1Objects2= [];
gdjs.RulesCode.GDLVL2Objects1= [];
gdjs.RulesCode.GDLVL2Objects2= [];
gdjs.RulesCode.GDlvl1Objects1= [];
gdjs.RulesCode.GDlvl1Objects2= [];
gdjs.RulesCode.GDlvl2Objects1= [];
gdjs.RulesCode.GDlvl2Objects2= [];
gdjs.RulesCode.GDTimerObjects1= [];
gdjs.RulesCode.GDTimerObjects2= [];
gdjs.RulesCode.GDLevelCompletetionObjects1= [];
gdjs.RulesCode.GDLevelCompletetionObjects2= [];
gdjs.RulesCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.RulesCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.RulesCode.GDYellowButtonObjects1= [];
gdjs.RulesCode.GDYellowButtonObjects2= [];
gdjs.RulesCode.GDRulesObjects1= [];
gdjs.RulesCode.GDRulesObjects2= [];
gdjs.RulesCode.GDOnScreenControlsButtonObjects1= [];
gdjs.RulesCode.GDOnScreenControlsButtonObjects2= [];


gdjs.RulesCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.RulesCode.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RulesCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.RulesCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RulesCode.GDOnScreenControlsButtonObjects1[k] = gdjs.RulesCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.RulesCode.GDOnScreenControlsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.RulesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RulesCode.GDMatchStickObjects1.length = 0;
gdjs.RulesCode.GDMatchStickObjects2.length = 0;
gdjs.RulesCode.GDParkingObjects1.length = 0;
gdjs.RulesCode.GDParkingObjects2.length = 0;
gdjs.RulesCode.GDNewTextObjects1.length = 0;
gdjs.RulesCode.GDNewTextObjects2.length = 0;
gdjs.RulesCode.GDMOVObjects1.length = 0;
gdjs.RulesCode.GDMOVObjects2.length = 0;
gdjs.RulesCode.GDLVL1Objects1.length = 0;
gdjs.RulesCode.GDLVL1Objects2.length = 0;
gdjs.RulesCode.GDLVL2Objects1.length = 0;
gdjs.RulesCode.GDLVL2Objects2.length = 0;
gdjs.RulesCode.GDlvl1Objects1.length = 0;
gdjs.RulesCode.GDlvl1Objects2.length = 0;
gdjs.RulesCode.GDlvl2Objects1.length = 0;
gdjs.RulesCode.GDlvl2Objects2.length = 0;
gdjs.RulesCode.GDTimerObjects1.length = 0;
gdjs.RulesCode.GDTimerObjects2.length = 0;
gdjs.RulesCode.GDLevelCompletetionObjects1.length = 0;
gdjs.RulesCode.GDLevelCompletetionObjects2.length = 0;
gdjs.RulesCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.RulesCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.RulesCode.GDYellowButtonObjects1.length = 0;
gdjs.RulesCode.GDYellowButtonObjects2.length = 0;
gdjs.RulesCode.GDRulesObjects1.length = 0;
gdjs.RulesCode.GDRulesObjects2.length = 0;
gdjs.RulesCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.RulesCode.GDOnScreenControlsButtonObjects2.length = 0;

gdjs.RulesCode.eventsList0(runtimeScene);

return;

}

gdjs['RulesCode'] = gdjs.RulesCode;
