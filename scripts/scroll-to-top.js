const backToTopButton = document.querySelector('#back-to-top')

const backToTop = () => {
  if (window.scrollY >= 800) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
})