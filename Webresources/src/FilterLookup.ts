
function addCustomeLookupFilter(formContext: Xrm.FormContext) {
    try {
        var Region = formContext.getAttribute("new_region").getValue();
        if (Region != null && Region != undefined) {
            var fetchXml = "<filter type='and'><condition attribute='new_regionlookup' operator='eq' value='" + Region[0].id + "' /></filter>";
            formContext.getControl<Xrm.Controls.LookupControl>("new_city").addCustomFilter(fetchXml);
        }
    } catch (e) {
        throw new Error(e.Message);
    }
}

export function filterLookup(executionContext: Xrm.Events.EventContext) {
    try {
        var formContext : Xrm.FormContext = executionContext.getFormContext();
        if (formContext.getControl("new_region") != null && formContext.getControl("new_region") != undefined) {
            formContext.getControl<Xrm.Controls.LookupControl>("new_city").addPreSearch(function () {
                addCustomeLookupFilter(formContext);
            });
        }
    } catch (e) {
        throw new Error(e.Message);
    }
}    
