var firebaseConfig = {
    apiKey: "AIzaSyDstn0y3uLlMCXC2ITsWBbblT3JIuAih80",
    authDomain: "nallaerupom-96758.firebaseapp.com",
    databaseURL: "https://nallaerupom-96758.firebaseio.com",
    projectId: "nallaerupom-96758",
    storageBucket: "nallaerupom-96758.appspot.com",
    messagingSenderId: "456782876188",
    appId: "1:456782876188:web:347f8ea0aa408324b199d9",
    measurementId: "G-2LV5JX102J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  

  $("#btn-login").click(function()
  {
         var email = $("#email").val();
         var password = $("#password").val();
        
         if(email != "" && password != "")
         {
                 var result = firebase.auth().signInWithEmailAndPassword(email ,password);
                  result.catch(function(error)
                  {
                       var errorCode =error.code;
                       var errorMessage=error.message;

                       console.log(errorCode);
                       console.log(errorMessage);
                       window.alert("Message :"+ errorMessage);

                  });
                
         }
         
         else
         {
             window.alert("please fill out all the message");
         }
  });



  $("#btn-signup").click(function()
  {
         var email = $("#email").val();
         var password = $("#password").val();
         var cPassword = $("#comfirmpassword").val();
         
        
         if(email != "" && password != "" && cPassword != "")
         {
              if(password == cPassword)
              {
                var result = firebase.auth().createUserWithEmailAndPassword(email ,password);
                result.catch(function(error)
                {
                    var errorCode =error.code;
                    var errorMessage=error.message;
     
                    console.log(errorCode);
                    console.log(errorMessage);
                    window.alert("Message :"+ errorMessage);
     
                       });
              }
              else 
              {
                      window.alert("password donot match");

              }
                
         }
         
         else
         {
             window.alert("please fill out all the message");
         }
  });


  $("#btn-resetPassword").click(function()
  {
       var auth=firebase.auth();
       var email=$("#email").val();
       if(email !="")
       {
             auth.sendPasswordResetEmail(email).then(function()
             {
                    window.alert("Email has been to you,please check and verify");
             })
             .catch(function(error)
             {
               var errorCode =error.code;
               var errorMessage=error.message;

               console.log(errorCode);
               console.log(errorMessage);
               window.alert("Message :"+ errorMessage);

             });
       }
       else
       {
            window.alert("please fill out all the message");
       }
  });

  $("#btn-logout").click(function()
  {
       firebase.auth().signOut();
  });
   
$("#btn-update").click(function()
{
       var phone =$("#phone").val();
       var address  =$("#address").val();
       var bio =$("#bio").val();
       var fName=$("#firstName").val();
       var sName=$("#secondName").val();
       var country=$("#country").val();
       var gender=$("#gender").val();
         
       var rootRef =firebase.database().ref().child("Users");
       var userID = firebase.auth().currentUser.uid;
       var usersRef= rootRef.child(userID);
        
       if(fName !="" && sName !="" && phone!="" && address !="" && bio !="" && country!=""&& gender !="" )
       {
                 var userData =
                 {
                      "phone":phone,
                      "address":address,
                      "bio":bio,
                      "firstName":fName,
                      "secondName":sName,
                      "country":country,
                      "gender":gender,

                 }
                 console.log(userData)
                 usersRef.set(userData,function()
                 {
                   if(error)
                   {
                      var errorCode =error.code;
                      var errorMessage=error.message;
     
                      console.log(errorCode);
                      console.log(errorMessage);
                      window.alert("Message :"+ errorMessage);
                   }
                   else
                   {
                    window.location.href ="Mainpage.html";
                   }
     
                 });
                 {
                    window.location.href ="Mainpage.html";
                 }
       }
       else
       {
            window.alert("form is incomplete");
       }
});



 