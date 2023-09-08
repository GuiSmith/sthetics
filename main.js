//Create service card
function createServiceCard(rowId,link,imgSrc,imgAlt,titleText,price,text){
    //Row element
    const row = document.getElementById(rowId);
    //Column container
    const col = showElement("div", row);
    col.classList.add("col-lg-3");
    //Card
    const card = showElement("div",col);
    card.classList.add("card");
    //Img link
    const imgLink = showElement("a",card);
    imgLink.href = "services/index.html?id="+link;
    //Img
    const img = showElement("img",imgLink);
    img.src = "media/services/"+imgSrc;
    img.alt = imgAlt;
    img.classList.add("card-img-top");
    //Card body
    const body = showElement("div",card);
    body.classList.add("card-body");
    //Card title and Price
    const title = showElement("h5",body);
    title.classList.add("card-title");
    title.classList.add("text-center");
    title.textContent = titleText+" - "+price;
    //Card text
    const cardText = showElement("p",body);
    cardText.classList.add("card-text");
    cardText.classList.add("text-justify");
    cardText.textContent = text;
    //Card buttons container
    const buttonsContainer = showElement("div",body);
    buttonsContainer.classList.add("d-flex");
    //Card details
    const detailsContainer = showElement("div",buttonsContainer);
    detailsContainer.classList.add("col-lg-6");
    detailsContainer.classList.add("col-sm-6");
    detailsContainer.classList.add("text-left");
    const details = showElement("a",detailsContainer);
    details.classList.add("btn");
    details.classList.add("btn-info");
    details.classList.add("text-left");
    details.textContent = "Detalhes";
    details.href = "services/index.html?id="+link;
    //Card order
    const orderContainer = showElement("div",buttonsContainer);
    orderContainer.classList.add("col-lg-6");
    orderContainer.classList.add("col-sm-6");
    orderContainer.classList.add("text-right");
    const order = showElement("a",orderContainer);
    order.classList.add("btn");
    order.classList.add("btn-success");
    order.classList.add("text-right");
    order.textContent = "Orçamento";
    order.href = "services/index.html?id="+link+"&order=true";
}

function setSlides(){
    const slides = document.querySelectorAll(".carousel-item img");
    const captions = document.querySelectorAll(".carousel-caption span");
    for(var i=0;i<3;i++){
        slides[i].src = "media/services/"+Service.services[i].img1;
        slides[i].alt = Service.services[i].name + " - " + Service.services[i].img1;
        slides[i].addEventListener("click", (function (index) {
            return function () {
                window.location.href = "services/index.html?page=" + Service.services[index].id;
            };
        })(i));
        captions[i].textContent = Service.services[i].name;
    }
}