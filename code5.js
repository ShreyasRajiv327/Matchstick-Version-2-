gdjs.Question_323Code = {};
gdjs.Question_323Code.GDMatchStickObjects1= [];
gdjs.Question_323Code.GDMatchStickObjects2= [];
gdjs.Question_323Code.GDParkingObjects1= [];
gdjs.Question_323Code.GDParkingObjects2= [];
gdjs.Question_323Code.GDNewTextObjects1= [];
gdjs.Question_323Code.GDNewTextObjects2= [];
gdjs.Question_323Code.GDMOVObjects1= [];
gdjs.Question_323Code.GDMOVObjects2= [];
gdjs.Question_323Code.GDLVL1Objects1= [];
gdjs.Question_323Code.GDLVL1Objects2= [];
gdjs.Question_323Code.GDLVL2Objects1= [];
gdjs.Question_323Code.GDLVL2Objects2= [];
gdjs.Question_323Code.GDlvl1Objects1= [];
gdjs.Question_323Code.GDlvl1Objects2= [];
gdjs.Question_323Code.GDlvl2Objects1= [];
gdjs.Question_323Code.GDlvl2Objects2= [];
gdjs.Question_323Code.GDTimerObjects1= [];
gdjs.Question_323Code.GDTimerObjects2= [];
gdjs.Question_323Code.GDLevelCompletetionObjects1= [];
gdjs.Question_323Code.GDLevelCompletetionObjects2= [];
gdjs.Question_323Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Question_323Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Question_323Code.GDYellowButtonObjects1= [];
gdjs.Question_323Code.GDYellowButtonObjects2= [];
gdjs.Question_323Code.GDFinalObjects1= [];
gdjs.Question_323Code.GDFinalObjects2= [];


gdjs.Question_323Code.mapOfGDgdjs_46Question_95323Code_46GDMOVObjects1Objects = Hashtable.newFrom({"MOV": gdjs.Question_323Code.GDMOVObjects1});
gdjs.Question_323Code.mapOfGDgdjs_46Question_95323Code_46GDFinalObjects1Objects = Hashtable.newFrom({"Final": gdjs.Question_323Code.GDFinalObjects1});
gdjs.Question_323Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Question_323Code.GDFloatingOutButtonDarkBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelCompletetion"), gdjs.Question_323Code.GDLevelCompletetionObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Question_323Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Question_323Code.GDTimerObjects1);
{for(var i = 0, len = gdjs.Question_323Code.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs.Question_323Code.GDFloatingOutButtonDarkBlueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Question_323Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Question_323Code.GDNewTextObjects1[i].setString("Solve the Equation");
}
}{for(var i = 0, len = gdjs.Question_323Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Question_323Code.GDTimerObjects1[i].setString("Time Taken :" + gdjs.evtTools.common.toString(Math.floor((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Time")) / 60))));
}
}{for(var i = 0, len = gdjs.Question_323Code.GDLevelCompletetionObjects1.length ;i < len;++i) {
    gdjs.Question_323Code.GDLevelCompletetionObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Question_323Code.GDTimerObjects1);
{runtimeScene.getScene().getVariables().get("Time").add(1);
}{for(var i = 0, len = gdjs.Question_323Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Question_323Code.GDTimerObjects1[i].setString("Time Taken :" + gdjs.evtTools.common.toString(Math.floor((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Time")) / 60))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Final"), gdjs.Question_323Code.GDFinalObjects1);
gdjs.copyArray(runtimeScene.getObjects("MOV"), gdjs.Question_323Code.GDMOVObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Question_323Code.mapOfGDgdjs_46Question_95323Code_46GDMOVObjects1Objects, gdjs.Question_323Code.mapOfGDgdjs_46Question_95323Code_46GDFinalObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Question_323Code.GDFloatingOutButtonDarkBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelCompletetion"), gdjs.Question_323Code.GDLevelCompletetionObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Question_323Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Question_323Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Question_323Code.GDNewTextObjects1[i].setString("Completed the level in " + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Time")) / 60)) + " Seconds");
}
}{for(var i = 0, len = gdjs.Question_323Code.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs.Question_323Code.GDFloatingOutButtonDarkBlueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Question_323Code.GDLevelCompletetionObjects1.length ;i < len;++i) {
    gdjs.Question_323Code.GDLevelCompletetionObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Time")) / 60) < 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelCompletetion"), gdjs.Question_323Code.GDLevelCompletetionObjects1);
{runtimeScene.getScene().getVariables().get("Final").setNumber(30);
}{for(var i = 0, len = gdjs.Question_323Code.GDLevelCompletetionObjects1.length ;i < len;++i) {
    gdjs.Question_323Code.GDLevelCompletetionObjects1[i].setString("30 Points");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Time")) / 60) > 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Time")) / 60) <= 20);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelCompletetion"), gdjs.Question_323Code.GDLevelCompletetionObjects1);
{runtimeScene.getScene().getVariables().get("Final").setNumber(20);
}{for(var i = 0, len = gdjs.Question_323Code.GDLevelCompletetionObjects1.length ;i < len;++i) {
    gdjs.Question_323Code.GDLevelCompletetionObjects1[i].setString("20 Points");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Time")) / 60) > 20);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Time")) / 60) <= 30);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelCompletetion"), gdjs.Question_323Code.GDLevelCompletetionObjects1);
{runtimeScene.getScene().getVariables().get("Final").setNumber(10);
}{for(var i = 0, len = gdjs.Question_323Code.GDLevelCompletetionObjects1.length ;i < len;++i) {
    gdjs.Question_323Code.GDLevelCompletetionObjects1[i].setString("10 Points");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Time")) / 60) > 30);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


};

gdjs.Question_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Question_323Code.GDMatchStickObjects1.length = 0;
gdjs.Question_323Code.GDMatchStickObjects2.length = 0;
gdjs.Question_323Code.GDParkingObjects1.length = 0;
gdjs.Question_323Code.GDParkingObjects2.length = 0;
gdjs.Question_323Code.GDNewTextObjects1.length = 0;
gdjs.Question_323Code.GDNewTextObjects2.length = 0;
gdjs.Question_323Code.GDMOVObjects1.length = 0;
gdjs.Question_323Code.GDMOVObjects2.length = 0;
gdjs.Question_323Code.GDLVL1Objects1.length = 0;
gdjs.Question_323Code.GDLVL1Objects2.length = 0;
gdjs.Question_323Code.GDLVL2Objects1.length = 0;
gdjs.Question_323Code.GDLVL2Objects2.length = 0;
gdjs.Question_323Code.GDlvl1Objects1.length = 0;
gdjs.Question_323Code.GDlvl1Objects2.length = 0;
gdjs.Question_323Code.GDlvl2Objects1.length = 0;
gdjs.Question_323Code.GDlvl2Objects2.length = 0;
gdjs.Question_323Code.GDTimerObjects1.length = 0;
gdjs.Question_323Code.GDTimerObjects2.length = 0;
gdjs.Question_323Code.GDLevelCompletetionObjects1.length = 0;
gdjs.Question_323Code.GDLevelCompletetionObjects2.length = 0;
gdjs.Question_323Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Question_323Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Question_323Code.GDYellowButtonObjects1.length = 0;
gdjs.Question_323Code.GDYellowButtonObjects2.length = 0;
gdjs.Question_323Code.GDFinalObjects1.length = 0;
gdjs.Question_323Code.GDFinalObjects2.length = 0;

gdjs.Question_323Code.eventsList0(runtimeScene);

return;

}

gdjs['Question_323Code'] = gdjs.Question_323Code;
