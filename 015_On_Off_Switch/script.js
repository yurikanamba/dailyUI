const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  //change theme by adding and removing dark class
  document.body.classList.toggle("dark");
});
