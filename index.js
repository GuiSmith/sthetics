class Service {
  static services = [];
  constructor(id, name, price, time, days, dayHours, description, details, benefits, results, img1, img2, iframe) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.time = time;
    this.days = days;
    this.dayHours = dayHours;
    this.description = description;
    this.details = details;
    this.benefits = benefits;
    this.results = results;
    this.img1 = img1;
    this.img2 = img2;
    this.iframe = iframe;
    Service.services.push(this);
    // console.log(this);
  }
}
//Services
//Clareamento dental
const teeth = new Service(
  2055208,
  "Claramento dental",
  179.90,
  30,
  "dias úteis",
  "8:00 ~ 18h:00",
  "Um sorriso mais brilhante e confiante em minutos!",
  "O clareamento dental usa produtos com peróxido para deixar os dentes mais brancos. Pode ser feito no consultório ou em casa com moldeiras e gel clareador. Isso remove manchas e deixa o sorriso mais brilhante. Consulte um dentista para fazê-lo com segurança.",
  "O clareamento dental oferece dentes mais brancos, aumenta a autoconfiança, rejuvenesce o sorriso e melhora a aparência geral. É um procedimento seguro, personalizado e não invasivo que proporciona um sorriso radiante e uma maior autoestima.",
  "O clareamento dental proporciona resultados visíveis e dentes notavelmente mais brancos. Os pacientes podem esperar um sorriso mais brilhante, com manchas e descolorações significativamente reduzidas ou eliminadas. Isso resulta em um sorriso mais jovem.",
  "teeth.jpg",
  "teeth2.jpg",
  "https://www.youtube.com/embed/UvRmgtRGxiA"
);
//Limpeza facial
const facial = new Service(
  12913165261,
  "Limpeza Facial",
  129.99,
  60,
  "dias úteis",
  "10:00 ~ 19:00",
  "Promova a saúde da pele com nossa limpeza facial profissional, removendo impurezas e reduzindo a acne.",
  "A limpeza de pele envolve a remoção de impurezas, cravos e células mortas da pele. Geralmente, é feita com vapor para abrir os poros, seguido da extração manual das impurezas. Depois, aplicam-se produtos para acalmar e hidratar a pele. Isso melhora a textura e a saúde da pele. Consulte um esteticista para realizar o procedimento.",
  "A limpeza de pele remove impurezas, cravos e células mortas, melhorando a textura da pele e estimulando a renovação celular. Isso resulta em uma pele mais suave, hidratada e com menos acne, promovendo uma aparência mais saudável e radiante.",
  "Os resultados incluem uma pele mais suave, textura aprimorada, estimulação da renovação celular e redução da acne, proporcionando uma aparência mais saudável e radiante.",
  "facial1.jpg",
  "facial2.jpg",
  "https://www.youtube.com/embed/987654321"
);
//Depilação a laser
const hairRemoval = new Service(
  987654321,
  "Depilação a Laser",
  199.99,
  45,
  "dias úteis",
  "9:00 ~ 20:00",
  "Reduza permanentemente os pelos indesejados com nossa depilação a laser avançada.",
  "Nossa depilação a laser é um procedimento altamente eficaz para eliminar permanentemente os pelos indesejados. Envolve a aplicação de pulsos de laser que danificam os folículos capilares, impedindo o crescimento futuro dos pelos.",
  "Os benefícios da depilação a laser incluem uma pele mais suave e livre de pelos, reduzindo a necessidade de depilação frequente. Além disso, a pele fica menos irritada em comparação com a depilação tradicional.",
  "Os resultados da depilação a laser são duradouros, com uma redução permanente dos pelos na área tratada. Você pode desfrutar de uma pele suave e livre de pelos por um longo período.",
  "hairRemoval1.jpg",
  "hairRemoval2.jpg",
  "https://www.youtube.com/embed/123456789"
);

//Show Navigation bar
function showNavbar(folderMain){
  const body = document.body;
  //Nav element
  const nav = showElement("nav",body);
  nav.classList.add("topnav");
  nav.id = "topnavbar";
  //Links
  //Sthetics
  createNavLink((folderMain) ? ("index.html") : ("../index.html"),"Sthetics",nav);
  //Services
  createNavLink((folderMain) ? ("#services") : ("../index.html#services"),"Serviços",nav);
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
//Create navigation bar link
function createNavLink(link, text, parentElement){
  const element = showElement("a",parentElement);
  element.href = link;
  element.textContent = text;
}
//Create and append elements
function showElement(elementTag, parentElement){
  const element = document.createElement(elementTag);
  parentElement.appendChild(element);
  // console.log(elementTag + " was added in " + parentElement);
  return element;
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
  elementIcon.src = (mainFolder) ? ("media/contacts/"+iconSrc) : ("../media/contacts/"+iconSrc);
  elementIcon.alt = iconAlt;
  elementIcon.classList.add("link-icon");
  const elementText = showElement("span",element);
  elementText.textContent = text;
  const lineBreak = showElement("br",parentElement);
}
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