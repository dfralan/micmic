function rateNow() {
    let rater = document.getElementsByTagName("rater")
    if (rater) {
    let rat = Array.from(rater);
    rat.forEach((element) => {
        const ul = element.querySelector('ul');
        const lis = ul.querySelectorAll('li');
        const rating = element.getAttribute("rating")
        const ratingPars = parseFloat(rating)
        console.log(ratingPars)
        
        lis.forEach((li, index) => {
        if (index === 0) {
            li.textContent = rating
        } else if (index === 1) {
            if (ratingPars >= 1) {
                li.classList.add('bi-star-fill');
            } else if (ratingPars >= 0.5 && ratingPars < 1){
                li.classList.add('bi-star-half');
            } else if (ratingPars < 0.5){
                li.classList.add('bi-star');
            }

        } else if (index === 2) {
            if (ratingPars >= 2) {
                li.classList.add('bi-star-fill');
            } else if (ratingPars >= 1.5 && ratingPars < 2){
                li.classList.add('bi-star-half');
            } else if (ratingPars < 1.5){
                li.classList.add('bi-star');
            }

        } else if (index === 3) {
            if (ratingPars >= 3) {
                li.classList.add('bi-star-fill');
            } else if (ratingPars >= 2.5 && ratingPars < 3){
                li.classList.add('bi-star-half');
            } else if (ratingPars < 2.5){
                li.classList.add('bi-star');
            }

        } else if (index === 4) {
            if (ratingPars >= 4) {
                li.classList.add('bi-star-fill');
            } else if (ratingPars >= 3.5 && ratingPars < 4){
                li.classList.add('bi-star-half');
            } else if (ratingPars < 3.5){
                li.classList.add('bi-star');
            }

        } else if (index === 5) {
            if (ratingPars >= 5) {
                li.classList.add('bi-star-fill');
            } else if (ratingPars >= 4.5 && ratingPars < 5){
                li.classList.add('bi-star-half');
            } else if (ratingPars < 4.5){
                li.classList.add('bi-star');
            }
        }
        });
        
        });
    }
}