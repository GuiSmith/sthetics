async function registerContact(){
    let feedbackElement = document.querySelector('#feedback-contact');
    const contactData = {
        name: getValue('#name-contact'),
        email: getValue('#email-contact'),
        subject: getValue('#subject-contact'),
        body: getValue('#body-contact')
    };
    if(await setContact(contactData,feedbackElement)){
        let inputs = document.querySelectorAll('form input, form textarea');
        inputs.forEach(input => {
            input.value = "";
        });
        inputs[0].focus();
    }
}