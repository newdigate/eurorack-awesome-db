const fs = require('fs');

let rawdata = fs.readFileSync('eurorack-awesome.json');
let awesome = JSON.parse(rawdata);

console.log('|   |   |\n' +
            '|---|---|');

for (a in awesome) {
    const awesomeGroup = awesome[a];
    //console.log("|  |   |");

    /*
    for (u in awesomeGroup.urls) {
        const url = awesomeGroup.urls[u];
        if (u == 0) continue;
        console.log("|   |  ["+url+"]("+u+")  |");
    }
     */

    let stars = c => "![Stars](https://img.shields.io/github/stars/"+c+".svg?style=social&label=Stars&maxAge=2592000)"

    for (let r in awesomeGroup.repos) {
        const repo = awesomeGroup.repos[r];
        let str = (r == 0)?
            "| **[" + awesomeGroup.name+"]("+awesomeGroup.urls[0]+")**" + " <br/> " +
            "[" + repo.name + "](" + repo.url + ")  <br/> " + stars(awesomeGroup.name + "/" + repo.name) +
            "|  "
            :
            "|  "+
            "[" + repo.name + "](" + repo.url + ")  <br/> " + stars(awesomeGroup.name + "/" + repo.name) +
            "  |  ";

        for (i in repo.images) {
            const image = repo.images[i];
            str += "<img src='"+image.url+"' title='"+image.name + ":" + image.description+"' height='80px'/> ";
        }
        str += "  <br/>  ";

        for (let d in repo.descriptions) {
            const desc = repo.descriptions[d];
            str += desc;
            str += "  <br/>  ";
        }


        str += "   |";
        console.log(str);

    }
}
