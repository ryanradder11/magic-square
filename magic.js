var rows = 307;
var magicConstant = rows * ((Math.pow(rows, 2) + 1) / 2);
var magicSquare = new Array(3);
var xPos = Math.floor(rows / 2);
var yPos = 0;
initMagicSquare();
makeMagicSquare();
drawMagicSquare();
function initMagicSquare() {
    for (var i = 0; i < rows; i++) {
        magicSquare[i] = new Array(rows);
    }
}
function makeMagicSquare() {
    for (var i = 1; i < (Math.pow(rows, 2) + 1); i++) {
        magicPlusOne(i);
    }
}
function magicPlusOne(i) {
    if (magicSquare[this.yPos][this.xPos] === undefined) {
        magicSquare[this.yPos][this.xPos] = i;
        if ((rows - 1) === this.xPos) {
            this.xPos = -1;
        }
        if (0 === this.yPos) {
            this.yPos = rows;
        }
        this.xPos++;
        this.yPos--;
    }
    else {
        this.yPos++;
        this.xPos--;
        if (0 === this.yPos) {
            this.yPos = rows;
        }
        if ((rows - 1) === this.xPos) {
            this.xPos = -1;
        }
        this.yPos++;
        if (this.yPos > rows) {
            this.yPos = 0;
        }
        if (this.xPos < 0) {
            this.xPos = rows - 1;
        }
        magicPlusOne(i);
    }
}
function drawMagicSquare() {
    //body reference
    var body = document.getElementsByTagName("body")[0];
    var information = document.createElement('p');
    var informationText = document.createTextNode('Rows: ' + rows + ' magic constant = ' + magicConstant);
    information.appendChild(informationText);
    body.appendChild(information);
    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // cells creation
    for (var j = 0; j < rows; j++) {
        // table row creation
        var row = document.createElement("tr");
        for (var i = 0; i < rows; i++) {
            // create element <td> and text node
            //Make text node the contents of <td> element
            // put <td> at end of the table row
            var cell = document.createElement("td");
            var cellText = colorify(magicSquare[j][i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        //row added to end of table body
        tblBody.appendChild(row);
    }
    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to
    tbl.setAttribute("border", "2");
}
function colorify(number) {
    var cellText = document.createElement('div');
    var sNumber = number.toString();
    for (var i = 0; i < sNumber.length; i++) {
        var spanText = document.createElement('span');
        spanText.classList.add('c' + sNumber.charAt(i));
        var textNode = document.createTextNode(sNumber.charAt(i));
        spanText.appendChild(textNode);
        cellText.appendChild(spanText);
    }
    return cellText;
}
