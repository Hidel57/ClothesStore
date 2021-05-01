export default function showNavbar (hamburguerId, navId) {
  const hamburguer = document.getElementById(hamburguerId)
  const nav = document.getElementById(navId)
  if (hamburguer && nav) {
    hamburguer.addEventListener('click', () => {
      nav.classList.toggle('navshow')
    })
  }
}
