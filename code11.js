gdjs.TimeExcededLVL3Code = {};
gdjs.TimeExcededLVL3Code.GDMatchStickObjects1= [];
gdjs.TimeExcededLVL3Code.GDMatchStickObjects2= [];
gdjs.TimeExcededLVL3Code.GDParkingObjects1= [];
gdjs.TimeExcededLVL3Code.GDParkingObjects2= [];
gdjs.TimeExcededLVL3Code.GDNewTextObjects1= [];
gdjs.TimeExcededLVL3Code.GDNewTextObjects2= [];
gdjs.TimeExcededLVL3Code.GDMOVObjects1= [];
gdjs.TimeExcededLVL3Code.GDMOVObjects2= [];
gdjs.TimeExcededLVL3Code.GDLVL1Objects1= [];
gdjs.TimeExcededLVL3Code.GDLVL1Objects2= [];
gdjs.TimeExcededLVL3Code.GDLVL2Objects1= [];
gdjs.TimeExcededLVL3Code.GDLVL2Objects2= [];
gdjs.TimeExcededLVL3Code.GDlvl1Objects1= [];
gdjs.TimeExcededLVL3Code.GDlvl1Objects2= [];
gdjs.TimeExcededLVL3Code.GDlvl2Objects1= [];
gdjs.TimeExcededLVL3Code.GDlvl2Objects2= [];
gdjs.TimeExcededLVL3Code.GDTimerObjects1= [];
gdjs.TimeExcededLVL3Code.GDTimerObjects2= [];
gdjs.TimeExcededLVL3Code.GDLevelCompletetionObjects1= [];
gdjs.TimeExcededLVL3Code.GDLevelCompletetionObjects2= [];
gdjs.TimeExcededLVL3Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.TimeExcededLVL3Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.TimeExcededLVL3Code.GDYellowButtonObjects1= [];
gdjs.TimeExcededLVL3Code.GDYellowButtonObjects2= [];


gdjs.TimeExcededLVL3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.TimeExcededLVL3Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.TimeExcededLVL3Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.TimeExcededLVL3Code.GDNewTextObjects1[i].setString("Time Exceded");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.TimeExcededLVL3Code.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TimeExcededLVL3Code.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.TimeExcededLVL3Code.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TimeExcededLVL3Code.GDYellowButtonObjects1[k] = gdjs.TimeExcededLVL3Code.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.TimeExcededLVL3Code.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


};

gdjs.TimeExcededLVL3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TimeExcededLVL3Code.GDMatchStickObjects1.length = 0;
gdjs.TimeExcededLVL3Code.GDMatchStickObjects2.length = 0;
gdjs.TimeExcededLVL3Code.GDParkingObjects1.length = 0;
gdjs.TimeExcededLVL3Code.GDParkingObjects2.length = 0;
gdjs.TimeExcededLVL3Code.GDNewTextObjects1.length = 0;
gdjs.TimeExcededLVL3Code.GDNewTextObjects2.length = 0;
gdjs.TimeExcededLVL3Code.GDMOVObjects1.length = 0;
gdjs.TimeExcededLVL3Code.GDMOVObjects2.length = 0;
gdjs.TimeExcededLVL3Code.GDLVL1Objects1.length = 0;
gdjs.TimeExcededLVL3Code.GDLVL1Objects2.length = 0;
gdjs.TimeExcededLVL3Code.GDLVL2Objects1.length = 0;
gdjs.TimeExcededLVL3Code.GDLVL2Objects2.length = 0;
gdjs.TimeExcededLVL3Code.GDlvl1Objects1.length = 0;
gdjs.TimeExcededLVL3Code.GDlvl1Objects2.length = 0;
gdjs.TimeExcededLVL3Code.GDlvl2Objects1.length = 0;
gdjs.TimeExcededLVL3Code.GDlvl2Objects2.length = 0;
gdjs.TimeExcededLVL3Code.GDTimerObjects1.length = 0;
gdjs.TimeExcededLVL3Code.GDTimerObjects2.length = 0;
gdjs.TimeExcededLVL3Code.GDLevelCompletetionObjects1.length = 0;
gdjs.TimeExcededLVL3Code.GDLevelCompletetionObjects2.length = 0;
gdjs.TimeExcededLVL3Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.TimeExcededLVL3Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.TimeExcededLVL3Code.GDYellowButtonObjects1.length = 0;
gdjs.TimeExcededLVL3Code.GDYellowButtonObjects2.length = 0;

gdjs.TimeExcededLVL3Code.eventsList0(runtimeScene);

return;

}

gdjs['TimeExcededLVL3Code'] = gdjs.TimeExcededLVL3Code;
