function animal(tipo, genero, tiempoVida){
    this.tipo       = tipo
    this.genero     = genero
    this.tiempoVida = tiempoVida
}

vertebrado.prototype = new animal  // Extender el prototipo
vertebrado.prototype.constructor = vertebrado // Arreglar el constructor

function vertebrado(numeroHuesos){
    this.numeroHuesos = numeroHuesos
}

invertebrado.prototype = new animal
invertebrado.prototype.constructor = invertebrado

function invertebrado(venenoso){
    this.venenoso = venenoso 
}

perro.prototype = new vertebrado
perro.prototype.constructor = perro

function perro(){
    vertebrado.call(this, 40)  // Llama al constructor de la superclase
    animal.call(this, omnivoro, macho, 14)
    this.nombre = "Lucas"
}

medusa.prototype = new invertebrado
medusa.prototype.constructor = medusa

function medusa(){
    invertebrado.call(this, "si")
    animal.call(this, carnivoro, macho, 20)
    this.nombreEspecie = "Caravela portuguesa"
}
