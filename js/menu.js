


var videoDebut = document.getElementById('myVideo1');
//console.log(video);
videoDebut.addEventListener('ended', function(){
    console.log("fini");
    var video = document.getElementById('myVideo2');
    video.hidden = false;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    document.getElementById('idContent').hidden = false;

  });


document.getElementById("buttonJouer").addEventListener('click', function(){
    document.getElementById('idContent').hidden = true;
    var video2 = document.getElementById('myVideo2');
    video2.loop = false;
    video2.autoplay = false;
    video2.hidden = true;

    var video3 = document.getElementById('myVideo3');
    video3.hidden = false;
    video3.muted = true;
    video3.autoplay = true;
    //video3.loop = true;

    localStorage.clear();
});

document.getElementById("buttonCharger").addEventListener('click', function(){
    document.getElementById('idContent').hidden = true;
    var video2 = document.getElementById('myVideo2');
    video2.loop = false;
    video2.autoplay = false;
    video2.hidden = true;

    var video3 = document.getElementById('myVideo3');
    video3.hidden = false;
    video3.muted = true;
    video3.autoplay = true;



});

var video3 = document.getElementById('myVideo3');
video3.addEventListener('ended', function(){
    //window.open("../niveaux.html");
    window.location.replace("../niveaux.html");
})