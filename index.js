//Mobile navbar
var linksToggle = false;
function navbarLinks(){
  const links = document.querySelectorAll(".topnav a:not(:first-child):not(:last-child)");
  console.log(links);
  if(!linksToggle){
    links.forEach(function(link){
      link.style.display = "block";
    });
    linksToggle = true;
  }else{
    links.forEach(function(link){
      link.style.display = "none";
    });
    linksToggle = false;
  }
}
//Create and append elements
function showElement(elementTag, parentElement){
  const element = document.createElement(elementTag);
  parentElement.appendChild(element);
  // console.log(elementTag + " was added in " + parentElement);
  return element;
}
//Show Navigation bar
function showNavbar(folderMain){
  const body = document.body;
  //Nav element
  const nav = showElement("nav",body);
  nav.classList.add("topnav");
  nav.id = "topnavbar";
  //Links
  //Sthetics
  createNavLink("../index.html#header","Sthetics",nav);
  //Services
  createNavLink("../index.html#services","Serviços",nav);
  // Company
  createNavLink("#","Empresa",nav);
  // Contacts
  createNavLink("#footer","Contatos",nav);
  // Icon
  const icon = showElement("a",nav);
  icon.href = "#";
  icon.classList.add("icon");
  icon.addEventListener("click", function(){
    navbarLinks();
  });
  const iconImg = showElement("i",icon);
  iconImg.className = "fa fa-bars";
}
//Create navigation bar link
function createNavLink(link, text, parentElement){
  const element = showElement("a",parentElement);
  element.href = link;
  element.textContent = text;
}
//Show footer
function showFooter(folderMain){
  if(folderMain){
    mainFolder = true;
  }else{
    mainFolder = false;
  }
  const body = document.body;
  //Footer
  const footer = showElement("footer",body);
  footer.id = "footer";
  //Row
  const row = showElement("div",footer);
  row.classList.add("row");
  //Contacts
  const contacts = showElement("div",row);
  contacts.classList.add("col-lg-5");
  //Contacts title
  const title = showElement("h2",contacts);
  title.classList.add("text-center");
  title.textContent = "Contatos";
  //Contacts list
  const linksContainer = showElement("div", contacts);
  //Instagram
  createContact(
    "https://www.instagram.com/shimiters/",
    "instagram.png",
    "Instagram Icon",
    "Instagram: Shimiters",
    linksContainer
  );
  //Number
  createContact(
    "#",
    "number.png",
    "Number icon",
    "Telefone: (49) 9 9823-5010",
    linksContainer
  );
  //Whatsapp
  createContact(
    "https://wa.me/5549991145655",
    "whatsapp.png",
    "Whatsapp Icon",
    "Whatsapp: (49) 9 9114-5655",
    linksContainer
  );
  //E-mail
  createContact(
    "mailto:guilhermessmith2014@gmail.com?subject=About%20your%20latest%20project&body=Your%20Message",
    "email.png",
    "Email Icon",
    "E-mail: guilhermessmith2014@gmail.com",
    linksContainer
  );
  //Github
  createContact(
    "https://github.com/GuiSmith",
    "github.png",
    "Github Icon",
    "Desenvolvedor: Guilherme Smith Dansiguer Rodrigues",
    linksContainer
  );
  //Disclaimer
  const disclaimer = showElement("div", row);
  disclaimer.classList.add("col-lg-7");
  const disclaimerTitle = showElement("h3",disclaimer);
  disclaimerTitle.classList.add("text-center");
  disclaimerTitle.textContent = "Declaração";
  const disclaimerText = showElement("h5",disclaimer);
  disclaimerText.classList.add("text-center");
  disclaimerText.innerHTML = "Este website não é comercial. <br> Foi criado com o objetivo de praticar desenvolvimento web";
}
var mainFolder;
//Create footer contacts
function createContact(link,iconSrc,iconAlt,text,parentElement){
  const element = showElement("a",parentElement);
  element.classList.add("contact-link");
  element.href = link;
  element.target = '_blank';
  //element icon
  const elementIcon = showElement("img",element);
  elementIcon.src = (mainFolder) ? ("media/"+iconSrc) : ("../media/"+iconSrc);
  elementIcon.alt = iconAlt;
  elementIcon.classList.add("link-icon");
  const elementText = showElement("span",element);
  elementText.textContent = text;
  const lineBreak = showElement("br",parentElement);
}
//Create service card
function createServiceCard(rowId,link,imgSrc,imgAlt,titleText,priceText,text){
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
  img.src = "media/"+imgSrc;
  img.alt = imgAlt;
  img.classList.add("card-img-top");
  //Card body
  const body = showElement("div",card);
  body.classList.add("card-body");
  //Card title
  const title = showElement("h5",body);
  title.classList.add("card-title");
  title.classList.add("text-center");
  title.textContent = titleText+" - "+priceText;
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