function submitReview(){
    const name = document.getElementById("name-input").value;
    const review = document.getElementById("review-input").value;
    const reviewText = name + "%20-%20" + review.replace(/ /,"%20");
    console.log(reviewText);
    window.open(`https://wa.me/5549991145655?text=${reviewText}`,"_blank");
}