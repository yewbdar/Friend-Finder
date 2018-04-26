$(document).ready(function(){
        $("#submit").on("click", function (e) {
            e.preventDefault();
            var newUser = {
                name: "",
                photo: "",
                score: []
            }
            
            newUser.name = $("#name").val().trim();
            newUser.photo = $("#photo").val().trim();
            
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