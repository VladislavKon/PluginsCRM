function filterLookup() {
    try {
        if (Xrm.Page.getControl("new_region") != null && Xrm.Page.getControl("new_region") != undefined) {
            Xrm.Page.getControl("new_city").addPreSearch(function () {
                addCustomeLookupFilter();
            });
        } 
    } catch (e) {
        throw new Error(e.Message);
    }
}
function addCustomeLookupFilter() {    
    try {
        var RecordId = Xrm.Page.data.entity.getId();
        var Region = Xrm.Page.getAttribute("new_region").getValue();
        if (Region != null && Region != undefined) {
            fetchXml = "<filter type='and'><condition attribute='new_region' operator='like' value='%" + Region[0].name + "%' /></filter>";
            Xrm.Page.getControl("new_city").addCustomFilter(fetchXml);
        }
    } catch (e) {
            throw new Error(e.Message);
        }
    }
