const target = document.querySelectorAll('#container')
for(let i = 0; i < 256; i++) {
    target.innerHTML = "<div style='border:2px solid black; width:25px; height:25px;></div>"
}