
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const copyButton = document.getElementById("copyButton");


openModalButton.addEventListener("click", function() {
  modal.style.display = "block";
});


closeModalButton.addEventListener("click", function() {
  modal.style.display = "none";
});


copyButton.addEventListener("click", function() {
  const citation = "Pamuła, H. \"Length Converter\". Available at: https://www.omnicalculator.com/conversion/length-converter.";
  navigator.clipboard.writeText(citation)
});
