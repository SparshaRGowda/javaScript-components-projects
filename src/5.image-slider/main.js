const page = 1;
const limit = 5;

async function fetchImages(page, limit) {
  try {
    const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=5`);
    const data = await res.json();
    if (data.length > 0) displayImages(data);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
}

const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container");

function displayImages(images) {
  slider.innerHTML = images
    .map(
      (image) => `
        <div class="slide">
            <img src=${image.download_url} alt="image"></img>
        </div>`
    )
    .join(" ");

  dotsContainer.innerHTML = images
    .map(
      (image, index) => `
    <span class="dot ${
      index === 0 ? "active" : ""
    }" data-slide=${index}></span>`
    )
    .join(" ");
}

setTimeout(() => {
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");
  const slides = document.querySelectorAll(".slide");
  let currentSlideNum = 0;

  function changeCurrentSlide(slideNum) {
    slides.forEach(
      (image, index) =>
        (image.style.transform = `translateX(${100 * (index - slideNum)}%)`)
    );
  }

  function changeDot(slideNum) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => dot.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slideNum}"]`)
      .classList.add("active");
  }

  // changeCurrentSlide(currentSlideNum);

  prevBtn.addEventListener("click", () => {
    currentSlideNum--;
    if (currentSlideNum < 0) {
      currentSlideNum = slides.length - 1;
    }
    changeCurrentSlide(currentSlideNum);
    changeDot(currentSlideNum);
  });

  nextBtn.addEventListener("click", () => {
    currentSlideNum++;
    if (currentSlideNum > slides.length - 1) {
      currentSlideNum = 0;
    }
    changeCurrentSlide(currentSlideNum);
    changeDot(currentSlideNum);
  });

  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      const currSlide = e.target.dataset.slide;
      changeCurrentSlide(currSlide);
      changeDot(currSlide);
    }
  });
}, 1000);
fetchImages();
