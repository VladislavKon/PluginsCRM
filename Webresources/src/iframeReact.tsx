import React from "react";
import ReactDOM  from "react-dom";

export function WriteAnnotation(result){
    result.forEach((item) => {
    const element = <tr className="cell"> 
    <td className="cell">{item.subject}</td>
    <td className="cell2">{item.notetext}</td>
    <button className="button" value={item.annotationid} >Закрыть</button>
    </tr>;
    ReactDOM.render(
        element,
        document.getElementById('myTable')
    );
})}

