var n = [0, 1, 2, 3, 4]
var k = 2
var sol = []

for (var i=0; i<n.length; i++)
sol[i] = ( n[i] * k) % 5


// => [0, 2, 4, 1, 3]
// (n x d ) % 5
// => [0, 1, 2, 3, 4 ]
// => 0032134 => 0014213


// p (p - 1) = K
//
