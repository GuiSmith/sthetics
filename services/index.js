main();

async function main(){
    const queryString = window.location.search; //Setting the current url
    const params = new URLSearchParams(queryString); //new Object
    const id = params.get('id'); //getting the ID from the URL
    if(id === null){
        window.location.href = '../main/index.html';
    }else{
        const data = await getServices(id);
        setValues(data.services);
    }
}

function setValues(service){
    setContent("#service-name","text",service.name);
    setContent("#service-price","text",service.price);
    setContent("#service-time", "text",service.time);
    setContent("#service-days", "text",service.days);
    setContent("#service-day-hours", "text",service.dayHours);
    setContent("#service-details","text",service.details);
    setContent("#budget-link","href","../budget/index.html?id="+service.id);
    setContent("#service-benefits","text",service.benefits);
    setContent("#service-results","text",service.results);
    setContent("#service-img1","src","../media/services/"+service.img1);
    setContent("#service-img2","src","../media/services/"+service.img2);
    setContent("#hidden-service-img1","src","../media/services/"+service.img1);
    setContent("#hidden-service-img2","src","../media/services/"+service.img2);
    setContent("#service-iframe","iframe",service.iframe);
}