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
function showNavbar(){
  // Nav element
  const nav = document.createElement("nav");
  nav.classList.add("topnav");
  nav.id = "topnavbar";
  // Links
  // Sthetics
  const sthetics = document.createElement("a");
  sthetics.addEventListener("click",function(){
    window.location.reload();
  });
  sthetics.textContent = "Sthetics";
  nav.appendChild(sthetics);
  // Services
  const services = document.createElement("a");
  services.href = "#services";
  services.textContent = "Serviços";
  nav.appendChild(services);
  // Company
  const company = document.createElement("a");
  company.href = "#";
  company.textContent = "Empresa";
  nav.appendChild(company);
  // Contacts
  const contacts = document.createElement("a");
  contacts.href = "#footer";
  contacts.textContent = "Contato";
  nav.appendChild(contacts);
  // Icon
  const icon = document.createElement("a");
  icon.href = "#";
  icon.classList.add("icon");
  icon.addEventListener("click", function(){
    navbarLinks();
  });
  const iconImg = document.createElement("i");
  iconImg.className = "fa fa-bars";
  icon.appendChild(iconImg);
  nav.appendChild(icon);
  document.body.appendChild(nav);
}