const renderIcons = (arr, targetElement) => {
    let iconsTemplate = "";
    icons.forEach((icon, i) => {
        let hasOffset = i % 5 == 0 ? "offset-md-1" : "";
        iconsTemplate += `
        <div class="col col-sm-4 col-md-2 ${hasOffset}">
            <div class="card">
                <div class="card-body"><i class="${icon.family} ${icon.prefix}${icon.name} ${icon.type} fa-2x"></i>
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
