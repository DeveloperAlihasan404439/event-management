import { useEffect, useState } from "react"

export const useDataFetch = datas =>{
    const [socialData, setSocialData] = useState([])
    useEffect(()=>{
        async function social(){
            const res = await fetch(datas)
            const data = await res.json()
            setSocialData(data)
        }
        social()
    },[])
    return(socialData)
}