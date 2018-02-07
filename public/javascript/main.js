$(function (){
   $("#employee-input-form").on("submit", function(event){
       var form = $(this);
        var valid = true;

        form.find("[data-required]").each(function(){
            var formElement = $(e);
            if(formElement.val() === ""){
                valid = false;
                formElement.attr("Title", formElement.data("required"));
                formElement.addClass("error");
            }
        });

       // if(!valid){
       //     alert("I am invalid");
       //     event.preventDefault();
       // }
       //
       // event.preventDefault();
   });
});