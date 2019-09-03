function enviarDados(){
	if((document.dados.nome.value == "")||(document.dados.nome.value.length < 4)){
		document.dados.nome.focus();
		document.dados.errorNome.innerHTML = "Insira o nome corretamente";
	}

	if((document.dados.sobrenome.value == "")||(document.dados.sobrenome.value.length < 4)){
		document.dados.sobrenome.focus();
		document.dados.errorSobreNome.innerHTML = "Insira o sobrenome corretamente";
	}

	if((!document.dados.email.value.indexOf("@"))||(!document.dados.sobrenome.value.indexOf("."))){
		document.dados.email.focus();
		document.dados.errorEmail.innerHTML = "Insira o e-mail corretamente";
	}

	if((document.dados.telefone.value == "")||(document.dados.telefone.value.length < 8)){
		document.dados.telefone.focus();
		document.dados.errorTelefone.innerHTML = "Insira o telefone corretamente";
	}

	var check = document.dados.getElementsById("privacy");

	for (var i = 0; i < check.length; i++) {
		if(check[i].checked == false){
			document.dados.privacy.focus();
		}
	}
}