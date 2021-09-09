function GetAnnotations() {
    try {
        var parent = window.parent;
        var contId = parent.Xrm.Page.data.entity.getId()
        var Entity = "annotation";
        var Select = "?$select=_objectid_value, notetext";
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
        let li = document.createElement("li");
        li.innerHTML = item.notetext;
        list.appendChild(li);
    });
}
module.exports = {
    Anno: function () {
        GetAnnotations();
    }
};

