const videos = document.getElementsByClassName("video-mixin");
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")

var currentIndex = 0;

const showPage = () => {
    console.log(currentIndex)
    console.log(videos)
    for (let index = 0; index < videos.length; index++) {
        if (index >= currentIndex && index < currentIndex + 4)
            videos[index].style.display = "block"
        else
            videos[index].style.display = "none"
    }
}

const prevPage = () => {
    nextBtn.children[0].style.color = "white"

    if (currentIndex == 0) return;
    else if (currentIndex == 1) prevBtn.children[0].style.color = "gray"
    else prevBtn.style.color = "white"

    currentIndex--;
    showPage()
}

const nextPage = () => {
    prevBtn.children[0].style.color = "white"

    if (currentIndex == 16) return;
    else if (currentIndex == 15) nextBtn.children[0].style.color = "gray"
    else nextBtn.style.color = "white"

    currentIndex++;
    showPage();
}

const init = () => {
    showPage()
    prevBtn.children[0].style.color = "gray"
}

init();

prevBtn.addEventListener("click", prevPage)
nextBtn.addEventListener("click", nextPage)