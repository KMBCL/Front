const EXPANDED = "true";
const COLLAPSED = "false";
const SHOW_MORE = " Voir plus";
const SHOW_LESS = "Voir moins";

function showMore(event) {
    const showMoreButton = event.target;
    if (showMoreButton.getAttribute("aria-expanded") == COLLAPSED) {
        showMoreButton.setAttribute("aria-expanded", EXPANDED);
        showMoreButton.textContent = SHOW_LESS
    }
    else {
        showMoreButton.setAttribute("aria-expanded", COLLAPSED);
        showMoreButton.textContent = SHOW_MORE
    }
}

export function setShowMoreListener(element) {
    element.addEventListener("click", showMore);
}

export function setShorMoreListeners() {
    const showMoreButtons = document.getElementsByClassName("best-movies__show-more");

    for (const button of showMoreButtons) {
        setShowMoreListener(button);
    }
}