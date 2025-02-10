const stars = document.querySelectorAll(".fa-star-o");
const ratingVal = document.querySelector(".rating-value");

let totalSelectedStars = 0;

stars.forEach((star, index) => {
  star.dataset.rating = index + 1;
  star.addEventListener("mouseover", handleMouseOver);
  star.addEventListener("click", handleClick);
  star.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(e) {
  const currentRating = e.target.dataset.rating;
  console.log(currentRating);
  if (!currentRating) return;
  else updateRating(currentRating);
}

function handleClick(e) {
  const currentRating = e.target.dataset.rating;
  //   if (totalSelectedStars === currentRating)
  //     totalSelectedStars = currentRating - 1;
  //   else
  totalSelectedStars = currentRating;
  updateRating(totalSelectedStars);
  ratingVal.textContent = totalSelectedStars;
}

function handleMouseLeave() {
  updateRating(totalSelectedStars);
}

function updateRating(curr) {
  for (let i = 0; i < 5; i++) {
    if (i < curr) {
      stars[i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}
