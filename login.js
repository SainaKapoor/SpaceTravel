$(function() {

    $('.error').hide();

    $(".button").click(function() {

      // validate and process form here

     

      $('.error').hide();

      var username = $("input#username").val();

                      if (username == "") {

                                 $("label#username_error").show();

                                 $("input#username").focus();

                                 return false;

                      }

            

                      if (username.match(/[^0-9A-z]/)){    

                                 $("label#username_errorNumberLetter").show();

                                 $("input#username").focus();

                                 return false;                                

                      }

                      if (!username.match(/^[A-z]/)){

                                 $("label#username_errorFirstLetter").show();

                                 $("input#username").focus();

                                 return false;

                                

           }

           var password = $("input#password").val();

                      if (password == ""){

                                 $("label#password_error").show();

                                 $("input#password").focus();

                                 return false;

      }

            

             if ( password.length < 8 || password.length > 16 ) {

                                 $("label#password_errorLength").show();

                                 $("input#password").focus();

                                 return false;

                      }

          

                      if ( ! password.match(/[A-z]/) ) {

                                 $("label#password_errorLetter").show();

                                 $("input#password").focus();

                                 return false;

                      }

             

             

                      if ( ! password.match(/[!*]/)) {

                                 $("label#password_errorCharacter").show();

                                 $("input#password").focus();

                                 return false;

                      }

                     

                      if ( ! password.match(/[\d]/)) {

                                 $("label#password_errorNumber").show();

                                 $("input#password").focus();

                                 return false;

                      }

          

           });

});

 

 