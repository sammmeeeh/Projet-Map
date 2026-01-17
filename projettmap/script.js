const tooltip = document.getElementById("tooltip");

document.querySelectorAll("area").forEach(area => {

    area.addEventListener("mouseenter", () => {
        tooltip.textContent = area.dataset.name;
        tooltip.style.display = "block";
    });

    area.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 12 + "px";
        tooltip.style.top = e.pageY + 12 + "px";
    });

    area.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });

});
