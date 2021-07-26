const renderIcons = (arr, targetElement) => {
    let iconsTemplate = "";
    arr.forEach((icon, i) => {
        let hasOffset = i % 5 == 0 ? "offset-md-1" : "";
        iconsTemplate += `
        <div class="col-12 col-sm-4 col-md-2 ${hasOffset}">
            <div class="card ms-card justify-content-center">
                <div class="card-body"><i class="${icon.family} ${icon.prefix}${icon.name} fa-2x ${icon.type}"></i>
                    <h6>${icon.name.toUpperCase()}</h6>
                </div>
            </div>
        </div>
        `
    });
    targetElement.innerHTML = iconsTemplate;
};

const iconsSection = document.querySelector("#icons .row");
renderIcons(icons, iconsSection);

//Filtro
const selectField = document.getElementById("type-filter");

selectField.addEventListener("change", () => {
    const filterValue = selectField.value;
    console.log(filterValue);
    if (filterValue === "all") {
        renderIcons(icons, iconsSection);
        return;
    } 

    const filteredIcons = icons.filter((icon) => filterValue === icon.type);
    renderIcons(filteredIcons, iconsSection);
});







