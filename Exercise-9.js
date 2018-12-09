function checkAB(num) {
    var posisi_a = []
    var posisi_b = []

    for ( i = 0; i < num.length; i++) {
        if ( num[i] === 'a'){
            posisi_a.push(i)
        } else if ( num[i] === 'b') {
            posisi_b.push(i)
        }
    }
    // console.log(posisi_a)
    // console.log(posisi_b)

    for ( j = 0; j < posisi_a.length; j++) {
        
        for ( k = 0; k < posisi_b.length; k++) {
            if (posisi_a[j] - posisi_b[k] === 4 || posisi_a[j] - posisi_b[k] == -4) {
                return true
            }
        }
    }
    return false

  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false