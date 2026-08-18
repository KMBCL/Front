const EXPANDED = "true";
const COLLAPSED = "false";
const SHOW_MORE = "Show More";
const SHOW_LESS = "Show less";

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
    const showMoreButtons = document.getElementsByClassName("show-more");

    for (const button of showMoreButtons) {
        setShowMoreListener(button);
    }
}