$(document).ready(function(){
        // var friends = [{
        //     "name":"yo",
        //     "score":[1,2,2,2,1,4,3,5,4,4]
        // },
        // {
        //     "name":"yoni",
        //     "score":[1,3,1,3,1,3,2,4,4,3]
        // },
        // {
        //     "name":"tg",
        //     "score":[1,2,2,2,1,2,2,4,3,3]
        // },
        // {
        //     "name":"samri",
        //     "score":[1,1,1,2,1,3,4,5,5,3]
        // }]
        // var friends=required("../data/friends.json");

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
            console.log(friends);

           $.post("api/friends",newUser,function(data){
               $("#name").text(data.name);
               $("#image").attr('src',data.photo);
               $(".modal").modal('show');

            })

        });


    });