/*
init abjad a sampai z untuk pembanding dan dilooping dengan index i
init hurufBaru untuk menampung nilai baru
init urutan untuk memasukan nilai indexOf kata dengan index j
*/


function ubahHuruf(kata) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    
    var hurufBaru = ''

    for (var i = 0; i < kata.length; i++) {

        for (var j = 0; j < abjad.length; j++) {
            if (kata[i] === abjad[j]) {
                hurufBaru += abjad[j + 1]
            }
        }
    }

    return hurufBaru
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu