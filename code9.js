gdjs.question_323_40v2_41Code = {};
gdjs.question_323_40v2_41Code.GDMatchStickObjects1= [];
gdjs.question_323_40v2_41Code.GDMatchStickObjects2= [];
gdjs.question_323_40v2_41Code.GDParkingObjects1= [];
gdjs.question_323_40v2_41Code.GDParkingObjects2= [];
gdjs.question_323_40v2_41Code.GDNewTextObjects1= [];
gdjs.question_323_40v2_41Code.GDNewTextObjects2= [];
gdjs.question_323_40v2_41Code.GDMOVObjects1= [];
gdjs.question_323_40v2_41Code.GDMOVObjects2= [];
gdjs.question_323_40v2_41Code.GDLVL1Objects1= [];
gdjs.question_323_40v2_41Code.GDLVL1Objects2= [];
gdjs.question_323_40v2_41Code.GDLVL2Objects1= [];
gdjs.question_323_40v2_41Code.GDLVL2Objects2= [];
gdjs.question_323_40v2_41Code.GDlvl1Objects1= [];
gdjs.question_323_40v2_41Code.GDlvl1Objects2= [];
gdjs.question_323_40v2_41Code.GDlvl2Objects1= [];
gdjs.question_323_40v2_41Code.GDlvl2Objects2= [];
gdjs.question_323_40v2_41Code.GDTimerObjects1= [];
gdjs.question_323_40v2_41Code.GDTimerObjects2= [];
gdjs.question_323_40v2_41Code.GDLevelCompletetionObjects1= [];
gdjs.question_323_40v2_41Code.GDLevelCompletetionObjects2= [];
gdjs.question_323_40v2_41Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.question_323_40v2_41Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.question_323_40v2_41Code.GDYellowButtonObjects1= [];
gdjs.question_323_40v2_41Code.GDYellowButtonObjects2= [];
gdjs.question_323_40v2_41Code.GDNewSpriteObjects1= [];
gdjs.question_323_40v2_41Code.GDNewSpriteObjects2= [];


gdjs.question_323_40v2_41Code.mapOfGDgdjs_46question_95323_9540v2_9541Code_46GDMatchStickObjects1Objects = Hashtable.newFrom({"MatchStick": gdjs.question_323_40v2_41Code.GDMatchStickObjects1});
gdjs.question_323_40v2_41Code.mapOfGDgdjs_46question_95323_9540v2_9541Code_46GDParkingObjects1Objects = Hashtable.newFrom({"Parking": gdjs.question_323_40v2_41Code.GDParkingObjects1});
gdjs.question_323_40v2_41Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MatchStick"), gdjs.question_323_40v2_41Code.GDMatchStickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Parking"), gdjs.question_323_40v2_41Code.GDParkingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.question_323_40v2_41Code.mapOfGDgdjs_46question_95323_9540v2_9541Code_46GDMatchStickObjects1Objects, gdjs.question_323_40v2_41Code.mapOfGDgdjs_46question_95323_9540v2_9541Code_46GDParkingObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.question_323_40v2_41Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.question_323_40v2_41Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.question_323_40v2_41Code.GDNewTextObjects1[i].setString("Collided");
}
}}

}


};

gdjs.question_323_40v2_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.question_323_40v2_41Code.GDMatchStickObjects1.length = 0;
gdjs.question_323_40v2_41Code.GDMatchStickObjects2.length = 0;
gdjs.question_323_40v2_41Code.GDParkingObjects1.length = 0;
gdjs.question_323_40v2_41Code.GDParkingObjects2.length = 0;
gdjs.question_323_40v2_41Code.GDNewTextObjects1.length = 0;
gdjs.question_323_40v2_41Code.GDNewTextObjects2.length = 0;
gdjs.question_323_40v2_41Code.GDMOVObjects1.length = 0;
gdjs.question_323_40v2_41Code.GDMOVObjects2.length = 0;
gdjs.question_323_40v2_41Code.GDLVL1Objects1.length = 0;
gdjs.question_323_40v2_41Code.GDLVL1Objects2.length = 0;
gdjs.question_323_40v2_41Code.GDLVL2Objects1.length = 0;
gdjs.question_323_40v2_41Code.GDLVL2Objects2.length = 0;
gdjs.question_323_40v2_41Code.GDlvl1Objects1.length = 0;
gdjs.question_323_40v2_41Code.GDlvl1Objects2.length = 0;
gdjs.question_323_40v2_41Code.GDlvl2Objects1.length = 0;
gdjs.question_323_40v2_41Code.GDlvl2Objects2.length = 0;
gdjs.question_323_40v2_41Code.GDTimerObjects1.length = 0;
gdjs.question_323_40v2_41Code.GDTimerObjects2.length = 0;
gdjs.question_323_40v2_41Code.GDLevelCompletetionObjects1.length = 0;
gdjs.question_323_40v2_41Code.GDLevelCompletetionObjects2.length = 0;
gdjs.question_323_40v2_41Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.question_323_40v2_41Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.question_323_40v2_41Code.GDYellowButtonObjects1.length = 0;
gdjs.question_323_40v2_41Code.GDYellowButtonObjects2.length = 0;
gdjs.question_323_40v2_41Code.GDNewSpriteObjects1.length = 0;
gdjs.question_323_40v2_41Code.GDNewSpriteObjects2.length = 0;

gdjs.question_323_40v2_41Code.eventsList0(runtimeScene);

return;

}

gdjs['question_323_40v2_41Code'] = gdjs.question_323_40v2_41Code;
