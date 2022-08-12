let menuActiveBtn = document.querySelector('.menuIcon')
let navbarCard = document.querySelector('.navbarCard')
let spanActive = document.querySelectorAll('span')

function menuBtn() {
    menuActiveBtn.classList.toggle('menuActive')
    navbarCard.classList.toggle('navbarActive')
    spanActive.forEach(
        function spanClassAdd(item) {
            item.classList.toggle('spanActive')
        }
    )
}