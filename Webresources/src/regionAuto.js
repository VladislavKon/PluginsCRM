function regionAuto() {
    try {        
        if (Xrm.Page.getAttribute("new_city").getValue() != null && Xrm.Page.getAttribute("new_city").getValue() != undefined) {
            var City = Xrm.Page.getAttribute("new_city").getValue();
            var EntityCity = "new_mycity";
            var SelectCity = "?$select=new_cityname,_new_regionlookup_value";
            var FilterCity = "&$filter=new_cityname eq '" + City[0].name + "'";
            Xrm.WebApi.retrieveMultipleRecords(EntityCity, SelectCity + FilterCity).then(
                function success(result) {
                    if (result != null) {
                        GetRegion(result.entities[0])
                    }
                }                
            );            
        }
        else {
            return;
        }
    } catch (e) {
        throw new Error(e.Message);
    }
}
function GetRegion(CityResult) {
    try {
        var regionLookup = [];
        regionLookup[0] = new Object();
        regionLookup[0].id = CityResult["_new_regionlookup_value"];
        regionLookup[0].name = CityResult["_new_regionlookup_value@OData.Community.Display.V1.FormattedValue"];
        regionLookup[0].entityType = "new_region";
        Xrm.Page.getAttribute("new_region").setValue(regionLookup);
    } catch (e) {
        throw new Error(e.Message);
    }
}