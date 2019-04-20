const rows = 307;
const magicConstant = rows * ((Math.pow(rows, 2) + 1) / 2);
let magicSquare = new Array(3);

let xPos = Math.floor(rows / 2);
let yPos = 0;

initMagicSquare();
makeMagicSquare();
drawMagicSquare();

function initMagicSquare() {
    for (let i = 0; i < rows; i++) {
        magicSquare[i] = new Array(rows);
    }
}

function makeMagicSquare(): void {

    for (let i = 1; i < (Math.pow(rows, 2) + 1); i++) {
        magicPlusOne(i);
    }
}

function magicPlusOne(i: number): void {
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
    } else {
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

function drawMagicSquare(): void {
//body reference
    let body = document.getElementsByTagName("body")[0];
    const information = document.createElement('p');
    const informationText = document.createTextNode('Rows: ' + rows + ' magic constant = ' + magicConstant);
    information.appendChild(informationText);
    body.appendChild(information);

    // create elements <table> and a <tbody>
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    // cells creation
    for (let j = 0; j < rows; j++) {
        // table row creation
        let row = document.createElement("tr");

        for (let i = 0; i < rows; i++) {
            // create element <td> and text node
            //Make text node the contents of <td> element
            // put <td> at end of the table row
            let cell = document.createElement("td");
            let cellText = colorify(magicSquare[j][i]);

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

function colorify(number: number) {
    let cellText = document.createElement('div');
    const sNumber = number.toString();
    for (let i = 0; i < sNumber.length; i++) {
        let spanText = document.createElement('span');
        spanText.classList.add('c'+sNumber.charAt(i));
        let textNode = document.createTextNode(sNumber.charAt(i));
        spanText.appendChild(textNode);
        cellText.appendChild(spanText);
    }
    return cellText;
}

