document.addEventListener("DOMContentLoaded",function(){
    const audioPlayer=document.getElementById("audioplayer");
    const playlist=document.getElementById("playlist");

    // here we place list of music files..
    const musicFiles=[
        'cool.mp3',
        'lights.mp3',
        'thug.mp3',
        'onon.mp3'
    ];

    musicFiles.forEach((file,index)=>{
        const listitem=document.createElement("li");
        listitem.textContent=`Song ${index +1}`;
        listitem.addEventListener('click',()=>playSong(file));
        playlist.appendChild(listitem);
    });

    //Function to play selected song
    function playSong(file){
        audioPlayer.src=file;
        audioPlayer.play();

    }
});