function addDialog() {
    return /*html*/ `
        <dialog id="pictureDialog" onclick="closeDialog()" aria-labelledby="dialogTitle"></dialog>
    `;
}
function getDialogContent(index, label) {
    return /*html*/ `
        <section aria-description="dialog window for bigger view of image" class="dialog-content-wrapper" 
            onclick="stopDialogPropagation(event)">
            ${getModalHeadWrapper(label)}
            ${getModalPictureWrapper(index)}
            ${getModalBlurbWrapper(index)}
            ${getModalNavigationWrapper(index)}
        </section>
    `;
}

function getModalHeadWrapper(label) {
    return /*html*/ `
        <header id="modalHead" class="modal-head-close">
            ${getModalHeadContent(label)}
        </header>
    `;
}

function getModalHeadContent(label) {
    return /*html*/ `
        <button id="dialogClose" class="close-button" 
            aria-controls="pictureDialog" aria-label="close dialog" 
            onclick="closeDialog()">
        </button>
        <h2 id="dialogTitle">${label}</h2>
    `;
}

function getModalBlurbWrapper(index) {
    return /*html*/ `
        <section id="dialogBlurb" class="dialog-blurb-wrapper">
            ${getModalBlurbContent(index)}
        </section>
    `;
}

function getModalBlurbContent(index) {
    return /*html*/ `
        <p class="dialog-blurb">${mentors[index].blurb}</p>
    `;
}

function getModalPictureWrapper(index) {
    return /*html*/ `
        <section id="dialogPicture" class="dialog-picture-wrapper">
            ${getModalPictureContent(index)}
        </section>
    `;
}

function getModalPictureContent(index) {
    return /*html*/ `
        <img class="dialog-picture" src=${mentors[index].image} alt="${mentors[index].alt}"/>
    `;
}

function getModalNavigationWrapper(index) {
    return /*html*/ `
        <nav id="modalNav" class="modal-nav">
            ${getModalNavigationContent(index)}
        </nav>      
    `;
}

function getModalNavigationContent(index) {
    return /*html*/ `
        <button id="dialogPrevious" class="arrow-button-left" tabindex="0"
            aria-controls="dialogPicture" aria-label="previous picture" aria-describedby="current image index"
            onclick="renderPreviousImage(${index})">
            <div aria-hidden="true"></div>
        </button>
        <p aria-label="current image index">${index + 1} / ${mentors.length}</p>
        <button id="dialogNext" class="arrow-button-right" tabindex="0"
            aria-controls="dialogPicture" aria-label="next picture" aria-describedby="current image index"
            onclick="renderNextImage(${index})">
            <div aria-hidden="true"></div>
        </button>
    `;
}
