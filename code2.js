gdjs.Home_32SceneCode = {};
gdjs.Home_32SceneCode.GDMatchStickObjects1= [];
gdjs.Home_32SceneCode.GDMatchStickObjects2= [];
gdjs.Home_32SceneCode.GDParkingObjects1= [];
gdjs.Home_32SceneCode.GDParkingObjects2= [];
gdjs.Home_32SceneCode.GDNewTextObjects1= [];
gdjs.Home_32SceneCode.GDNewTextObjects2= [];
gdjs.Home_32SceneCode.GDMOVObjects1= [];
gdjs.Home_32SceneCode.GDMOVObjects2= [];
gdjs.Home_32SceneCode.GDLVL1Objects1= [];
gdjs.Home_32SceneCode.GDLVL1Objects2= [];
gdjs.Home_32SceneCode.GDLVL2Objects1= [];
gdjs.Home_32SceneCode.GDLVL2Objects2= [];
gdjs.Home_32SceneCode.GDlvl1Objects1= [];
gdjs.Home_32SceneCode.GDlvl1Objects2= [];
gdjs.Home_32SceneCode.GDlvl2Objects1= [];
gdjs.Home_32SceneCode.GDlvl2Objects2= [];
gdjs.Home_32SceneCode.GDTimerObjects1= [];
gdjs.Home_32SceneCode.GDTimerObjects2= [];
gdjs.Home_32SceneCode.GDLevelCompletetionObjects1= [];
gdjs.Home_32SceneCode.GDLevelCompletetionObjects2= [];
gdjs.Home_32SceneCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Home_32SceneCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Home_32SceneCode.GDYellowButtonObjects1= [];
gdjs.Home_32SceneCode.GDYellowButtonObjects2= [];
gdjs.Home_32SceneCode.GDTITLEObjects1= [];
gdjs.Home_32SceneCode.GDTITLEObjects2= [];
gdjs.Home_32SceneCode.GDButtonObjects1= [];
gdjs.Home_32SceneCode.GDButtonObjects2= [];


gdjs.Home_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.Home_32SceneCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Home_32SceneCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.Home_32SceneCode.GDButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Home_32SceneCode.GDButtonObjects1[k] = gdjs.Home_32SceneCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.Home_32SceneCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rules", false);
}}

}


};

gdjs.Home_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Home_32SceneCode.GDMatchStickObjects1.length = 0;
gdjs.Home_32SceneCode.GDMatchStickObjects2.length = 0;
gdjs.Home_32SceneCode.GDParkingObjects1.length = 0;
gdjs.Home_32SceneCode.GDParkingObjects2.length = 0;
gdjs.Home_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Home_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Home_32SceneCode.GDMOVObjects1.length = 0;
gdjs.Home_32SceneCode.GDMOVObjects2.length = 0;
gdjs.Home_32SceneCode.GDLVL1Objects1.length = 0;
gdjs.Home_32SceneCode.GDLVL1Objects2.length = 0;
gdjs.Home_32SceneCode.GDLVL2Objects1.length = 0;
gdjs.Home_32SceneCode.GDLVL2Objects2.length = 0;
gdjs.Home_32SceneCode.GDlvl1Objects1.length = 0;
gdjs.Home_32SceneCode.GDlvl1Objects2.length = 0;
gdjs.Home_32SceneCode.GDlvl2Objects1.length = 0;
gdjs.Home_32SceneCode.GDlvl2Objects2.length = 0;
gdjs.Home_32SceneCode.GDTimerObjects1.length = 0;
gdjs.Home_32SceneCode.GDTimerObjects2.length = 0;
gdjs.Home_32SceneCode.GDLevelCompletetionObjects1.length = 0;
gdjs.Home_32SceneCode.GDLevelCompletetionObjects2.length = 0;
gdjs.Home_32SceneCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Home_32SceneCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Home_32SceneCode.GDYellowButtonObjects1.length = 0;
gdjs.Home_32SceneCode.GDYellowButtonObjects2.length = 0;
gdjs.Home_32SceneCode.GDTITLEObjects1.length = 0;
gdjs.Home_32SceneCode.GDTITLEObjects2.length = 0;
gdjs.Home_32SceneCode.GDButtonObjects1.length = 0;
gdjs.Home_32SceneCode.GDButtonObjects2.length = 0;

gdjs.Home_32SceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Home_32SceneCode'] = gdjs.Home_32SceneCode;
