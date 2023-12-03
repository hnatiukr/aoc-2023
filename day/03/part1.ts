const digitPattern = /\d/;
const symbolPattern = /[^\d.\s]/;

//

function isValidPart(input: string[], x: number, y: number) {
    return (
        symbolPattern.test(input[y]?.[x - 1] ?? '') ||
        symbolPattern.test(input[y + 1]?.[x - 1] ?? '') ||
        symbolPattern.test(input[y + 1]?.[x] ?? '') ||
        symbolPattern.test(input[y + 1]?.[x + 1] ?? '') ||
        symbolPattern.test(input[y]?.[x + 1] ?? '') ||
        symbolPattern.test(input[y - 1]?.[x + 1] ?? '') ||
        symbolPattern.test(input[y - 1]?.[x] ?? '') ||
        symbolPattern.test(input[y - 1]?.[x - 1] ?? '')
    );
}

function isNumber(cell: string) {
    return digitPattern.test(cell);
}

function isLastDigit(row: string, x: number) {
    const nextCell = row[x + 1];

    return nextCell === undefined || !isNumber(nextCell);
}

//

function part1(input: string[]) {
    let sum = 0;
    let part = '';
    let isValid = false;

    input.forEach((row, y) => {
        row.split('').forEach((cell, x) => {
            if (isNumber(cell)) {
                part += cell;

                if (isValidPart(input, x, y)) {
                    isValid = true;
                }

                if (isLastDigit(row, x)) {
                    if (isValid) {
                        sum += Number.parseInt(part, 10);
                    }

                    part = '';
                    isValid = false;
                }
            }
        });
    });

    return sum;
}

export default part1;
