let debounceDialog = false;

function openDialog(index) {
    const dialogRef = document.getElementById('pictureDialog');
    dialogRef.innerHTML = getDialogContent(index, mentors[index].name);
    dialogRef.showModal();
    setDialogFocusOnTop();
    dialogRef.classList.add('opened');
}

function openDialogByEnter(index) {
    if (event.key === 'Enter') {
        if (false === debounceDialog) {
            openDialog(index);
        } else {
            debounceDialog = false;
        }
    }
}

function closeDialog() {
    const dialogRef = document.getElementById('pictureDialog');
    dialogRef.classList.remove('opened');
    dialogRef.close();
}

function closeDialogbyEnter() {
    closeDialog();
    debounceDialog = true;
}

function renderNextImage(currentImageIndex) {
    const next = (currentImageIndex + 1) % mentors.length;
    renderModalContent(next);
    setDialogFocusOnNext();
}

function renderPreviousImage(currentImageIndex) {
    const previous = (currentImageIndex - 1 + mentors.length) % mentors.length;
    renderModalContent(previous);
    setDialogFocusOnPrevious();
}

function renderModalContent(currentImageIndex) {
    const modalHeadRef = document.getElementById('modalHead');
    modalHeadRef.innerHTML = getModalHeadContent(mentors[currentImageIndex].name);

    const dialogPictureRef = document.getElementById('dialogPicture');
    dialogPictureRef.innerHTML = getModalPictureContent(currentImageIndex);

    const dialogBlurbeRef = document.getElementById('dialogBlurb');
    dialogBlurbeRef.innerHTML = getModalBlurbContent(currentImageIndex);

    const modalNavRef = document.getElementById('modalNav');
    modalNavRef.innerHTML = getModalNavigationContent(currentImageIndex);
}

function setDialogFocusOnTop() {
    const dialogCloseRef = document.getElementById('dialogClose');
    dialogCloseRef.focus();
}

function setDialogFocusOnNext() {
    const dialogNextRef = document.getElementById('dialogNext');
    dialogNextRef.focus();
}

function setDialogFocusOnPrevious() {
    const dialogPreviousRef = document.getElementById('dialogPrevious');
    dialogPreviousRef.focus();
}

// make dialog clickable without closing it
function stopDialogPropagation(event) {
    event.stopPropagation();
}
