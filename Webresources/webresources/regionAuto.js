function regionAuto() {
    try {
        if (Xrm.Page.getControl("new_city") != null && Xrm.Page.getControl("new_city") != undefined) {
            var City = Xrm.Page.getAttribute("new_city").getValue();            
            Xrm.Page.getAttribute("new_region").setValue();
        }
        else {
            return;
        }
    } catch (e) {
        throw new Error(e.Message);
    }
}