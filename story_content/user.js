function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ClnXGVBViz":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";

audio.load();

audio.play();

audio.volume=0.5;
}
