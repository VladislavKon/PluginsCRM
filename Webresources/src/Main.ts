import * as filterLookup from './FilterLookup'
import * as iframeAnnotation from './IframeAnnotation'


export namespace filter{
    export const filterCity = filterLookup.filterLookup; 
}
export namespace iframe{   
    export const getAnnotations = iframeAnnotation.GetAnnotations;    
}
