const videos = document.getElementsByClassName("video-mixin");
const videoPlayer = document.getElementById("videoContainer");
const videoFrame = document.getElementsByClassName("video_frame");
const sizeBtn = document.getElementById("sizeBtn");

// iframe url 가져오는 api 호출
const play = async (videoId) => {
    console.log('play')
    const response = await fetch(`/videos/${videoId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    if (response.status === 200) {
        const { link } = await response.json()
        //console.log('link=' + link)
        videoPlayer.firstChild.innerHTML = link
        videoFrame[0].firstChild.src = videoFrame[0].firstChild.src + "?autoplay=1&mute=1"
        videoFrame[0].style.visibility = "visible";
        sizeBtn.style.visibility = "visible";
    }
}

// '원래크기로' 버튼 누르면 기존 사이즈로 iframe 변경
const makeVideoFrameOriginSize = () => {
    videoFrame[0].style.width = "450px"
    videoFrame[0].style.height = "300px"
}

// iframe resize 용 작업
$('.video_frame iframe').ready(function () {
    // $(".video_frame iframe").draggable();
    $(".video_frame").resizable({
        alsoResize: 'iframe',
        //aspectRatio: true,
        minHeight: 200,
        minWidth: 300,
        // start: function (event, ui) {
        //     $('.video_frame iframe').css('pointer-events', 'none');
        // },
        // stop: function (event, ui) {
        //     $('.video_frameiframe').css('pointer-events', 'auto');
        // }
    });
});


// 유튜브 썸네일 클릭 시 iframe 불러오는 play() 함수 클릭 이벤트로 등록
for (var i = 0; i < videos.length; i++) {
    videos[i].addEventListener("click", (event) => {
        console.log(event.currentTarget)
        console.log(event.currentTarget.firstChild);
        play(event.currentTarget.firstChild.value)
    })
}

// 원래크기로 버튼 클릭 이벤트 등록
sizeBtn.addEventListener("click", makeVideoFrameOriginSize);