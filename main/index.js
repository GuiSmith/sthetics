main();

async function main(){
    const serviceList = await getServices();
    //console.log(data);
    serviceList.services.forEach(function(service){
        //console.log(service);
        setCard(service);
    });
    setSlides(serviceList.services);
}

function setCard(obj){
    const card = document.querySelector('#card-model');
    const clonedCard = card.cloneNode(true);
    clonedCard.id = obj.textId;
    card.parentNode.appendChild(clonedCard);
    setContent(`#${clonedCard.id} .service-link`,'href',`../services/index.html?id=${obj.id}`); //Service link
    setContent(`#${clonedCard.id} .card-img-top`, 'src', `../media/services/${obj.img1}`);
    setContent(`#${clonedCard.id} .card-title`,'text',`${obj.name} - ${obj.price}`);
    setContent(`#${clonedCard.id} .card-text`,'text',obj.description);
    setContent(`#${clonedCard.id} .service-button-link`,'href',`../services/index.html?id=${obj.id}`);
    setContent(`#${clonedCard.id} .budget-link`,'href',`../budget/index.html?id=${obj.id}`);
}

//Navbar
function printNavbar(elementId){
  const nav = document.querySelector(`#${elementId}`);
  nav.innerHTML = `
  <a href="../main/index.html">Sthetics</a>
  <a href="../main/index.html#services">Serviços</a>
  <a href="../developer/index.html">Desenvolvedor</a>
  <a href="#contacts">Contato</a>
  <a href="../reviews/index.html">Depoimentos</a>
  <a href="#" class="icon"><i class="fa fa-bars"></i></a>
  `;
}