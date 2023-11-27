main();
async function main(){
    //Getting service object
    const queryString = window.location.search; //Setting the current url
    const params = new URLSearchParams(queryString); //new Object
    const id = params.get('id'); //getting the ID from the URL
    requestService = await getServices(id);
    service = requestService.services;
    //Filling states
    const stateElement = document.querySelector('#state-select');
    const states = await getStates();
    await createOptions(states.states,'name','uf',stateElement);
    //Setting up CEP
    const cepElement = document.querySelector('#cep-input');
    cepElement.addEventListener('keyup',async function(){
        if(cepElement.value.length == 8){
            //Getting CEP info
            const cepRequest = await fetch(`https://viacep.com.br/ws/${cepElement.value}/json`);
            const cepInfo = await cepRequest.json();
            stateElement.value = cepInfo.uf; //Setting up state
            setContent('#city-input','value',cepInfo.localidade);
            setContent('#address-input','value',cepInfo.logradouro);
        }
    });
    //Setting up service name
    setContent('#service-name','text',service.name);
    //Setting up inputs' titles and placeholders
    const labels = document.querySelectorAll(".form-label");
    const inputs = document.querySelectorAll(".form-control");
    //Setting up inputs' placeholders 
    inputs.forEach(function(input){
        if(!input.readOnly){
            input.placeholder = "Digite aqui...";            
        }
    });
    //Setting up inputs' titles
    for(var i=0;i<labels.length;i++){
        if(inputs[i].title == ""){
            if(inputs[i].required){
                labels[i].innerHTML += '<span style = "color: red;font-size:25px"> *</span>';
            }
        }
    }
}

//Sends the details to the developer's whatsapp
async function submitForm(){
    const budgetData = {};
    const budgetInputs = document.querySelectorAll('input.form-control, select.form-control, textarea.form-control');
    //console.log(budgetInputs);
    const feedbackElement = document.querySelector('#feedback-budget');
    budgetInputs.forEach(input => {
        budgetData[input.name] = input.value;
    });
    //console.log(budgetData);
    if(await setBudget(budgetData,feedbackElement)){
        budgetInputs.forEach(input => {
            input.value = '';
        });
    }
    return false;
}