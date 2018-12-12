function changeVocals(str) {

  str = str.split('a').join('b')
  str = str.split('i').join('j')
  str = str.split('u').join('v')
  str = str.split('e').join('f')
  str = str.split('o').join('p')
  str = str.split('A').join('B')
  str = str.split('I').join('J')
  str = str.split('U').join('V')
  str = str.split('E').join('F')
  str = str.split('O').join('P')

  return str
  
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
  var hasil = str.replace(/\s+/g, '')

  return hasil
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