function showNavbar (hamburguerId, navId) {
  const hamburguer = document.getElementById(hamburguerId)
  const nav = document.getElementById(navId)

  if (hamburguer && nav) {
    hamburguer.addEventListener('click', () => {
      nav.classList.toggle('navshow')
    })
  }
}

function closedNavbar (menuListClass, navId) {
  const menuLink0 = document.getElementsByClassName(menuListClass)[0]
  const menuLink1 = document.getElementsByClassName(menuListClass)[1]
  const menuLink2 = document.getElementsByClassName(menuListClass)[2]
  const menuLink3 = document.getElementsByClassName(menuListClass)[3]
  const menuLink4 = document.getElementsByClassName(menuListClass)[4]
  const nav = document.getElementById(navId)
  if (menuLink0 && nav) {
    menuLink0.addEventListener('click', () => {
      nav.classList.remove('navshow')
      menuLink0.children[0].classList.toggle('link--actived')
      menuLink1.children[0].classList.remove('link--actived')
      menuLink2.children[0].classList.remove('link--actived')
      menuLink3.children[0].classList.remove('link--actived')
      menuLink4.children[0].classList.remove('link--actived')
    })
    menuLink1.addEventListener('click', () => {
      nav.classList.remove('navshow')
      menuLink0.children[0].classList.remove('link--actived')
      menuLink1.children[0].classList.toggle('link--actived')
      menuLink2.children[0].classList.remove('link--actived')
      menuLink3.children[0].classList.remove('link--actived')
      menuLink4.children[0].classList.remove('link--actived')
    })
    menuLink2.addEventListener('click', () => {
      nav.classList.remove('navshow')
      menuLink0.children[0].classList.remove('link--actived')
      menuLink1.children[0].classList.remove('link--actived')
      menuLink2.children[0].classList.toggle('link--actived')
      menuLink3.children[0].classList.remove('link--actived')
      menuLink4.children[0].classList.remove('link--actived')
    })
    menuLink3.addEventListener('click', () => {
      nav.classList.remove('navshow')
      menuLink0.children[0].classList.remove('link--actived')
      menuLink1.children[0].classList.remove('link--actived')
      menuLink2.children[0].classList.remove('link--actived')
      menuLink3.children[0].classList.toggle('link--actived')
      menuLink4.children[0].classList.remove('link--actived')
    })
    menuLink4.addEventListener('click', () => {
      nav.classList.remove('navshow')
      menuLink0.children[0].classList.remove('link--actived')
      menuLink1.children[0].classList.remove('link--actived')
      menuLink2.children[0].classList.remove('link--actived')
      menuLink3.children[0].classList.remove('link--actived')
      menuLink4.children[0].classList.toggle('link--actived')
    })
  }
}

showNavbar('hamburger', 'nav')
closedNavbar('menu--list', 'nav')
