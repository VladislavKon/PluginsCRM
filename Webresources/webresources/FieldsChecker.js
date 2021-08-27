function FieldsChecker(primaryControl) {
    var message = "Введите данные в поля: "
    if (Xrm.Page.getAttribute("new_city").getValue() != null && Xrm.Page.getAttribute("new_city").getValue() != undefined
        && Xrm.Page.getAttribute("new_region").getValue() != null && Xrm.Page.getAttribute("new_region").getValue() != undefined
        && Xrm.Page.getAttribute("new_email").getValue() != null && Xrm.Page.getAttribute("new_email").getValue() != undefined) {
        primaryControl.data.save()
    } else {
        if (Xrm.Page.getAttribute("new_city").getValue() != null && Xrm.Page.getAttribute("new_city").getValue() != undefined)
            message += "\n Город"
        if (Xrm.Page.getAttribute("new_region").getValue() != null && Xrm.Page.getAttribute("new_city").getValue() != undefined)
            message += "\n Регион"
        if (Xrm.Page.getAttribute("new_email").getValue() != null && Xrm.Page.getAttribute("new_city").getValue() != undefined)
            message += "\n Основной email"
        Xrm.Navigation.openAlertDialog(message);        
    }
}