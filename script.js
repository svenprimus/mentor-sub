const contentMainRef = document.getElementById('content-main');

function renderProfiles(onlyLiked) {
    renderProfileCards(onlyLiked);
    renderProfileAssets(onlyLiked);
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
        buttonRef.style.backgroundImage = 'url("./asset/icon/icon-favorite-active.svg")';
    }
}

function renderComments(indexMentor) {
    const commentTableRef = document.getElementById('comments-table-' + indexMentor);
    commentTableRef.innerHTML = '';

    for (let indexComment = 0; indexComment < mentors[indexMentor].comments.length; indexComment++) {
        commentTableRef.innerHTML += getCommentRow(indexMentor, indexComment);
    }
}
