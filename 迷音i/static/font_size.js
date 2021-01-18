function setRem() {
    var uiw = 750;
    var winw = document.documentElement.clientWidth || document.body.clientWidth;

    document.documentElement.style.fontSize = (winw / uiw) * 100 + 'px';
}
setRem();
window.onresize = setRem;