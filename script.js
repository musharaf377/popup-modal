
const popup_wrapper = document.querySelector(".popup-area");
const popup_btn = document.querySelector("#popup-btn");
const close_btn = document.querySelector(".close");

popup_wrapper.style.display = "none";

popup_btn.addEventListener("click", () => {
  popup_wrapper.setAttribute(
    "style","display: block; transition: all 5s ease-in-out");
})

close_btn.addEventListener("click", ()=>{
  popup_wrapper.style.display = "none";
})