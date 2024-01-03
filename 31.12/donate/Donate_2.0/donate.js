
function something(){
  console.log("Working");
}
something()


var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function filterCards() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".swiper-slide");
  
    cards.forEach(function (card) {
      const name = card.querySelector(".name-organization").innerText.toLowerCase();
      if (name.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }