const dropdown = document.querySelectorAll('.dropdown')

dropdown.forEach((menu) => {
  menu.addEventListener('click', function (e) {
    // console.log(e)
    // console.log(menu.style)

    const dropdownIcon = menu.querySelectorAll('.dropdown-icon')

    dropdownIcon.forEach((icon) => {
      icon.classList.toggle('hide-menu')
    })

    menu.lastElementChild.classList.toggle('hide-menu')
    menu.lastElementChild.classList.toggle('show-menu')
  })
})

// const nav
