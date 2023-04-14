let word = "VENTURES";
let line = "";
for (let i = 0; i < word.length; i++) {
    line += word[i];
    if ((i + 1) % 2 === 0) {
        console.log(line);
        line = "";
    }
}
if (line.length > 0) {
    console.log(line);
}