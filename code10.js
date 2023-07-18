gdjs.TimeExcededLVL1Code = {};
gdjs.TimeExcededLVL1Code.GDMatchStickObjects1= [];
gdjs.TimeExcededLVL1Code.GDMatchStickObjects2= [];
gdjs.TimeExcededLVL1Code.GDParkingObjects1= [];
gdjs.TimeExcededLVL1Code.GDParkingObjects2= [];
gdjs.TimeExcededLVL1Code.GDNewTextObjects1= [];
gdjs.TimeExcededLVL1Code.GDNewTextObjects2= [];
gdjs.TimeExcededLVL1Code.GDMOVObjects1= [];
gdjs.TimeExcededLVL1Code.GDMOVObjects2= [];
gdjs.TimeExcededLVL1Code.GDLVL1Objects1= [];
gdjs.TimeExcededLVL1Code.GDLVL1Objects2= [];
gdjs.TimeExcededLVL1Code.GDLVL2Objects1= [];
gdjs.TimeExcededLVL1Code.GDLVL2Objects2= [];
gdjs.TimeExcededLVL1Code.GDlvl1Objects1= [];
gdjs.TimeExcededLVL1Code.GDlvl1Objects2= [];
gdjs.TimeExcededLVL1Code.GDlvl2Objects1= [];
gdjs.TimeExcededLVL1Code.GDlvl2Objects2= [];
gdjs.TimeExcededLVL1Code.GDTimerObjects1= [];
gdjs.TimeExcededLVL1Code.GDTimerObjects2= [];
gdjs.TimeExcededLVL1Code.GDLevelCompletetionObjects1= [];
gdjs.TimeExcededLVL1Code.GDLevelCompletetionObjects2= [];
gdjs.TimeExcededLVL1Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.TimeExcededLVL1Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.TimeExcededLVL1Code.GDYellowButtonObjects1= [];
gdjs.TimeExcededLVL1Code.GDYellowButtonObjects2= [];


gdjs.TimeExcededLVL1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.TimeExcededLVL1Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.TimeExcededLVL1Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.TimeExcededLVL1Code.GDNewTextObjects1[i].setString("Time Exceded");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.TimeExcededLVL1Code.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TimeExcededLVL1Code.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.TimeExcededLVL1Code.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TimeExcededLVL1Code.GDYellowButtonObjects1[k] = gdjs.TimeExcededLVL1Code.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.TimeExcededLVL1Code.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.TimeExcededLVL1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TimeExcededLVL1Code.GDMatchStickObjects1.length = 0;
gdjs.TimeExcededLVL1Code.GDMatchStickObjects2.length = 0;
gdjs.TimeExcededLVL1Code.GDParkingObjects1.length = 0;
gdjs.TimeExcededLVL1Code.GDParkingObjects2.length = 0;
gdjs.TimeExcededLVL1Code.GDNewTextObjects1.length = 0;
gdjs.TimeExcededLVL1Code.GDNewTextObjects2.length = 0;
gdjs.TimeExcededLVL1Code.GDMOVObjects1.length = 0;
gdjs.TimeExcededLVL1Code.GDMOVObjects2.length = 0;
gdjs.TimeExcededLVL1Code.GDLVL1Objects1.length = 0;
gdjs.TimeExcededLVL1Code.GDLVL1Objects2.length = 0;
gdjs.TimeExcededLVL1Code.GDLVL2Objects1.length = 0;
gdjs.TimeExcededLVL1Code.GDLVL2Objects2.length = 0;
gdjs.TimeExcededLVL1Code.GDlvl1Objects1.length = 0;
gdjs.TimeExcededLVL1Code.GDlvl1Objects2.length = 0;
gdjs.TimeExcededLVL1Code.GDlvl2Objects1.length = 0;
gdjs.TimeExcededLVL1Code.GDlvl2Objects2.length = 0;
gdjs.TimeExcededLVL1Code.GDTimerObjects1.length = 0;
gdjs.TimeExcededLVL1Code.GDTimerObjects2.length = 0;
gdjs.TimeExcededLVL1Code.GDLevelCompletetionObjects1.length = 0;
gdjs.TimeExcededLVL1Code.GDLevelCompletetionObjects2.length = 0;
gdjs.TimeExcededLVL1Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.TimeExcededLVL1Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.TimeExcededLVL1Code.GDYellowButtonObjects1.length = 0;
gdjs.TimeExcededLVL1Code.GDYellowButtonObjects2.length = 0;

gdjs.TimeExcededLVL1Code.eventsList0(runtimeScene);

return;

}

gdjs['TimeExcededLVL1Code'] = gdjs.TimeExcededLVL1Code;
