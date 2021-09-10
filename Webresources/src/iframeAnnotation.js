
require('./Style.css')
function GetAnnotations() {
    try {
        var parent = window.parent;
        var contId = parent.Xrm.Page.data.entity.getId()
        var Entity = "annotation";
        var Select = "?$select=_objectid_value, notetext, subject, annotationid";
        var Filter = "&$filter=_objectid_value eq '" + contId + "'";
        parent.Xrm.WebApi.retrieveMultipleRecords(Entity, Select + Filter).then(
            function success(result) {
                if (result != null) {
                    WriteAnnotation(result.entities);
                }
            }
        );
    } catch (e) {
        throw new Error(e.Message);
    }
}
function WriteAnnotation(result) {
    let list = document.getElementById("myList");

    result.forEach((item) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let button = document.createElement("button");

        td.innerText = item.subject;        
        td2.innerHTML = item.notetext;
        button.innerText = "Удалить";

        tr.setAttribute("class", "cell");
        td.setAttribute("class", "cell");
        td2.setAttribute("class", "cell2");
        td3.setAttribute("class", "cell");
        td3.setAttribute("align", "center");
        button.setAttribute("value", item.annotationid);
        button.setAttribute("onclick", "WebResources.Delete(this.value)");

        td3.appendChild(button);
        list.appendChild(tr);
        list.appendChild(td);
        list.appendChild(td2);
        list.appendChild(td3);
    });
}
function DeleteAnno(recordId) {
    var parent = window.parent;
    parent.Xrm.WebApi.deleteRecord("annotation", recordId).then(function successCallback() { location.reload(true) });
}

function IframeRefresh() {
    Xrm.Page.getControl("IFRAME_annotation").getObject().contentWindow.location.reload()
}

module.exports = {
    Anno: function () {
        GetAnnotations();
    },
    Delete: function (recordId) {
        DeleteAnno(recordId);
    },
    Refresh: function () {
        IframeRefresh();
    },
};

