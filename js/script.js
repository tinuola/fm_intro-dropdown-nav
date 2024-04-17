const dropdown = document.querySelectorAll('.dropdown')

const setImage = () => {}

dropdown.forEach((menu) => {
  menu.addEventListener('click', function (e) {
    // console.log(e)
    // console.log(menu.style)
    menu.lastElementChild.classList.toggle('hide-menu')
    menu.lastElementChild.classList.toggle('show-menu')

    menu.firstElementChild.firstElementChild.setAttribute(
      'src',
      '../assets/images/icon-arrow-up.svg'
    )
  })
})
