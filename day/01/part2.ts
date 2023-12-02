import part1 from './part1.js';

const digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function numberify(line: string) {
    const characters = line.split('');

    digits.forEach((digit, digitIndex) => {
        const pattern = new RegExp(digit, 'g');

        for (const match of line.matchAll(pattern)) {
            if (match.index !== undefined) {
                characters[match.index] = String(digitIndex + 1);
            }
        }
    });

    return characters.join('');
}

export function part2(input: string[]) {
    return part1(input.map(numberify));
}

export default part2;
