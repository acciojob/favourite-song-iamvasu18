//your code here
const song_name="Blinding Lights";
const song_url="https://www.youtube.com/watch?v=4NRXx6U8ABQ";
const div=document.getElementById("container");
const ele=document.createElement("p");
const song=document.createElement("a");

song.textContent=song_name;
song.href=song_url;

ele.textContent="My current favourite song is ";
ele.appendChild(song);

div.appendChild(ele);
