//Service
const queryString = window.location.search; //Setting the current url
const params = new URLSearchParams(queryString); //new Object
const id = params.get('id'); //getting the ID from the URL
var service; //this will store our current service
if(id === null){
    //window.location.href = "../index.html";
}else{
    for (const object of Service.services) { //Use of "for of" to break the iteration when needed
        if(object.id == id){
            service = object;
            break;
        }
    }
}
//Getting the service name
var serviceName = document.getElementById("service-name");
serviceName.textContent = service.name;
//List of states and cities
$(document).ready(function() {
    // Populate the state (UF) select element
    const stateSelect = $('#state-select');
    $.ajax({
        url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
        method: 'GET',
        success: function(states) {
            states.forEach(function(state) {
                stateSelect.append($('<option>', {
                    value: state.sigla,
                    text: state.nome
                }));
            });
        },
        error: function() {
            stateSelect.html('<option value="">Error fetching states</option>');
        }
    });

    // Listen for state selection changes
    stateSelect.on('change', function() {
        const selectedState = $(this).val();
        const citySelect = $('#city-select');
        citySelect.empty(); // Clear city options

        if (selectedState) {
            const apiUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`;
            $.ajax({
                url: apiUrl,
                method: 'GET',
                success: function(cities) {
                    cities.forEach(function(city) {
                        citySelect.append($('<option>', {
                            value: city.nome,
                            text: city.nome
                        }));
                    });
                },
                error: function() {
                    citySelect.html('<option value="">Error fetching cities</option>');
                }
            });
        }
    });
});
//Setting up inputs' titles and placeholders
const labels = document.querySelectorAll(".form-label");
const inputs = document.querySelectorAll(".form-control");
//Setting up inputs' placeholders 
inputs.forEach(function(input){
    if(input.id != "budget-input"){
        input.placeholder = "Digite aqui...";
        input.addEventListener("keyup",function(){
            updateBudget();
        });
    }
});
//Setting up inputs' titles
for(var i=0;i<labels.length;i++){
    if(inputs[i].title == ""){
        inputs[i].title = "Digite seu " + labels[i].textContent.toLowerCase();
    }
}
//Updates the textarea with the user's data
function updateBudget(){
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
            
            // console.log(labels[i].textContent+": "+inputs[i].value);
        }
    }
    budgetText += "\nPedido via guismith.github.io/sthetics";
    budget.textContent = budgetText;
}
//Sends the details to the developer's whatsapp
function submitForm(){
    /*
    The code in comments sends the message to the number the user informed
    const number = "55" + document.getElementById("number-input").value;
    */
    const budgetText = document.getElementById("budget-input").value;
    var link = "https://wa.me/";
    var whatsText = budgetText.replace(/ /g, "%20").replace(/\n/g,"%0A");
    link += "5549991145655?text=" + whatsText;
    
    console.log(link);
    window.open(link, "_blank");
    return false;
}