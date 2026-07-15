const contentMainRef = document.getElementById('content-main');
let userName = 'Guest';

function initPage(onlyLiked) {
    getMentorsFromLocalStorage();
    getUserFromLocalStorage();
    renderProfiles(onlyLiked);
}

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
        renderLikedCount(index);
        saveMentorsToLocalStorage();
    }
}

function renderLikedCount(index) {
    if (mentors[index] !== undefined && mentors[index].likes > 0) {
        mentors[index].likes += mentors[index].liked ? 1 : -1;
        document.getElementById('liked-count-' + index).innerHTML = /*html*/`
            ${mentors[index].likes}
        `
    }
}

function setCommentByEnter(index) {
    if (event.key === 'Enter') {
        setComment(index);
    }
}

function setComment(index) {
    if (mentors[index] !== undefined) {
        const inputValueRef = document.getElementById('comments-input-' + index);
        if (inputValueRef.value) {
            mentors[index].comments.push({ name: userName, comment: inputValueRef.value });
            inputValueRef.value = '';
            renderComments(index);
            saveMentorsToLocalStorage();
        }
    }
}

function login(fromLocalStorage) {
    const inputUserName = document.getElementById('inputUserLogin').value;
    if (inputUserName && !fromLocalStorage) {
        userName = inputUserName;
    }
    document.getElementById('userNameText').innerHTML = userName;
    const userLoginFieldRef = (document.getElementById('userLoginField').style.display = 'none');
    const userLogoutFieldRef = (document.getElementById('userLogoutField').style.display = 'flex');
    saveUserToLocalStorage();
}

function logout() {
    userName = 'Guest';
    document.getElementById('inputUserLogin').value = 'Guest';
    const userLoginFieldRef = (document.getElementById('userLoginField').style.display = 'flex');
    const userLogoutFieldRef = (document.getElementById('userLogoutField').style.display = 'none');
    localStorage.removeItem('userName');
}

function saveMentorsToLocalStorage() {
    localStorage.setItem('mentors', JSON.stringify(mentors));
}

function getMentorsFromLocalStorage() {
    const storageMentors = JSON.parse(localStorage.getItem('mentors'));
    if (storageMentors != null) {
        mentors = storageMentors;
    }
}

function saveUserToLocalStorage() {
    localStorage.setItem('userName', JSON.stringify(userName));
}

function getUserFromLocalStorage() {
    const storageUserName = JSON.parse(localStorage.getItem('userName'));
    if (storageUserName != null) {
        userName = storageUserName;
        login(true);
    }
}
