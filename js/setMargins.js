$(document).ready(function(){
    movePostsFromPile($(window).width(), 768, "#center");
    setMarginOfYears($(".year"),60);
});
window.onresize = function screenResize(){
    if(screenResize.oldWidth =='undefined')
        screenResize.oldWidth = $(window).width();
    var atualWidth = $(window).width();
    console.log(atualWidth+" "+screenResize.oldWidth);
    if(atualWidth>768 && screenResize.oldWidth<768)
        movePostsFromPile($(window).width(), 768, "#center");
    if(atualWidth<768 && screenResize.oldWidth>768)
        movePostsFromPile($(window).width(), 768, "#center");
    screenResize.oldWidth = atualWidth;
    setMarginOfYears($(".year"),60);
};
function setMarginOfYears(years, minDistance){
    return years.each(function(index, year){
        setMargin(postSort(resetMargin($(year).find(".post"))), minDistance);
    });
}
function setMargin(posts, minDistance){
    posts.each(function(index, post){
        if(posts.length <= index+1)
            return ;
        if(posts[index+1].offsetTop - post.offsetTop < minDistance){
            incPostMargin(posts[index+1], minDistance - (posts[index+1].offsetTop - post.offsetTop));
            posts = postSort(posts);
        }
   });
   return posts;
}
function incPostMargin(post, size){
    $(post).css("margin-top", function(index, value){
        return parseInt(value) + size; 
    });
    return post;
}
function postSort(posts){
    return  posts.sort(function(post, otherPost){
       return post.offsetTop > otherPost.offsetTop ? 1 : -1;
   });
}
function resetMargin(posts){
    posts.each(function(index, post){
        $(post).css("margin-top", 0);
    });
    return posts;
}