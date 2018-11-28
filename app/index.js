const lazyLoadingButton = document.querySelector('.lazy-loading-button');

lazyLoadingButton.addEventListener('click', loadBundle);

function loadBundle() {
    import('./modules/insertheader.js').then(() => {
        import('../build/build.js');
    });
}