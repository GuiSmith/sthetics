class Service {
  static services = [];
  constructor(id, textId, name, price, time, days, dayHours, description, details, benefits, results, img1, img2, iframe) {
    this.id = id;
    this.textId = textId;
    this.name = name;
    let formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    this.price = formattedPrice;
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
  'teeth',
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
  "UvRmgtRGxiA"
);
//Limpeza facial
const facial = new Service(
  12913165261,
  'facial',
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
  "SIbMDdzBKU4"
);
//Depilação a laser
const hairRemoval = new Service(
  987654321,
  'hairRemoval',
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
  "MyQMb26pCwY"
);

//Slides
function setSlides(objList){
  const slides = document.querySelectorAll(".carousel-item img");
  const captions = document.querySelectorAll(".carousel-caption span");
  for(var i=0;i<3;i++){
      slides[i].src = "../media/services/"+objList[i].img1;
      slides[i].alt = Service.services[i].name + " - " + objList[i].img1;
      slides[i].addEventListener("click", (function (index) {
          return function () {
              window.location.href = "services/index.html?id=" + objList[index].id;
          };
      })(i));
      captions[i].textContent = objList[i].name;
  }
}

//Navbar
function printNavbar(elementId){
  const nav = document.querySelector(`.${elementId}`);
  nav.innerHTML = `
  <a href="../main/index.html">Sthetics</a>
  <a href="../main/index.html#services">Serviços</a>
  <a href="../developer/index.html">Desenvolvedor</a>
  <a href="../developer/index.html#contacts">Contato</a>
  <a href="../reviews/index.html">Depoimentos</a>
  <a href="#" class="icon"><i class="fa fa-bars"></i></a>
  `;
}
printNavbar('topnav');

//Footer
function printFooter(){
  const footer = document.querySelector(`footer`);
  footer.innerHTML = `
  <div class="row">
    <div class="col-lg-5">
      <h2 class="text-center">Contatos</h2>
      <div>
        <a class="contact-link" href="https://www.instagram.com/shimiters/" target="_blank">
          <img src="../media/contacts/instagram.png" alt="Instagram Icon" class="link-icon">
          <span>Instagram: Shimiters</span>
        </a>
        <br>
        <a class="contact-link" href="#" target="_blank">
          <img src="../media/contacts/number.png" alt="Number icon" class="link-icon">
          <span>Telefone: (49) 9 9823-5010</span>
        </a>
        <br>
        <a class="contact-link" href="https://wa.me/5549991145655" target="_blank">
          <img src="../media/contacts/whatsapp.png" alt="Whatsapp Icon" class="link-icon">
          <span>Whatsapp: (49) 9 9114-5655</span>
        </a>
        <br>
        <a class="contact-link" href="mailto:guilhermessmith2014@gmail.com?subject=About%20your%20latest%20project&amp;body=Your%20Message" target="_blank">
          <img src="../media/contacts/email.png" alt="Email Icon" class="link-icon">
          <span>E-mail: guilhermessmith2014@gmail.com</span>
        </a>
        <br>
        <a class="contact-link" href="https://github.com/GuiSmith" target="_blank">
          <img src="../media/contacts/github.png" alt="Github Icon" class="link-icon">
          <span>Desenvolvedor: Guilherme Smith Dansiguer Rodrigues</span>
        </a>
        <br>
      </div>
    </div>
    <div class="col-lg-7">
      <h3 class="text-center">Declaração</h3>
      <h5 class="text-center">Este website não é comercial. <br> Foi criado com o objetivo de praticar desenvolvimento web</h5>
    </div>
  </div>
  `;
}
printFooter();
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

async function getServices(id = 0){
  $response = await fetch(`../back/services.php?id=${id}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  $data = await $response.json();
  //console.log($data);
  return $data;
}

function setContent(query,attribute,value){
  const element = document.querySelector(query);
  console.log();
  switch(attribute){
      case "text":
          element.textContent = value;
          break;
      case "iframe":
          element.src = "https://www.youtube.com/embed/"+value;
          break;
      default:
          element.setAttribute(attribute,value);
          break;
  }
}