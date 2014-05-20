function show_animal(){

    var animal = document.getElementById("animal")
	animal = animal.options[animal.selectedIndex].value

	animal = eval("new " + animal + "()")

	var output = document.getElementById("output")
	output.innerHTML = ""
	for (var i in animal)
	    output.innerHTML += i + ": " + animal[i] + "<br/>\n"

}
