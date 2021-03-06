
//1. Create an HTML page that displays an ordered list of tracks to the webpage using Document Object Model API.
let playList = [
     {
          author: "LED ZEPPELIN",
          song: "STAIRWAY TO HEAVEN"
     },
     {
          author: "QUEEN",
          song: "BOHEMIAN RHAPSODY"
     },
     {
          author: "LYNYRD SKYNYRD",
          song: "FREE BIRD"
     },
     {
          author: "DEEP PURPLE",
          song: "SMOKE ON THE WATER"
     },
     {
          author: "JIMI HENDRIX",
          song: "ALL ALONG THE WATCHTOWER"
     },
     {
          author: "AC/DC",
          song: "BACK IN BLACK"
     },
     {
          author: "QUEEN",
          song: "WE WILL ROCK YOU"
     },
     {
          author: "METALLICA",
          song: "ENTER SANDMAN"
     }
];

let playListDisplay = playList.map(function (tracks) {
     return `<li>${tracks.author}: ${tracks.song} </li>`
}).join(' ');

document.getElementById("tracks").innerHTML = playListDisplay;








