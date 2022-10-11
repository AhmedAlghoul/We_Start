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

console.log(scope);
console.log(contextMenu);
