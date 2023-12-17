main();

async function main(){
    const serviceElement = document.querySelector('#service-select');
    const servicesList = await getServices();
    createOptions(servicesList.services,'name','id',serviceElement);
}

async function submitReview(){
    const feedbackElement = document.querySelector('.feedback-element');
    // console.log(feedbackElement);
    const inputs = document.querySelectorAll('.review-content');
    let reviewData = {};
    inputs.forEach(input =>{
        reviewData[input.name] = input.value;
    });
    if(await setReview(reviewData,feedbackElement)){
        inputs.forEach(input => {
            input.value = '';
        });
    }
    
    // const name = document.getElementById("name-input").value;
    // const review = document.getElementById("review-input").value;
    // const reviewText = name + "%20-%20" + review.replace(/ /,"%20");
    // console.log(reviewText);
    // window.open(`https://wa.me/5549991145655?text=${reviewText}`,"_blank");
}