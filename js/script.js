const renderIcons = (arr, targetElement) => {
    let iconsTemplate = "";
    arr.forEach((icon, i) => {
        let hasOffset = i % 5 == 0 ? "offset-md-1" : "";
        iconsTemplate += `
        <div class="col-12 col-sm-4 col-md-2 ${hasOffset}">
            <div class="card h-100 ms-card justify-content-center">
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

const selectField = document.getElementById("type-filter");
const search = document.getElementById("search"); 
const button = document.getElementById("button-addon2");

//Funzione search
const searchItem = (arr, targetElement) => {search.addEventListener("input", () => {
    const searchValue = search.value; 
    const inputItem = arr.filter((icon) => icon.name.includes(searchValue));
    renderIcons(inputItem, targetElement);   
})}; 

//Filtro
selectField.addEventListener("change", () => {
    const filterValue = selectField.value;

    if (filterValue === "all") {
        renderIcons(icons, iconsSection);
        searchItem(icons, iconsSection);
        return;
    } 

    const filteredIcons = icons.filter((icon) => filterValue === icon.type);
    renderIcons(filteredIcons, iconsSection);
    searchItem(filteredIcons, iconsSection);  
});

searchItem(icons, iconsSection);

//Button reset
button.addEventListener("click", () => {
    search.value = "";
    selectField.value = "all";
    renderIcons(icons, iconsSection);
    searchItem(icons, iconsSection);
});

//Render options
const renderOptions = (arr, targetElement) => {
    const options = [];
    arr.forEach((item) => {
        if (!options.includes(item.type)) {
            options.push(item.type);
        };      
    });
    
    let optionTypes = `<option selected value="all">ALL</option>`;
    options.forEach((option) => {
        optionTypes += `<option value="${option}">${option.toUpperCase()}</option>`;
    });
    
    targetElement.innerHTML = optionTypes;
};

renderOptions(icons, selectField);







