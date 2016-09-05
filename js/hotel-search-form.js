var button = document.querySelector(".offer-title-button");
var searchForm = document.querySelector(".hotel-search-form");
        
button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Клик по кнопке"); 
    if (searchForm.classList.contains("hotel-search-form-show")) {
        searchForm.classList.remove("hotel-search-form-show");
    } else {
        searchForm.classList.add("hotel-search-form-show");
    }
});