gdjs.Question_322Code = {};
gdjs.Question_322Code.GDMatchStickObjects1= [];
gdjs.Question_322Code.GDMatchStickObjects2= [];
gdjs.Question_322Code.GDParkingObjects1= [];
gdjs.Question_322Code.GDParkingObjects2= [];
gdjs.Question_322Code.GDNewTextObjects1= [];
gdjs.Question_322Code.GDNewTextObjects2= [];
gdjs.Question_322Code.GDMOVObjects1= [];
gdjs.Question_322Code.GDMOVObjects2= [];
gdjs.Question_322Code.GDLVL1Objects1= [];
gdjs.Question_322Code.GDLVL1Objects2= [];
gdjs.Question_322Code.GDLVL2Objects1= [];
gdjs.Question_322Code.GDLVL2Objects2= [];
gdjs.Question_322Code.GDlvl1Objects1= [];
gdjs.Question_322Code.GDlvl1Objects2= [];
gdjs.Question_322Code.GDlvl2Objects1= [];
gdjs.Question_322Code.GDlvl2Objects2= [];
gdjs.Question_322Code.GDTimerObjects1= [];
gdjs.Question_322Code.GDTimerObjects2= [];
gdjs.Question_322Code.GDLevelCompletetionObjects1= [];
gdjs.Question_322Code.GDLevelCompletetionObjects2= [];
gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Question_322Code.GDYellowButtonObjects1= [];
gdjs.Question_322Code.GDYellowButtonObjects2= [];
gdjs.Question_322Code.GDTrophy1Objects1= [];
gdjs.Question_322Code.GDTrophy1Objects2= [];
gdjs.Question_322Code.GDTrophy2Objects1= [];
gdjs.Question_322Code.GDTrophy2Objects2= [];
gdjs.Question_322Code.GDTrophy3Objects1= [];
gdjs.Question_322Code.GDTrophy3Objects2= [];


gdjs.Question_322Code.mapOfGDgdjs_46Question_95322Code_46GDMOVObjects1Objects = Hashtable.newFrom({"MOV": gdjs.Question_322Code.GDMOVObjects1});
gdjs.Question_322Code.mapOfGDgdjs_46Question_95322Code_46GDParkingObjects1Objects = Hashtable.newFrom({"Parking": gdjs.Question_322Code.GDParkingObjects1});
gdjs.Question_322Code.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelCompletetion"), gdjs.Question_322Code.GDLevelCompletetionObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Question_322Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Question_322Code.GDTimerObjects1);
{for(var i = 0, len = gdjs.Question_322Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDNewTextObjects1[i].setString("Solve The Equation");
}
}{for(var i = 0, len = gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Question_322Code.GDLevelCompletetionObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDLevelCompletetionObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Question_322Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDTimerObjects1[i].setString("Time Taken :" + gdjs.evtTools.common.toString(Math.floor((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 60))));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Question_322Code.GDTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Question_322Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDTimerObjects1[i].setString("Time Taken :" + gdjs.evtTools.common.toString(Math.floor((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 60))));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 60) > 30);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Question_322Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Question_322Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDNewTextObjects1[i].setString("EXCEDED TIME LIMIT");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TimeExcededLVL2", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MOV"), gdjs.Question_322Code.GDMOVObjects1);
gdjs.copyArray(runtimeScene.getObjects("Parking"), gdjs.Question_322Code.GDParkingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Question_322Code.mapOfGDgdjs_46Question_95322Code_46GDMOVObjects1Objects, gdjs.Question_322Code.mapOfGDgdjs_46Question_95322Code_46GDParkingObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelCompletetion"), gdjs.Question_322Code.GDLevelCompletetionObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Question_322Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Question_322Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDNewTextObjects1[i].setString("Completed the level in " + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 60)) + " Seconds");
}
}{for(var i = 0, len = gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_322Code.GDLevelCompletetionObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDLevelCompletetionObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 60) < 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelCompletetion"), gdjs.Question_322Code.GDLevelCompletetionObjects1);
{for(var i = 0, len = gdjs.Question_322Code.GDLevelCompletetionObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDLevelCompletetionObjects1[i].setString("30 Points");
}
}{runtimeScene.getScene().getVariables().get("Final").setNumber(30);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 60) > 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 60) <= 20);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelCompletetion"), gdjs.Question_322Code.GDLevelCompletetionObjects1);
{for(var i = 0, len = gdjs.Question_322Code.GDLevelCompletetionObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDLevelCompletetionObjects1[i].setString("20 Points");
}
}{runtimeScene.getScene().getVariables().get("Final").setNumber(20);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 60) > 20);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 60) <= 30);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelCompletetion"), gdjs.Question_322Code.GDLevelCompletetionObjects1);
{for(var i = 0, len = gdjs.Question_322Code.GDLevelCompletetionObjects1.length ;i < len;++i) {
    gdjs.Question_322Code.GDLevelCompletetionObjects1[i].setString("10 Points");
}
}{runtimeScene.getScene().getVariables().get("Final").setNumber(10);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


};

gdjs.Question_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Question_322Code.GDMatchStickObjects1.length = 0;
gdjs.Question_322Code.GDMatchStickObjects2.length = 0;
gdjs.Question_322Code.GDParkingObjects1.length = 0;
gdjs.Question_322Code.GDParkingObjects2.length = 0;
gdjs.Question_322Code.GDNewTextObjects1.length = 0;
gdjs.Question_322Code.GDNewTextObjects2.length = 0;
gdjs.Question_322Code.GDMOVObjects1.length = 0;
gdjs.Question_322Code.GDMOVObjects2.length = 0;
gdjs.Question_322Code.GDLVL1Objects1.length = 0;
gdjs.Question_322Code.GDLVL1Objects2.length = 0;
gdjs.Question_322Code.GDLVL2Objects1.length = 0;
gdjs.Question_322Code.GDLVL2Objects2.length = 0;
gdjs.Question_322Code.GDlvl1Objects1.length = 0;
gdjs.Question_322Code.GDlvl1Objects2.length = 0;
gdjs.Question_322Code.GDlvl2Objects1.length = 0;
gdjs.Question_322Code.GDlvl2Objects2.length = 0;
gdjs.Question_322Code.GDTimerObjects1.length = 0;
gdjs.Question_322Code.GDTimerObjects2.length = 0;
gdjs.Question_322Code.GDLevelCompletetionObjects1.length = 0;
gdjs.Question_322Code.GDLevelCompletetionObjects2.length = 0;
gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Question_322Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Question_322Code.GDYellowButtonObjects1.length = 0;
gdjs.Question_322Code.GDYellowButtonObjects2.length = 0;
gdjs.Question_322Code.GDTrophy1Objects1.length = 0;
gdjs.Question_322Code.GDTrophy1Objects2.length = 0;
gdjs.Question_322Code.GDTrophy2Objects1.length = 0;
gdjs.Question_322Code.GDTrophy2Objects2.length = 0;
gdjs.Question_322Code.GDTrophy3Objects1.length = 0;
gdjs.Question_322Code.GDTrophy3Objects2.length = 0;

gdjs.Question_322Code.eventsList0(runtimeScene);

return;

}

gdjs['Question_322Code'] = gdjs.Question_322Code;
