function FieldsChecker() {
    if (Xrm.Page.getAttribute("new_city").getValue() != null && Xrm.Page.getAttribute("new_city").getValue() != undefined
        && Xrm.Page.getAttribute("new_region").getValue() != null && Xrm.Page.getAttribute("new_region").getValue() != undefined
        && Xrm.Page.getAttribute("new_email").getValue() != null && Xrm.Page.getAttribute("new_email").getValue() != undefined) {
        return true;
    } else {
        Xrm.Navigation.openAlertDialog("Введите данные");
        return false;
    }
}