function GetAnnotations(executeContext) {
    try {
        var contId = executeContext.data.entity.getId()
        var Entity = "annotation";
        var Select = "?$select=objectid, notetext";
        var Filter = "&$filter=objectid eq '" + contId + "'";
        Xrm.WebApi.retrieveMultipleRecords(Entity, Select + Filter).then(
            function success(result) {
                if (result != null) {
                    var res = result;
                }
            }
        );
    } catch (e) {
        throw new Error(e.Message);
    }
}
module.exports = {
    Anno: function () {
        GetAnnotations();
    }
};

