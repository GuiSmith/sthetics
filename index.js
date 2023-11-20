//Slides
function setSlides(objList){
  const slides = document.querySelectorAll(".carousel-item img");
  const captions = document.querySelectorAll(".carousel-caption span");
  for(var i=0;i<3;i++){
      slides[i].src = "../media/services/"+objList[i].img1;
      slides[i].alt = objList[i].name + " - " + objList[i].img1;
      slides[i].addEventListener("click", (function (index) {
          return function () {
              window.location.href = "services/index.html?id=" + objList[index].id;
          };
      })(i));
      captions[i].textContent = objList[i].name;
  }
}

//Navbar
printNavbar('topnav');
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

//Footer
printFooter();
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

//Sets content of an element that fits the query
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

//Checks if the given variable is empty or null
function isEmpty(text){
  if(text == "" || text == null){
    return true;
  }else{
    return false;
  }
}

//Gets the value of an element
function getValue(query){
  return document.querySelector(query).value;
}

//Checks if an email is valid
function validEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//Removes all children of an element
function removeChildren(element){
  try {
    while (element.firstChild){
      element.removeChild(element.firstChild);
    }
  } catch (error) {
    console.log(error);
  }
}

//Create options
async function createOptions(list,text,value,parent){
  try {
    list.forEach(item => {
      itemOption = document.createElement('option');
      itemOption.textContent = item[text];
      itemOption.value = item[value];
      parent.appendChild(itemOption);
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

//Get States of Brazil
async function getStates(){
  const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  const states = await response.json();
  return states;
}

//Get cities of a brazilian state
async function getCities(uf){
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
  const cities = await response.json();
  return cities;
}

/*
  Gets services
  If no ID is given, it returns all services
*/
async function getServices(id = 0){
  const response = await fetch(`../back/services.php?id=${id}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  //console.log($data);
  return data;
}

//Gets an user
async function getUser(email){
  if(isEmpty(email)){
    console.log(`Can't get user because email wasn't given`);
    return false;
  }
  const response = await fetch(`../back/getUser.php?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
}

//Creates an user
async function setUser(name,email,feedbackElement){
  //Setting up user data
  let userData = {
    name: name,
    email: email
  };
  requiredData = ['name','email'];
  let feedbackStatus = checkObj(userData,requiredData);
  if(!feedbackStatus){
    feedbackElement.textContent = "Preencha todos os campos!";
    return false;
  }
  //Setting up options for the request
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  };
  //Requesting
  try {
    let request = await fetch('../back/setUser.php',options);
    request = await request.json();
    return request.status;
  }catch(error){
    console.error(error);
  }
}

//Creates a contact
async function setContact(contactObj,feedbackElement){
  let user;
  let requiredData = ['name','email','subject','body'];
  let feedbackStatus = checkObj(contactObj,requiredData);
  if(feedbackStatus){
    if(validEmail(contactObj.email)){
      feedbackElement.textContent = '';
      feedbackElement.style.color = 'darkgreen';
    }else{
      feedbackElement.textContent = 'Informe um e-mail válido!';
      feedbackElement.style.color = 'red';
      return false;
    }
  }else{
    feedbackElement.textContent = 'Preencha todos os campos!';
    feedbackElement.style.color = 'red';
    return false;
  }
  user = await checkUser(contactObj.name,contactObj.email,feedbackElement);
  contactObj.user_id = user.id;
  options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contactObj)
  };
  let promise = await fetch('../back/setContact.php', options);
  let contactRequest = await promise.json();
  if(contactRequest.status == 'success'){
    feedbackElement.textContent = 'Mensagem cadastrada com sucesso!';
  }
  return true;
}

//Checks if the object contains all needed properties and if any is empty or null
async function checkObj(obj,properties){
  //Checking if obj contains all needed properties
  properties.forEach(property => {
    if(!obj.hasOwnProperty(property)){
      console.log(`Missing property: ${property}`);
      return false;
    }
  });
  //Checking if any data is empty
  for (const property in obj) {
    if(isEmpty(obj[property])){
      console.log(`Property is empty: ${property}`);
      return false;
    }
  }
  return true;
}

//Checks if user exists and creates one if it doesn't
async function checkUser(userName,userEmail){
  let requestUser = await getUser(userEmail); //Selects user from the database
  if(requestUser['status'] == 'failed'){ //Checks if the user exists
    //console.log(`Couldn't get user: ${requestUser.message}`);
    createUser = await setUser(userName,userEmail); //Creates user
    if(createUser.status == 'failed'){
      console.log(`Couldn't create user: ${createUser.message}`);
    }else{
      //console.log(`User created!`);
      requestUser = await getUser(userEmail);
      return requestUser.user;
    }
  }else{
      return requestUser.user;
  }
}