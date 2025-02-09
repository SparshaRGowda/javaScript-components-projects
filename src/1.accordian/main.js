const data = [
  {
    id: "1",
    question: "who are you?",
    answer: "I am Sparsha",
  },
  {
    id: "2",
    question: "where are you from?",
    answer: "I am from San Jose",
  },
  {
    id: "3",
    question: "what is your hobby?",
    answer: "Singing",
  },
  {
    id: "4",
    question: "what is your favorite food?",
    answer: "Chicken",
  },
];

const accordian = document.querySelector(".accordian");

function createAccordian() {
  accordian.innerHTML = data
    .map(
      (item) =>
        `<div class="accordian_item">
          <div class="accordian_title">
            <h3>${item.question}</h3>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div  class="accordian_answer">
            <p>${item.answer}</p>
          </div>
        </div>`
    )
    .join(" ");
}

createAccordian();

const accordianTitles = document.querySelectorAll(".accordian_title");

accordianTitles.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      let otherItemsWithActiveClass = document.querySelectorAll(
        ".accordian_title.active"
      );
      otherItemsWithActiveClass.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    }
  });
});
