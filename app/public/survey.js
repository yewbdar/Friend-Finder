$(document).ready(function(){
        $("#submit").on("click", function (e) {
            e.preventDefault();
            var newUser = {
                name: "",
                photo: "",
                score: []
            }
            
            user.name = $("#name").val().trim();
            user.photo = $("#photo").val().trim();
            
            for (var i = 1; i < 11; i++) {
                
                var choice = $("#question" + i).val();
                (choice!=="Select an Option ...") ? user.score.push(parseInt(choice)) : user.score.push(3)

            }
            // console.log(friends);

           $.post("api/friends",newUser,function(data){
               $("#name").text(data.name);
               $("#image").attr('src',data.photo);
               $(".modal").modal('show');

            })

        });


    });