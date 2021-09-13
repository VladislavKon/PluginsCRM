module.exports = {
    refresh: function GetOnChange(executionContext) {
        var formContext = executionContext.getFormContext();
        formContext.getControl("Timeline").addOnChange(() => (formContext.getControl("IFRAME_annotation").getObject().contentWindow.location.reload()))
    }
}
