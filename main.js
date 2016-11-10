var posts = [];

var postPost = function(text){

  var lastPosition = posts.length - 1;
  var post = {
    id: 0,
    text: text
  }

  if (posts.length === 0) {
    post.id = 1;
  } else {
    post.id = posts[lastPosition].id + 1; 
  }
  posts.push(post);
};

var updatePost = function(){

  $(".posts").empty();
  for (var i = 0; i < posts.length; i++) {
    $(".posts").append("<p " + "data-id='" + posts[i].id + "'>" + posts[i].text + "   " + '<a href="#" class="remove" >remove</a>' + "</p>")
  }

  $(".remove").on("click", function(){
     var id = $(this).closest("P").data().id;
     removePost(id);
  });
};


var removePost = function(id){
  for (var i = 0; i < posts.length; i++) {
    if (id === posts[i].id) {
      posts.splice(i,1);
    }
  }
  updatePost();
}

$("#btn-p").click(function(){
  var text = $(".form-control").val();
  postPost(text);
  updatePost();
})
