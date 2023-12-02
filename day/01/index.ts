import readInput from '../../read-input.js';

//

function part1(calibrationValues: string[]) {
    let sum = 0;

    for (const line of calibrationValues) {
        let digits = '';

        for (const char of line) {
            digits += Number.isNaN(Number(char)) ? '' : Number(char);
        }

        const firstMatch = digits.match(/\d/);
        const firstDigit = firstMatch ? parseInt(firstMatch[0], 10) : null;

        const lastMatch = digits.match(/\d(?=[^\d]*$)/);
        const lastDigit = lastMatch ? parseInt(lastMatch[0], 10) : null;

        const calibration = Number.parseInt(`${firstDigit}${lastDigit}`, 10);

        sum += calibration;
    }

    console.log(sum);
}

//

const calibrationValues = readInput('01');

part1(calibrationValues);
