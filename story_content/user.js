function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GvHZCdVV3n":
        Script1();
        break;
      case "5mH6g5Ls7Vx":
        Script2();
        break;
      case "6NB3Az7HmqI":
        Script3();
        break;
      case "5xgasfALZuj":
        Script4();
        break;
      case "6GOQULLRcb2":
        Script5();
        break;
      case "6nnFTWUXAP7":
        Script6();
        break;
      case "6ljpslKP12w":
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

