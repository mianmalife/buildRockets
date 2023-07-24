class SwiperSix {
  constructor(direction, loop, data) {
    this.direction = direction
    this.loop = loop
    this.data = data
  }

  initDom() {
    const swiperContent = document.createElement('div')
    swiperContent.className = 'swiper'
    const swiperWrapper = document.createElement('div')
    swiperWrapper.className = 'swiper-wrapper'

    const swiperPagination = document.createElement('div')
    swiperPagination.className = 'swiper-pagination'

    const btnPre = document.createElement('div')
    btnPre.className = 'swiper-button-prev'

    const btnNext = document.createElement('div')
    btnNext.className = 'swiper-button-next'

    swiperContent.appendChild(swiperWrapper)
    swiperContent.appendChild(swiperPagination)
    swiperContent.appendChild(btnPre)
    swiperContent.appendChild(btnNext)

    const fragment = document.createDocumentFragment()
    this.data = this.data || []
    this.data.forEach((item) => {
      const mydiv = document.createElement('div')
      mydiv.className = 'swiper-slide'
      const myimg = document.createElement('img')
      myimg.src = item.src
      myimg.style.width = '100%'
      myimg.style.height = '100%'
      myimg.style.objectFit = 'contain'
      mydiv.appendChild(myimg)
      fragment.appendChild(mydiv)
    })
    swiperWrapper.appendChild(fragment)
    return { doc: swiperContent }
  }
  initSwiper(container) {
    this.swiper = new Swiper(container, {
      // Optional parameters
      direction: this.direction,
      loop: this.loop,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    return { inst: this.swiper }
  }
}
