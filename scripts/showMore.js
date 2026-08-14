const EXPANDED = "true";
const COLLAPSED = "false";

function showMore(event) {
    const showMoreButton = event.target;
    if (showMoreButton.getAttribute("aria-expanded") == COLLAPSED) {
        showMoreButton.setAttribute("aria-expanded", EXPANDED);
    }
    else {
        showMoreButton.setAttribute("aria-expanded", COLLAPSED);
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