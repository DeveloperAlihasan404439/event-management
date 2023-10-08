const getLocalStorage = () =>{
    const services = localStorage.getItem('services')
    if(services){
        return JSON.parse(services)
    }
    return []
}
const setLocalStorage = (id) =>{
    const servicesData = getLocalStorage()
    servicesData.push(id)
    if(servicesData){
        const stringifyData = JSON.stringify(servicesData)
        localStorage.setItem("services", stringifyData)
    }
}
export {setLocalStorage,getLocalStorage }