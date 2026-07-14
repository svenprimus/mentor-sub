function getProfile(index) {
    return /*html*/ `
        <article id="profile-card-${index}" class="profile-card">
            <div class="profile-card-content">
                <h2>${mentors[index].name}</h2>
            </div>
            <hr />
            ${getProfileContent(index)}
        </article>
    `;
}

function getProfileContent(index) {
    return /*html*/ `
        ${getSectionPicture(index)}
        <hr />
        ${getSectionPricingDetails(index)}
        <hr />
        ${getSectionBlurb(index)}
        <hr />
        ${getSectionComments(index)}
    `;
}
function getSectionPicture(index) {
    return /*html*/ `
        <div class="profile-card-content">
            <img
                aria-haspopup="dialog"
                aria-controls="pictureDialog"
                onclick="openDialog(${index})"
                class="profile-picture"
                src="${mentors[index].image}"
                alt="${mentors[index].alt}"
                tabindex="0"
            />
        </div>
    `;
}

function getSectionPricingDetails(index) {
    return /*html*/ `
        <section class="profile-card-content">
            <section class="section-pricing">
                ${getPricingAndLikes(index)}
            </section>
            <section class="section-details">
                ${getDetailsTable(index)}
            </section>
        </section>
    `;
}

function getPricingAndLikes(index) {
    return /*html*/ `
        <p>${mentors[index].price.toFixed(2)} €</p>
        <div>
            <p>${mentors[index].likes}</p>
            <button id="button-favorite-${index}" class="button-favorite" onclick="toggleLiked(${index})"
                aria-description="add mentor to favorites">
            </button>
        </div>
    `;
}

function getDetailsTable(index) {
    return /*html*/ `
        <table>
            <tr>
                <th>Saga</th>
                <td>: <span title="${mentors[index].saga}">${mentors[index].saga}</span></td>
            </tr>
            <tr>
                <th>Published</th>
                <td>: ${mentors[index].publishedYear}</td>
            </tr>
            <tr>
                <th>Genre</th>
                <td>: ${mentors[index].genre}</td>
            </tr>
        </table>
    `;
}

function getSectionBlurb(index) {
    return /*html*/ `
        <section class="section-blurb profile-card-content">
            <p aria-haspopup="dialog" aria-controls="pictureDialog" onclick="openDialog(${index})" tabindex="0">
                ${mentors[index].blurb}
            </p>
        </section>
    `;
}

function getSectionComments(index) {
    return /*html*/ `
        <section class="section-comments profile-card-content">
            <h3>Comments</h3>
            <div id="section-comments-table-${index}" class="section-comments-table">
                <table id="comments-table-${index}"></table>
            </div>
            <div class="section-comments-input">
                <input id="comments-input-${index}" type="text" name="new-comment" 
                aria-labelledby="button-send-${index}"/>
                <button id="button-send-${index}" class="button-send" onclick="setComment(${index})" 
                aria-label="send comment" aria-description="send comment" aria-controls="comments-table-${index}">
            </button>
            </div>
        </section>
    `;
}

function getCommentRow(indexMentor, indexComment) {
    return /*html*/ `
        <tr>
            <th>${mentors[indexMentor].comments[indexComment].name}</th>
            <td>: ${mentors[indexMentor].comments[indexComment].comment}</td>
        </tr>
    `;
}
