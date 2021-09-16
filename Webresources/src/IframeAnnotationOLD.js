require('./Style.css')
function GetAnnotations() {
    try {
        var parent = window.parent;
        var table = document.getElementById("myTable");
        var rowCount = table.rows.length;
        var contId = parent.Xrm.Page.data.entity.getId()
        var Entity = "annotation";
        var Select = "?$select=_objectid_value, notetext, subject, annotationid";
        var Filter = "&$filter=_objectid_value eq '" + contId + "'";
        parent.Xrm.WebApi.retrieveMultipleRecords(Entity, Select + Filter).then(
            function success(result) {
                if (result != null && table.rows.length != result.entities.length) {
                    //for (var i = 0; i < rowCount; i++) {
                    //    table.deleteRow(i);
                    //}
                    if (table.rows.length>0) {
                        while (table.hasChildNodes()) {
                            table.removeChild(table.childNodes[0]);
                        }                    
                    }
                    var promise = new Promise(function (resolve) {
                        WriteAnnotation(result.entities);
                        resolve();
                    });
                    promise.then(() => {setTimeout(GetAnnotations(), 2000) });
                }
                else setTimeout(GetAnnotations(), 2000);
                
            }
        );        
    } catch (e) {
        throw new Error(e.Message);
    }
}
function WriteAnnotation(result) {
    let table = document.getElementById("myTable");

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
        button.setAttribute("onclick", "WebResources.iframe.Delete(this.value)");

        td3.appendChild(button);
        table.appendChild(tr);
        table.appendChild(td);
        table.appendChild(td2);
        table.appendChild(td3);
    });
}
function DeleteAnno(recordId) {
    var parent = window.parent;
    parent.Xrm.WebApi.deleteRecord("annotation", recordId).then(function successCallback() { location.reload(true) });
}

module.exports = {
    Anno: function () {
        GetAnnotations();        
    },
    Delete: function (recordId) {
        DeleteAnno(recordId);
    },   
};

