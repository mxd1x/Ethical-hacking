document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    var videoFile = document.getElementById('video').files[0];
    if (videoFile) {
      var videoPlayer = document.createElement('video');
      videoPlayer.src = URL.createObjectURL(videoFile);
      videoPlayer.controls = true;
      videoPlayer.autoplay = true;
      
      document.getElementById('video-player').appendChild(videoPlayer);
    }
  });
  