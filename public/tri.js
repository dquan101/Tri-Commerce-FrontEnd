document.addEventListener("DOMContentLoaded", event => {

	const app = firebase.app();
	console.log(app);

});


function googleLogin() {
	const provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider)

		.then(result => {
			const user = result.user;
		})
		.catch(console.log)
}

function fbLogin() {
	var provider = new firebase.auth.FacebookAuthProvider();

	firebase.auth().signInWithPopup(provider).then(function(result) {
 	 // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  	var token = result.credential.accessToken;
  	// The signed-in user info.
  	var user = result.user;
  	// ...
	}).catch(function(error) {
	  // Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	// The email of the user's account used.
  	var email = error.email;
  	// The firebase.auth.AuthCredential type that was used.
  	var credential = error.credential;
  	// ...
});
}