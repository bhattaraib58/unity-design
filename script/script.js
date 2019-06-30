//menu toogle
let menuToogle='none';
//toogle menu with click on ham burger menu 
document.getElementById('nav-bar-toggler').addEventListener("click",()=>{
  let menuBar=document.getElementById('main-nav');
  if(menuToogle ==='none')
  {
    menuBar.style.display = "block";  
    menuToogle='block';
  }
  else if(menuToogle ==='block')
  {
    menuBar.style.display = "none";  
    menuToogle='none';
  }
});

//services caraousel
const servicesCaraousel=new Caraousel('services-content',0,'services-button-indicators','active',false,false);

//products caraousel
const productsCaraousel=new Caraousel('product',0,'arrows',null,true,false);

//products caraousel
const userTestomonialCaraousel=new Caraousel('user-review',0,'slider','current-index',true,true);


//clients caraousel
const clientsTestomonialCaraousel=new Caraousel('client-reviews',0,'clients','active',false,false);

let category=[
'*',
'web_design',
'mobile',
'photography'
];

let categorySelection=new CategoryFilter(category,'active');

// as the video size and width cant be defined by css we must use inline height and width
// or use js for resizing
changeVideoSize();

// // add event listner in window for resizing of window
window.addEventListener("resize", changeVideoSize, { passive: true });

function changeVideoSize()
{
  //we also have to set height and width for parent element as the video content is 
  // absolute on top of container so conatiner cant get its child's height and width
  let windowWidth=window.innerWidth;

  var introVideo = document.getElementById("introVideo");
  if(windowWidth>0)
  {
    introVideo.width=MOBILE_VIDEO_WIDTH;
    introVideo.height=MOBILE_VIDEO_HEIGHT;

    introVideo.parentElement.style.width=MOBILE_VIDEO_WIDTH+'px';
    introVideo.parentElement.style.height=MOBILE_VIDEO_HEIGHT+'px';
    introVideo.parentElement.parentElement.style.height=(MOBILE_VIDEO_HEIGHT-10)+'px';
  }

  if(windowWidth>768)
  {
    introVideo.width=TABLET_VIDEO_WIDTH;
    introVideo.height=TABLET_VIDEO_HEIGHT;

    introVideo.parentElement.style.width=TABLET_VIDEO_WIDTH+'px';
    introVideo.parentElement.style.height=TABLET_VIDEO_HEIGHT+'px';
    introVideo.parentElement.parentElement.style.height=(TABLET_VIDEO_HEIGHT-20)+'px';
  }

  if(windowWidth>992)
  {
    introVideo.width=SMALL_DESKTOP_VIDEO_WIDTH;
    introVideo.height=SMALL_DESKTOP_VIDEO_HEIGHT;

    introVideo.parentElement.style.width=SMALL_DESKTOP_VIDEO_WIDTH+'px';
    introVideo.parentElement.style.height=SMALL_DESKTOP_VIDEO_HEIGHT+'px';
    introVideo.parentElement.parentElement.style.height=(SMALL_DESKTOP_VIDEO_HEIGHT-30)+'px';
  }

  if(windowWidth>1200)
  {
    introVideo.width=LARGE_DESKTOP_VIDEO_WIDTH;
    introVideo.height=LARGE_DESKTOP_VIDEO_HEIGHT;

    introVideo.parentElement.style.width=LARGE_DESKTOP_VIDEO_WIDTH+'px';
    introVideo.parentElement.style.height=LARGE_DESKTOP_VIDEO_HEIGHT+'px';
    introVideo.parentElement.parentElement.style.height=(LARGE_DESKTOP_VIDEO_HEIGHT-50)+'px';
  }
}

function playPauseIntroVideo() {
  var introVideo = document.getElementById("introVideo");
  var pausePlayIcon = document.getElementById("pausePlayIcon");
  if (introVideo.paused) {
      pausePlayIcon.src = "images/intro/music-player-pause.svg";
      introVideo.play();
  }
  else {
      pausePlayIcon.src = "images/intro/music-player-play.svg";
      introVideo.pause();
  }
}
