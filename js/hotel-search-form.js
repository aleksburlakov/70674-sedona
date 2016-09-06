var button = document.querySelector(".offer-title-button");
var searchForm = document.querySelector(".hotel-search-form");
var animationCssClass = "hotel-search-form--animation";
var showCssClass = "hotel-search-form--show";
var formVisible = false;
var animationTimeoutId = 0;
var animationDurationInMS = 300;
        
button.addEventListener("click", function (event) {
    clearTimeout(animationTimeoutId);
    if (formVisible) {
        searchForm.classList.remove(animationCssClass);
        animationTimeoutId = setTimeout(function () {
            searchForm.classList.remove(showCssClass);
        }, animationDurationInMS);
    } else {
        if (!searchForm.classList.contains(showCssClass)) {
            searchForm.classList.add(showCssClass);
        }
        setTimeout(function () {
            if (formVisible) {
                searchForm.classList.add(animationCssClass);
            }
        }, 50);
    }
    formVisible = !formVisible;
});