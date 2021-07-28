var correo = document.getElementById('inputEmail');
var contrasena = document.getElementById('inputPassword');

const usuario ="admin@correo.com";
const contra="1234";

function Login() {
	console.log(correo.value);
	console.log(contrasena.value);

	if(correo.value === usuario){
		if (contrasena.value===contra) {
			alert('El usuario y la contraseña son correctos');
			window.location('../index.html')
		}
	}
	else{
		alert('Valida el usuario y la contraseña');
	}
}


