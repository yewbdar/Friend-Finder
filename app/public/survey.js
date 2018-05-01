
$(document).ready(function () {
    var newUser = {
        name: "",
        photo: "",
        score: []
    }
    $("#submit").on("click", function (e) {
        e.preventDefault();
        if ($("#name").val().trim() === "") {
            alert("please insert your name ");
            return;

        }
        else { newUser.name = $("#name").val().trim() }

        if ($("#photo").val().trim() === "") {
            alert("please insert your photo link ");
            return;
        }
        else { newUser.name = $("#photo").val().trim() }

        for (var i = 1; i < 11; i++) {

            var choice = $("#question" + i).val();
            (choice !== "Select an Option ...") ? newUser.score.push(parseInt(choice)) : newUser.score.push(3)

        }
        $.post("api/friends", newUser, function (data) {
            $("#nameOfFriend").html(data.name);
            $("#image").attr('src', data.photo);
            $(".modal").modal('show');
           
            newUser.name="";
            newUser.photo="";
            newUser.score=[];
        });
        resetForm();
    });

    function resetForm(){
        $("#name").val("");
        $("#photo").val("");
        $(".choice").val("Select an Option ...");
    }
});
