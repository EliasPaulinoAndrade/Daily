function moreClick(){
    $("#postPile").find(".year").last().find(".postContainer").append(`<div class="post"> <div class="postTop pink"> <div class="postDay"> <div class="day"></div> <span>12/09</span> </div> <h1>Title</h1> </div> <div class="postBody"> <div class="postContent"> Caros amigos. </div> </div> <div class="postEditorOptions"> <ul> <li> <img src="img/erase.png"/> <span> Apagar</span> </li> <li> <img src="img/mark.png"/> <span> Marcar</span> </li> </ul> </div> </div>`)
    uploadDestiny();
}