$(function() {
    $('.error').hide();
    $(".button").click(function()
	{
      // validate and process form here
      
      $('.error').hide();
		 
		 var firstname = $("input#firstname").val();
		 if (firstname == "") 
		 {
			$("label#firstname_error").show();
			$("input#firstname").focus();
			return false;
		  }
		 
		 
		 if (! firstname.match(/^[a-zA-Z]/))
		 {
			$("label#firstnameIncorrect_error").show();
			$("input#firstname").focus();
			return false;			 
		 }
	
		  
		  var lastname = $("input#lastname").val();
		 if (lastname == "") 
		 {
			$("label#lastname_error").show();
			$("input#lastname").focus();
			return false;
		  }
		  
		 if (! lastname.match(/^[a-zA-Z]/))
		 {
			$("label#lastnameIncorrect_error").show();
			$("input#lasttname").focus();
			return false;			 
		 }
		  
		var email = $("input#email").val();
		if (email == "") 
		{
			$("label#email_error").show();
			$("input#email").focus();
			return false;
		  }
		  
		  var ticket = $("input#ticket").val();
		 if (ticket == "") 
		 {
			$("label#ticket_error").show();
			$("input#ticket").focus();
			return false;
		  }
		  
    });
  });



