const scroll = {
  isEnd: false,
  start(callback) {
    console.log(1)
    let timer = null
    callback && window.addEventListener('scroll', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        console.log('settimeout')
        const scroolTop = document.documentElement.scrollTop
        const scroolHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        if (!this.isEnd && scroolHeight === scroolTop + clientHeight) {
          window.scrollTo(0, scroolTop - 100)
          callback()
        }
      }, 300)
    })
  },
  end() {
    console.log('end')
    this.isEnd = true
  }
}

export default scroll
