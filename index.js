const getMenubtn = document.getElementsByClassName("js-get-menu-btn")
const getModal = document.getElementById("js-get-modal")
const getHeader = document.getElementById("js-get-header").style
const getBackGround = document.getElementById("js-get-background")
const isshow = document.getElementsByClassName("js-is-show")
let count = 2


// モーダルウィンドウの処理
for (i = 0; i < getMenubtn.length; i++) {
    getMenubtn[i].addEventListener("click", () => {
        getHeader.display === "none" ? getHeader.display = "flex" : getHeader.display = "none"
        getModal.classList.toggle('js-is-show')
    })
}


// スライドショーの処理
setInterval(() => {

    // windw幅を取得
    let windowWidth = window.innerWidth

    // !isshow.length = モーダルが表示されていたら処理停止
    // windw幅がスマホの処理
    if (!isshow.length && windowWidth >= 481) {

        getBackGround.animate([{ opacity: '0.6' }, { opacity: '1' }], 1500)
        getBackGround.style.backgroundImage = `linear-gradient(
            rgba(0, 0, 0, 0.30),
            rgba(0, 0, 0, 0.30)
        ),url(img/main-visual-pc${count}.png)`

        count === 6 ? count = 1 : count++

        // windw幅がスマホ以外の処理
    } else if (!isshow.length && windowWidth <= 481) {

        getBackGround.animate([{ opacity: '0.6' }, { opacity: '1' }], 1500)
        getBackGround.style.backgroundImage = `linear-gradient(
            rgba(0, 0, 0, 0.30),
            rgba(0, 0, 0, 0.30)
        ),url(img/main-visual-sp${count}.png)`

        count === 4 ? count = 1 : count++
    }

}, 10000);