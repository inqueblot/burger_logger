$(function () {
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: id
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burgerName: $("#burger").val().trim()
        }
        console.log(newBurger)

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log(newBurger)
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
});