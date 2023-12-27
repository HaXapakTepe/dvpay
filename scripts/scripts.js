document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const langNow = document.querySelector('.header__lang-now')
  const langBtn = document.querySelector('.header__lang-btn')
  const langblock = document.querySelector('.header__lang-block')
  const accordion = document.querySelectorAll('.accordion')
  const tabs = document.querySelectorAll('.tab__target')
  const pages = document.querySelectorAll('.tab__info')

  const toggleMenu = () => {
    menu.classList.toggle('menu--active')
    burger.classList.toggle('burger--active')
    body.classList.toggle('no-scroll')
  }

  const clickOutsideMenu = (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      menu.classList.remove('menu--active')
      burger.classList.remove('burger--active')
      body.classList.remove('no-scroll')
    }
  }

  burger.addEventListener('click', toggleMenu)
  document.addEventListener('click', clickOutsideMenu)

  langBtn?.addEventListener('click', () => {
    const text = langNow.textContent
    langNow.textContent = langBtn.textContent
    langBtn.textContent = text

    console.log(langNow.textContent.trim())
    console.log(langNow.textContent.trim() != 'Ru')

    if (langNow.textContent.trim() != 'Ru') {
      langblock.classList.add('header__lang-block--other')
    } else {
      langblock.classList.remove('header__lang-block--other')
    }
  })

  accordion?.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()
      const content = acc.querySelector('.accordion__content')
      if (acc.classList.contains('accordion--active')) {
        acc.classList.remove('accordion--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  tabs?.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.remove('tab__target--active'))
      pages.forEach((page) => {
        page.classList.remove('tab__info--active')
        setTimeout(() => {
          page.classList.remove('tab__info--opacity')
        }, 380)
      })

      tab.classList.add('tab__target--active')
      pages[idx].classList.add('tab__info--active')

      setTimeout(() => {
        pages[idx].classList.add('tab__info--opacity')
      }, 380)
    })
  })
})
