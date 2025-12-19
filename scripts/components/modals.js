const overlay = document.createElement("div");
overlay.classList.add("overlay");
const btnModal = document.querySelector(".btn--modal");
const modal = document.querySelector(".modal");
let close = document.createElement("button");
close.classList.add("modal--close");
close.innerHTML = '<img src="../../assets/images/close-outline.svg" />'

btnModal.addEventListener("click", () => {
    modal.prepend(close);
  modal.classList.add("modal--active");
  document.body.prepend(overlay);
});
close.addEventListener('click', () => {
    modal.classList.remove('modal--active');
    close.remove();
    overlay.remove();
})
