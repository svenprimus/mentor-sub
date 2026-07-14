const contentMainRef = document.getElementById('content-main');

function renderProfiles(onlyLiked) {
    renderProfileCards(onlyLiked);
    renderProfileAssets(onlyLiked);
    contentMainRef.innerHTML += addDialog();
}

function renderProfileCards(onlyLiked) {
    contentMainRef.innerHTML = '';
    for (let i = 0; i < mentors.length; i++) {
        if (!onlyLiked || mentors[i].liked) {
            contentMainRef.innerHTML += getProfile(i);
        }
    }
}

function renderProfileAssets(onlyLiked) {
    for (let i = 0; i < mentors.length; i++) {
        if (!onlyLiked || mentors[i].liked) {
            renderLikedButton(i);
            renderComments(i);
        }
    }
}

function renderLikedButton(index) {
    const buttonRef = document.getElementById('button-favorite-' + index);
    if (mentors[index].liked) {
        buttonRef.classList.add("button-favorite-liked");
        buttonRef.classList.remove("button-favorite-default");
    } else {
        buttonRef.classList.add("button-favorite-default");
        buttonRef.classList.remove("button-favorite-liked");
    }

}

function renderComments(indexMentor) {
    const commentTableRef = document.getElementById('comments-table-' + indexMentor);
    commentTableRef.innerHTML = '';

    for (let indexComment = 0; indexComment < mentors[indexMentor].comments.length; indexComment++) {
        commentTableRef.innerHTML += getCommentRow(indexMentor, indexComment);
    }
}

function toggleLiked(index) {
    const buttonClasses = document.getElementById('button-favorite-' + index).classList;
    if (mentors[index] !== undefined) {
        if(buttonClasses.contains('button-favorite-liked')) {
            mentors[index].liked = false;
        } else if (buttonClasses.contains('button-favorite-default')) {
            mentors[index].liked = true;
        }
    }
    renderLikedButton(index);
}

function setComment(index) {
    // TODO
}

// TODO
// Preis zwei nachkommastellen
// header sticky?
