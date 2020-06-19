let kalimat = "halo ini adalah perubahan huruf awalan kecil ke besar";

String.prototype.changeTitle = function () {
  let sentence = this.split(" ");

  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  return sentence.join(" ");
};

console.log(kalimat.changeTitle());
