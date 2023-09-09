//Elements
const queryString = window.location.search; //Setting the current url
const params = new URLSearchParams(queryString); //new Object
const id = params.get('id'); //getting the ID from the URL
var service; //this will store our current service
//Use of "for of" to break the iteration when needed
for (const object of Service.services) {
    if(object.id == id){
        service = object;
        break;
    }
}
setContent("service-name","text",service.name);
setContent("service-price","text",service.price);
setContent("service-time", "text",service.time);
setContent("service-days", "text",service.days);
setContent("service-day-hours", "text",service.dayHours);
setContent("service-details","text",service.details);
setContent("service-benefits","text",service.benefits);
setContent("service-results","text",service.results);
setContent("service-img1","src","../media/services/"+service.img1);
setContent("service-img2","src","../media/services/"+service.img2);
setContent("hidden-service-img1","src","../media/services/"+service.img1);
setContent("hidden-service-img2","src","../media/services/"+service.img2);
setContent("service-iframe","iframe",service.iframe);

function setContent(elementId,attribute,value){
    const element = document.getElementById(elementId);
    switch(attribute){
        case "text":
            element.textContent = value;
            break;
        case "iframe":
            element.src = "https://www.youtube.com/embed/"+value;
            break;
        case "src":
            element.src = value;
            break;
        default:
            break;
    }
}
//Sets the content of an element with a text
/*
function setTextTo(elementId,text){
    const element = document.getElementById(elementId);
    element.textContent = text;
}
*/