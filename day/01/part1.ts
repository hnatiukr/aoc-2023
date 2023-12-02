function part1(input: string[]) {
    let sum = 0;

    for (const line of input) {
        let parsedLine = '';

        for (const char of line) {
            parsedLine += Number.isNaN(Number(char)) ? '-' : Number(char);
        }

        const firstMatch = parsedLine.match(/\d/);
        const firstDigit = firstMatch ? parseInt(firstMatch[0], 10) : null;

        const lastMatch = parsedLine.match(/\d(?=[^\d]*$)/);
        const lastDigit = lastMatch ? parseInt(lastMatch[0], 10) : null;

        const digits = Number.parseInt(`${firstDigit}${lastDigit}`, 10);

        sum += digits;
    }

    return sum;
}

export default part1;
