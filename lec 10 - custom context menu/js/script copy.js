const contextMenu = document.querySelector(".context-menu");
const scope = document.querySelector("body");

scope.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const { clientX: mouseX, clientY: mouseY } = event;
    contextMenu.style.top = `${mouseY}px`;
    contextMenu.style.left = `${mouseX}px`;
    contextMenu.classList.remove("visible");
    setTimeout(() => {
        contextMenu.classList.add("visible");
    });

});
scope.addEventListener("click", (event) => {
    if (event.target != contextMenu) {
        contextMenu.classList.remove("visible");
    }
});


const normalizePozition = (mouseX, mouseY) => {
    // compute what is the mouse position relative to the container element (scope)
    let {
        left: scopeOffsetX,
        top: scopeOffsetY,
    } = scope.getBoundingClientRect();

    scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
    scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;

    const scopeX = mouseX - scopeOffsetX;
    const scopeY = mouseY - scopeOffsetY;

    // ? check if the element will go out of bounds
    const outOfBoundsOnX =
        scopeX + contextMenu.clientWidth > scope.clientWidth;

    const outOfBoundsOnY =
        scopeY + contextMenu.clientHeight > scope.clientHeight;

    let normalizedX = mouseX;
    let normalizedY = mouseY;

    // ? normalize on X
    if (outOfBoundsOnX) {
        normalizedX =
            scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
    }

    // ? normalize on Y
    if (outOfBoundsOnY) {
        normalizedY =
            scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
    }

    return { normalizedX, normalizedY };
};

scope.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    const { clientX: mouseX, clientY: mouseY } = event;

    const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

    contextMenu.classList.remove("visible");

    contextMenu.style.top = `${normalizedY}px`;
    contextMenu.style.left = `${normalizedX}px`;

    setTimeout(() => {
        contextMenu.classList.add("visible");
    });
});

scope.addEventListener("click", (e) => {
    // ? close the menu if the user clicks outside of it
    if (e.target.offsetParent != contextMenu) {
        contextMenu.classList.remove("visible");
    }
});
//remove the menu if the user presses the escape key
scope.onkeydown = (e) => {
    if (e.key === 'Escape' || e.which === 27 || e.keyCode === 27) {
        contextMenu.classList.remove('visible');
    }
};



