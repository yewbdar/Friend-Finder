
$(document).ready(function(){
    
        $("#submit").on("click", function (e) {
            e.preventDefault();
            var newUser = {
                name: "",
                photo: "",
                score: []
            }

            if($("#name").val().trim() === ""){
                 alert("please insert your name ")}
                 else{ newUser.name = $("#name").val().trim()}

            if($("#photo").val().trim() === ""){
                 alert("please insert your photo link ")}
                 else{ newUser.name = $("#photo").val().trim()}


            for (var i = 1; i < 11; i++) {
                
                var choice = $("#question" + i).val();
                (choice!=="Select an Option ...") ? newUser.score.push(parseInt(choice)) : newUser.score.push(3)

            }
           $.post("api/friends",newUser,function(data){
               $("#name").text(data.name);
               $("#image").attr('src',data.photo);
               $(".modal").modal('show');

            })
    });
 });