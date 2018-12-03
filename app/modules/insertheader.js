const HEADER =  document.querySelector('.header');

const insertHeader = function() {
    let headerHtml = `
            <div class="wrapper">
                <div class="form-container">
                    <form class="form">
                        <input type="text" placeholder="abc-news, bbc-news" class="theme-input">
                        <button class="search-button fas fa-search" type="submit"></button>
                    </form>
                    <div class="error-notification"></div>
                </div>
            </div>`;

    HEADER.innerHTML = headerHtml;
}

export default insertHeader();

