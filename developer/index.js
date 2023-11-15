function contact(){
    const name = document.getElementById("name-input").value;
    const subject = document.getElementById("subject-input").value;
    const body = document.getElementById("body-input").value;

    const subjectText = name + "%20-%20" + subject.replace(/ /,"%20");
    const bodyText = encodeURIComponent(body.replace(/ /,"%20").replace(/\n/,"%0A"));
    window.open(`mailto:guilhermessmith2014@gmail.com?subject=${subjectText}&body=${bodyText}`, "_blank");
}