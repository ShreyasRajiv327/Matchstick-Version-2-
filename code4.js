gdjs.Level_322Code = {};
gdjs.Level_322Code.GDMatchStickObjects1= [];
gdjs.Level_322Code.GDMatchStickObjects2= [];
gdjs.Level_322Code.GDParkingObjects1= [];
gdjs.Level_322Code.GDParkingObjects2= [];
gdjs.Level_322Code.GDNewTextObjects1= [];
gdjs.Level_322Code.GDNewTextObjects2= [];
gdjs.Level_322Code.GDMOVObjects1= [];
gdjs.Level_322Code.GDMOVObjects2= [];
gdjs.Level_322Code.GDLVL1Objects1= [];
gdjs.Level_322Code.GDLVL1Objects2= [];
gdjs.Level_322Code.GDLVL2Objects1= [];
gdjs.Level_322Code.GDLVL2Objects2= [];
gdjs.Level_322Code.GDlvl1Objects1= [];
gdjs.Level_322Code.GDlvl1Objects2= [];
gdjs.Level_322Code.GDlvl2Objects1= [];
gdjs.Level_322Code.GDlvl2Objects2= [];
gdjs.Level_322Code.GDTimerObjects1= [];
gdjs.Level_322Code.GDTimerObjects2= [];
gdjs.Level_322Code.GDLevelCompletetionObjects1= [];
gdjs.Level_322Code.GDLevelCompletetionObjects2= [];
gdjs.Level_322Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Level_322Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Level_322Code.GDYellowButtonObjects1= [];
gdjs.Level_322Code.GDYellowButtonObjects2= [];
gdjs.Level_322Code.GDFinishedLVL1Objects1= [];
gdjs.Level_322Code.GDFinishedLVL1Objects2= [];


gdjs.Level_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LVL2"), gdjs.Level_322Code.GDLVL2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDLVL2Objects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDLVL2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDLVL2Objects1[k] = gdjs.Level_322Code.GDLVL2Objects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDLVL2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Question 2", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_322Code.GDMatchStickObjects1.length = 0;
gdjs.Level_322Code.GDMatchStickObjects2.length = 0;
gdjs.Level_322Code.GDParkingObjects1.length = 0;
gdjs.Level_322Code.GDParkingObjects2.length = 0;
gdjs.Level_322Code.GDNewTextObjects1.length = 0;
gdjs.Level_322Code.GDNewTextObjects2.length = 0;
gdjs.Level_322Code.GDMOVObjects1.length = 0;
gdjs.Level_322Code.GDMOVObjects2.length = 0;
gdjs.Level_322Code.GDLVL1Objects1.length = 0;
gdjs.Level_322Code.GDLVL1Objects2.length = 0;
gdjs.Level_322Code.GDLVL2Objects1.length = 0;
gdjs.Level_322Code.GDLVL2Objects2.length = 0;
gdjs.Level_322Code.GDlvl1Objects1.length = 0;
gdjs.Level_322Code.GDlvl1Objects2.length = 0;
gdjs.Level_322Code.GDlvl2Objects1.length = 0;
gdjs.Level_322Code.GDlvl2Objects2.length = 0;
gdjs.Level_322Code.GDTimerObjects1.length = 0;
gdjs.Level_322Code.GDTimerObjects2.length = 0;
gdjs.Level_322Code.GDLevelCompletetionObjects1.length = 0;
gdjs.Level_322Code.GDLevelCompletetionObjects2.length = 0;
gdjs.Level_322Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Level_322Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Level_322Code.GDYellowButtonObjects1.length = 0;
gdjs.Level_322Code.GDYellowButtonObjects2.length = 0;
gdjs.Level_322Code.GDFinishedLVL1Objects1.length = 0;
gdjs.Level_322Code.GDFinishedLVL1Objects2.length = 0;

gdjs.Level_322Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_322Code'] = gdjs.Level_322Code;
