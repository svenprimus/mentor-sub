const contentMainRef = document.getElementById('content-main');
let userName = 'Guest';

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
        buttonRef.classList.add('button-favorite-liked');
        buttonRef.classList.remove('button-favorite-default');
    } else {
        buttonRef.classList.add('button-favorite-default');
        buttonRef.classList.remove('button-favorite-liked');
    }
}

function renderComments(indexMentor) {
    const commentTableRef = document.getElementById('comments-table-' + indexMentor);
    commentTableRef.innerHTML = '';

    for (let indexComment = 0; indexComment < mentors[indexMentor].comments.length; indexComment++) {
        commentTableRef.innerHTML += getCommentRow(indexMentor, indexComment);
    }
    const commentSectionRef = document.getElementById('section-comments-table-' + indexMentor);
    commentSectionRef.scrollTop = commentSectionRef.scrollHeight;
}

function toggleLiked(index) {
    if (mentors[index] !== undefined) {
        mentors[index].liked = !mentors[index].liked;
        renderLikedButton(index);
    }
}

function setComment(index) {
    if (mentors[index] !== undefined) {
        const inputValueRef = document.getElementById('comments-input-' + index);
        if (inputValueRef.value) {
            mentors[index].comments.push({ name: userName, comment: inputValueRef.value });
            inputValueRef.value = "";
            renderComments(index);
        }
    }
}

function login() {
    const inputUserName = document.getElementById('inputUserLogin').value;
    if (inputUserName) {
        userName = inputUserName;
        document.getElementById('userNameText').innerHTML = userName;
        const userLoginFieldRef = (document.getElementById('userLoginField').style.display = 'none');
        const userLogoutFieldRef = (document.getElementById('userLogoutField').style.display = 'flex');
    }
}

function logout() {
    userName = 'Guest';
    document.getElementById('inputUserLogin').value = 'Guest';
    const userLoginFieldRef = (document.getElementById('userLoginField').style.display = 'flex');
    const userLogoutFieldRef = (document.getElementById('userLogoutField').style.display = 'none');
}

// TODO
// local storage
// style.css aufspalten
