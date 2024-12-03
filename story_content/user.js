function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Y7nclAxTVd":
        Script1();
        break;
      case "6NgFcS75hLJ":
        Script2();
        break;
      case "6qfPx5ALO5I":
        Script3();
        break;
      case "6hE9u0bb3u3":
        Script4();
        break;
      case "6D3t8dVi64x":
        Script5();
        break;
      case "6ZnFXR1IOc6":
        Script6();
        break;
      case "6OM23MsRhFl":
        Script7();
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

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 1.0;
}

