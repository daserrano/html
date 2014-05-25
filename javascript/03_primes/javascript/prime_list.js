
var primes = [2]

for( var candidato = primes[0] + 1; primes.length < 100; candidato++){


    var is_prime = true

	for( var i=0; is_prime && i < primes.length; i++)

	    if( candidato % primes[i] == 0)
		is_prime = false

		    if ( is_prime)
			primes.push(candidato)
}

console.log(primes)
