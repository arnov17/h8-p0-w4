function changeVocals(str) {
  var hurufAwal = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
  var hurufUbah = ['b', 'j', 'v', 'f', 'p', 'B', 'J', 'V', 'F', 'P'];
  var temp = ''
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < hurufAwal.length; j++) {
      if (str[i] === hurufAwal[j]) {
        temp = temp + hurufUbah[j]
      }
    }
    if (i === (temp.length)) {
      temp = temp + str[i]
    }
  }
  return temp

}

function reverseWord(str) {
  var balik = []

  for (let i = str.length - 1; i >= 0; i--) {
    balik.push(str[i])
  }

  return balik
}

function setLowerUpperCase(str) {
  var kata = ''

  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      kata += str[i].toLowerCase()
    }
    else {
      kata += str[i].toUpperCase()
    }
  }
  return kata
}

function removeSpaces(str) {
  var temp = ''
  for(var i = 0; i < str.length; i ++){ 
      if(str[i] !== ' ') {
          temp = temp + str[i]
      }
  }
  return temp 


}

function passwordGenerator(name) {
  if (name.length < 5 || name === undefined) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  else {
    var ubahVokal = changeVocals(name)
    var balikKata = reverseWord(ubahVokal)
    var lowerUpper = setLowerUpperCase(balikKata)
    var hapusSpasi = removeSpaces(lowerUpper)
    return hapusSpasi
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'