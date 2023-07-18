gdjs.Level_323Code = {};
gdjs.Level_323Code.GDMatchStickObjects1= [];
gdjs.Level_323Code.GDMatchStickObjects2= [];
gdjs.Level_323Code.GDParkingObjects1= [];
gdjs.Level_323Code.GDParkingObjects2= [];
gdjs.Level_323Code.GDNewTextObjects1= [];
gdjs.Level_323Code.GDNewTextObjects2= [];
gdjs.Level_323Code.GDMOVObjects1= [];
gdjs.Level_323Code.GDMOVObjects2= [];
gdjs.Level_323Code.GDLVL1Objects1= [];
gdjs.Level_323Code.GDLVL1Objects2= [];
gdjs.Level_323Code.GDLVL2Objects1= [];
gdjs.Level_323Code.GDLVL2Objects2= [];
gdjs.Level_323Code.GDlvl1Objects1= [];
gdjs.Level_323Code.GDlvl1Objects2= [];
gdjs.Level_323Code.GDlvl2Objects1= [];
gdjs.Level_323Code.GDlvl2Objects2= [];
gdjs.Level_323Code.GDTimerObjects1= [];
gdjs.Level_323Code.GDTimerObjects2= [];
gdjs.Level_323Code.GDLevelCompletetionObjects1= [];
gdjs.Level_323Code.GDLevelCompletetionObjects2= [];
gdjs.Level_323Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Level_323Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Level_323Code.GDYellowButtonObjects1= [];
gdjs.Level_323Code.GDYellowButtonObjects2= [];
gdjs.Level_323Code.GDLVL3Objects1= [];
gdjs.Level_323Code.GDLVL3Objects2= [];
gdjs.Level_323Code.GDlvl3Objects1= [];
gdjs.Level_323Code.GDlvl3Objects2= [];


gdjs.Level_323Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LVL3"), gdjs.Level_323Code.GDLVL3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDLVL3Objects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDLVL3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDLVL3Objects1[k] = gdjs.Level_323Code.GDLVL3Objects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDLVL3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Question 3", false);
}}

}


};

gdjs.Level_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_323Code.GDMatchStickObjects1.length = 0;
gdjs.Level_323Code.GDMatchStickObjects2.length = 0;
gdjs.Level_323Code.GDParkingObjects1.length = 0;
gdjs.Level_323Code.GDParkingObjects2.length = 0;
gdjs.Level_323Code.GDNewTextObjects1.length = 0;
gdjs.Level_323Code.GDNewTextObjects2.length = 0;
gdjs.Level_323Code.GDMOVObjects1.length = 0;
gdjs.Level_323Code.GDMOVObjects2.length = 0;
gdjs.Level_323Code.GDLVL1Objects1.length = 0;
gdjs.Level_323Code.GDLVL1Objects2.length = 0;
gdjs.Level_323Code.GDLVL2Objects1.length = 0;
gdjs.Level_323Code.GDLVL2Objects2.length = 0;
gdjs.Level_323Code.GDlvl1Objects1.length = 0;
gdjs.Level_323Code.GDlvl1Objects2.length = 0;
gdjs.Level_323Code.GDlvl2Objects1.length = 0;
gdjs.Level_323Code.GDlvl2Objects2.length = 0;
gdjs.Level_323Code.GDTimerObjects1.length = 0;
gdjs.Level_323Code.GDTimerObjects2.length = 0;
gdjs.Level_323Code.GDLevelCompletetionObjects1.length = 0;
gdjs.Level_323Code.GDLevelCompletetionObjects2.length = 0;
gdjs.Level_323Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Level_323Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Level_323Code.GDYellowButtonObjects1.length = 0;
gdjs.Level_323Code.GDYellowButtonObjects2.length = 0;
gdjs.Level_323Code.GDLVL3Objects1.length = 0;
gdjs.Level_323Code.GDLVL3Objects2.length = 0;
gdjs.Level_323Code.GDlvl3Objects1.length = 0;
gdjs.Level_323Code.GDlvl3Objects2.length = 0;

gdjs.Level_323Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_323Code'] = gdjs.Level_323Code;
