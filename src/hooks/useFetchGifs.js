import { useEffect, useState } from "react"
import {getGrifs} from '../helpers/getGifs'


export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading: true
    })

    useEffect( () => {  
        getGrifs(category)
            .then( img =>{
               
               setTimeout(() => {
                   setstate({
                       data: img,
                       loading: false
                   });
                   
               }, 3000);     
            })
        
    }, [category])




    return state
}
