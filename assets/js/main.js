$(function(){

    // ===========================
    // ======== Form Validation===
    //============================
    let form = $("form"),
        emailREgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function isEmailAddress(str) {
        return str.match(emailREgx);    
    }

    function isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57) &&  !evt.target.value.match(/[0-9]/))
        return false;
        return true;
    }
    
    // make phone input not accepting letters
    $("form #phoneNom").on("keypress ", function(event) {
        return isNumberKey(event)
    })

    // validate on key press
    $("form input").on("keypress blur", function(e) {
        console.log(e.target.id)
        if($(e.target).hasClass("name") && $(e.target).val().length >= 4) {
            $(e.target).removeClass("is-invalid").addClass("is-valid")
        }
        
        if($(e.target).hasClass("phone-nom") && $(e.target).val().length == 9) {
            $(e.target).removeClass("is-invalid").addClass("is-valid")
        }

        if($(e.target).hasClass("email") && isEmailAddress($(e.target).val())) {
            $(e.target).removeClass("is-invalid").addClass("is-valid")
        }
    })

    // function to loop throw inpu fields
    function loopThruInputs(el, event) {
        for (let i = 0; i < $(el).find("input").length; i++) {       
            if(!isEmailAddress($(el).find("#email").val())) {
                $(el).find("#email").addClass("is-invalid");
                event.preventDefault();
            }

            if($(el).find("#name").val().length < 5) {
                $(el).find("#name").addClass("is-invalid");
                event.preventDefault();
            }

            if($(el).find("input#phoneNom").val().length < 9) {
                
                $(el).find("#phoneNom").addClass("is-invalid");
                event.preventDefault();
            }
        }
    }

    // Choosing to validate which form depending on submitted form
    $("button[type='submit'], input[type='submit']").on("click", function(el) {

        if($(el.target).data("target") == ".main-contact") {
            loopThruInputs(".contact-us form", el)
        }

        if($(el.target).data("target") == ".package-order") {
            loopThruInputs(".modal .package-order", el)
        }

        if($(el.target).data("target") == ".service-order") {
            loopThruInputs(".modal .service-order", el)
        }
    }); 

    // =========================
    // cahnging modal content
    // =========================

    // services content
    $(".home-advantages,  .ask-serve-btn").on("click", function() {
        console.log("yes")
        $("#service-content").show();
    });

    $("button.service-content-close").on("click", function() {
        $("#service-content").fadeOut();
    });

    // packages content
    $(".normall-packs button").on("click", function() {
        $("#package-content").show();
    });

    $("button.package-content-close").on("click", function() {
        $("#package-content").fadeOut();
    });

    // buissness content
    $(".buissness-packs button").on("click", function() {
        $("#buissness-packs").show();
    });

    $("#buissness-packs button.package-content-close").on("click", function() {
        $("#buissness-packs").fadeOut();
    });


    // =========================
    // displaying order modal
    // =========================
    $(".modal .to-order-form").on("click", function() {
        $(this).parents(".wrapper").fadeOut().next(".order").fadeIn();
    });


    // =========================
    // hiding order modal
    // =========================
    $(".order .return").on("click", function() {
        $(this).parents(".order").fadeOut().prev(".wrapper").fadeIn();
    });

});

