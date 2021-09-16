import React from "react";
import ReactDOM  from "react-dom";
require ('./Style.css');

export function GetAnnotations() {
    try {
        var parent = window.parent;
        var table = document.getElementById("myTable");        
        var contId = parent.Xrm.Page.data.entity.getId()
        var Entity = "annotation";
        var Select = "?$select=_objectid_value, notetext, subject, annotationid, createdon";
        var Filter = "&$filter=_objectid_value eq '" + contId + "'";
        parent.Xrm.WebApi.retrieveMultipleRecords(Entity, Select + Filter).then(
            async function success(result) {
                if (result != null && table.childNodes.length != result.entities.length) {                    
                    if (table.childNodes.length>0) {
                        while (table.hasChildNodes()) {
                            table.removeChild(table.childNodes[0]);
                        }                    
                    }
                    await WriteAnnotation(result.entities.sort(function (a, b) {
                        if (a.createdon > b.createdon) {
                          return 1;
                        }
                        if (a.createdon < b.createdon) {
                          return -1;
                        }                        
                        return 0;
                      }))                  
                    setTimeout(()=>GetAnnotations(), 4000);
                }
                else setTimeout(()=>GetAnnotations(), 4000);
                
            }
        );        
    } catch (e) {
        throw new Error(e.Message);
    }
}
function WriteAnnotation(result){
    result.forEach((item) => {
    const element = <tr className="cell"> 
    <td className="cell">{item.subject}</td>
    <td className="cell2">{item.notetext}</td>
    <button className="button" onClick={()=>DeleteAnno(item.annotationid)}>Закрыть</button>
    </tr>;
    ReactDOM.render(
        element,
        document.getElementById('myTable')
    );
})}
// function WriteAnnotation(result) {
//     let table = document.getElementById("myTable");

//     result.forEach((item) => {
//         let tr = document.createElement("tr");
//         let td = document.createElement("td");
//         let td2 = document.createElement("td");
//         let td3 = document.createElement("td");
//         let button = document.createElement("button");

//         td.innerText = item.subject;        
//         td2.innerHTML = item.notetext;
//         button.innerText = "Удалить";

//         tr.setAttribute("class", "cell");
//         td.setAttribute("class", "cell");
//         td2.setAttribute("class", "cell2");
//         td3.setAttribute("class", "cell");
//         td3.setAttribute("align", "center");
//         button.setAttribute("value", item.annotationid);
//         button.setAttribute("onclick", "WebResources.iframe.deleteAnno(this.value)");

//         td3.appendChild(button);
//         table.appendChild(tr);
//         table.appendChild(td);
//         table.appendChild(td2);
//         table.appendChild(td3);
//     });
// }
function DeleteAnno(recordId) {
    var parent = window.parent;
    parent.Xrm.WebApi.deleteRecord("annotation", recordId).then(function successCallback() { location.reload() });
}
