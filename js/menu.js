


/**
 * Lance la première vidéo
 */
var videoDebut = document.getElementById('myVideo1');
videoDebut.addEventListener('ended', function(){
    console.log("fini");
    var video = document.getElementById('myVideo2');
    video.hidden = false;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    document.getElementById('idContent').hidden = false;

  });

/**
 * Lance la 2e vidéo
 */
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

    localStorage.clear();
});

/**
 * Lance la 3é video
 */
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
    window.location.replace("./niveaux.html");
})