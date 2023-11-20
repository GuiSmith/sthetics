main();
async function main(){
    //Getting service object
    const queryString = window.location.search; //Setting the current url
    const params = new URLSearchParams(queryString); //new Object
    const id = params.get('id'); //getting the ID from the URL
    requestService = await getServices(id);
    service = requestService.services;
    //Filling states and city
    const stateElement = document.querySelector('#state-select');
    const states = await getStates();
    await createOptions(states,'nome','sigla',stateElement);
    const cityElement = document.querySelector('#city-select');
    const cities = await getCities(stateElement.value);
    await createOptions(cities,'nome','nome',cityElement);
    stateElement.addEventListener('click',async () => {
        //Erasing cities
        removeChildren(cityElement);
        //Adding cities
        let cities = await getCities(stateElement.value);
        await createOptions(cities,'nome','nome',cityElement);
    });
    setContent('#service-name','text',service.name);
    //Setting up inputs' titles and placeholders
    const labels = document.querySelectorAll(".form-label");
    const inputs = document.querySelectorAll(".form-control");
    //Setting up inputs' placeholders 
    inputs.forEach(function(input){
        if(input.id != "budget-input"){
            input.placeholder = "Digite aqui...";
            input.addEventListener("keyup",function(){
                updateBudget(service);
            });
        }
    });
    //Setting up inputs' titles
    for(var i=0;i<labels.length;i++){
        if(inputs[i].title == ""){
            inputs[i].title = "Digite seu " + labels[i].textContent.toLowerCase();
            if(inputs[i].required){
                labels[i].innerHTML += '<span style = "color: red;font-size:25px"> *</span>';
            }
        }
    }
}


//Updates the textarea with the user's data
function updateBudget(service){
    let labels = document.querySelectorAll(".form-label");
    let inputs = document.querySelectorAll(".form-control");
    let budget = document.getElementById("budget-input");
    let budgetText = "Serviço: " + service.name + "\n";
    for(var i=0;i<labels.length;i++){
        if(inputs[i].id != budget.id){
            if(inputs[i].id == "date-input"){
                if(inputs[i].value === ''){
                    formattedDate = "";
                }else{
                    const serviceDate = new Date(inputs[i].value);
                    const day = serviceDate.getDate()+1;
                    const month = serviceDate.getMonth()+1;
                    const year = serviceDate.getFullYear();
                    const formattedDate = day + "/" + month + "/" + year;
                }
                budgetText += labels[i].textContent + ": " + formattedDate + "\n";
            }else{
                budgetText += labels[i].textContent + ": " + inputs[i].value + "\n";
            }
        }
    }
    budgetText += "\nPedido via guismith.github.io/sthetics";
    budget.textContent = budgetText;
}
//Sends the details to the developer's whatsapp
async function submitForm(){
    const requiredData = ['name', 'email','address','uf','city','date','hour'];
    const budgetData = {};
    const budgetInputs = document.querySelectorAll('form input, form select, form textarea:not(#budget-input)');
    const feedbackElement = document.querySelector('#feedback-budget');
    let feedbackStatus = true;
    budgetInputs.forEach(input => {
        budgetData[input.name] = input.value;
    });
    feedbackStatus = checkObj(budgetData,requiredData);
    if(!feedbackStatus){
        feedbackElement.textContent = 'Preencha todos os campos!';
        feedbackElement.style.color = 'red';
    }else{
        feedbackElement.textContent = 'Tudo certo!';
        feedbackElement.style.color = 'green';
    }
    
    /*
    const budgetText = document.getElementById("budget-input").value;
    var link = "https://wa.me/";
    var whatsText = budgetText.replace(/ /g, "%20").replace(/\n/g,"%0A");
    link += "5549991145655?text=" + whatsText;
    window.open(link, "_blank");
    */
    return false;
}