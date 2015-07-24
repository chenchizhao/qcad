function init(basePath) {
    var action = new RGuiAction(qsTr("&Export XML"), RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setScriptFile(basePath + "/ExXmlExport.js");
    action.setGroupSortOrder(71120);
    action.setSortOrder(200);
    action.setWidgetNames(["IOExamplesMenu"]);
}
