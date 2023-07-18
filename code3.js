gdjs.Level_321Code = {};
gdjs.Level_321Code.GDMatchStickObjects1= [];
gdjs.Level_321Code.GDMatchStickObjects2= [];
gdjs.Level_321Code.GDParkingObjects1= [];
gdjs.Level_321Code.GDParkingObjects2= [];
gdjs.Level_321Code.GDNewTextObjects1= [];
gdjs.Level_321Code.GDNewTextObjects2= [];
gdjs.Level_321Code.GDMOVObjects1= [];
gdjs.Level_321Code.GDMOVObjects2= [];
gdjs.Level_321Code.GDLVL1Objects1= [];
gdjs.Level_321Code.GDLVL1Objects2= [];
gdjs.Level_321Code.GDLVL2Objects1= [];
gdjs.Level_321Code.GDLVL2Objects2= [];
gdjs.Level_321Code.GDlvl1Objects1= [];
gdjs.Level_321Code.GDlvl1Objects2= [];
gdjs.Level_321Code.GDlvl2Objects1= [];
gdjs.Level_321Code.GDlvl2Objects2= [];
gdjs.Level_321Code.GDTimerObjects1= [];
gdjs.Level_321Code.GDTimerObjects2= [];
gdjs.Level_321Code.GDLevelCompletetionObjects1= [];
gdjs.Level_321Code.GDLevelCompletetionObjects2= [];
gdjs.Level_321Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Level_321Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Level_321Code.GDYellowButtonObjects1= [];
gdjs.Level_321Code.GDYellowButtonObjects2= [];
gdjs.Level_321Code.GDNewBBTextObjects1= [];
gdjs.Level_321Code.GDNewBBTextObjects2= [];
gdjs.Level_321Code.GDAttemptsObjects1= [];
gdjs.Level_321Code.GDAttemptsObjects2= [];


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Attempts"), gdjs.Level_321Code.GDAttemptsObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDAttemptsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAttemptsObjects1[i].setString("Attempts : " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("attempt"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LVL1"), gdjs.Level_321Code.GDLVL1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDLVL1Objects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDLVL1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDLVL1Objects1[k] = gdjs.Level_321Code.GDLVL1Objects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDLVL1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Question 1", false);
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDMatchStickObjects1.length = 0;
gdjs.Level_321Code.GDMatchStickObjects2.length = 0;
gdjs.Level_321Code.GDParkingObjects1.length = 0;
gdjs.Level_321Code.GDParkingObjects2.length = 0;
gdjs.Level_321Code.GDNewTextObjects1.length = 0;
gdjs.Level_321Code.GDNewTextObjects2.length = 0;
gdjs.Level_321Code.GDMOVObjects1.length = 0;
gdjs.Level_321Code.GDMOVObjects2.length = 0;
gdjs.Level_321Code.GDLVL1Objects1.length = 0;
gdjs.Level_321Code.GDLVL1Objects2.length = 0;
gdjs.Level_321Code.GDLVL2Objects1.length = 0;
gdjs.Level_321Code.GDLVL2Objects2.length = 0;
gdjs.Level_321Code.GDlvl1Objects1.length = 0;
gdjs.Level_321Code.GDlvl1Objects2.length = 0;
gdjs.Level_321Code.GDlvl2Objects1.length = 0;
gdjs.Level_321Code.GDlvl2Objects2.length = 0;
gdjs.Level_321Code.GDTimerObjects1.length = 0;
gdjs.Level_321Code.GDTimerObjects2.length = 0;
gdjs.Level_321Code.GDLevelCompletetionObjects1.length = 0;
gdjs.Level_321Code.GDLevelCompletetionObjects2.length = 0;
gdjs.Level_321Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Level_321Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Level_321Code.GDYellowButtonObjects1.length = 0;
gdjs.Level_321Code.GDYellowButtonObjects2.length = 0;
gdjs.Level_321Code.GDNewBBTextObjects1.length = 0;
gdjs.Level_321Code.GDNewBBTextObjects2.length = 0;
gdjs.Level_321Code.GDAttemptsObjects1.length = 0;
gdjs.Level_321Code.GDAttemptsObjects2.length = 0;

gdjs.Level_321Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
