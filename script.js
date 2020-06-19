let kalimat = "halo ini adalah perubahan huruf awalan kecil ke besar";

String.prototype.changeTitle = function () {
  this.includes(" ");
  let sentence = this.toLowerCase().split(" ");

  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(" ");
};

console.log(kalimat.changeTitle());
