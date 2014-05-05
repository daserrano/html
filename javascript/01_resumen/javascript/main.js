function resumen(){
    var hash = {}
    // => Analizar n nombres propios
    for(var palabra=0; palabra<arguments.length; palabra++) //Recorre el numero de palabras
	for(var letra=0; letra<arguments[palabra].length; letra++){ //Recorre las letras de cada palabra

	    hash[letra] = hash[letra] || 0
		hash[letra]++
	}
    return hash
}

document.getElementById("lista").innerHTML = hash

