function SaveAndClose(primaryControl) {
    var message = "Заполните следующие поля: "
    if (primaryControl.getAttribute("new_city").getValue() != null && primaryControl.getAttribute("new_city").getValue() != undefined
        && primaryControl.getAttribute("new_region").getValue() != null && primaryControl.getAttribute("new_region").getValue() != undefined
        && primaryControl.getAttribute("new_email").getValue() != null && primaryControl.getAttribute("new_email").getValue() != undefined) {
       
        primaryControl.data.save().then(setTimeout(function () {
            toEntityView();
        }, 1000));
        
    } else {
        if (primaryControl.getAttribute("new_city").getValue() == null || primaryControl.getAttribute("new_city").getValue() == undefined)
            message += "\n Город";
        if (primaryControl.getAttribute("new_region").getValue() == null || primaryControl.getAttribute("new_region").getValue() == undefined)
            message += "\n Регион";
        if (primaryControl.getAttribute("new_email").getValue() == null || primaryControl.getAttribute("new_email").getValue() == undefined)
            message += "\n Основной email";       
        Xrm.Navigation.openAlertDialog(message);
    }
}
function toEntityView() {
    var pageInput = {
        pageType: "entitylist",
        entityName: "myxrm_contact"
    };
    Xrm.Navigation.navigateTo(pageInput)
}
