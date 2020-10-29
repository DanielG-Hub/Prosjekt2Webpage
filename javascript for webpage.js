<script>

var imageSources = ["red_light.jpg", "red_and_yellow_light.jpg", "yellow_light.jpg", "green_light.jpg"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("image").src = imageSources[index];
  index++;
} , 2000);

</script>