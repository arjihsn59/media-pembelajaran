function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gMjtf4c9Lf":
        Script1();
        break;
      case "6dV32ayzqnn":
        Script2();
        break;
      case "6aKLGk8eN4D":
        Script3();
        break;
      case "5xUAmxfY9PF":
        Script4();
        break;
      case "6TfS9SCQdyk":
        Script5();
        break;
      case "5WdY4YLSZev":
        Script6();
        break;
      case "6DQrTLm9xQx":
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

