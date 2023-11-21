function contact(){
    const name = document.getElementById("name-contact").value;
    const subject = document.getElementById("subject-contact").value;
    const body = document.getElementById("body-contact").value;

    const subjectText = name + "%20-%20" + subject.replace(/ /,"%20");
    const bodyText = encodeURIComponent(body.replace(/ /,"%20").replace(/\n/,"%0A"));
    window.open(`mailto:guilhermessmith2014@gmail.com?subject=${subjectText}&body=${bodyText}`, "_blank");
}

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