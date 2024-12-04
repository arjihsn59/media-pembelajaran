function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6TBaGPlqBcT":
        Script1();
        break;
      case "5yVDEDoerrb":
        Script2();
        break;
      case "5wT30i6Ku89":
        Script3();
        break;
      case "6LiICf3Cy74":
        Script4();
        break;
      case "6dx2MMdiiv4":
        Script5();
        break;
      case "61XmIf704SK":
        Script6();
        break;
      case "6MxOoZMU87v":
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

