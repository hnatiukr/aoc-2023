// const digitPattern = /\d/;
// const symbolPattern = /[^\d.\s]/;

// //

// function isValidPart(input: string[], x: number, y: number) {
//     return (
//         symbolPattern.test(input[y]?.[x - 1] ?? '') ||
//         symbolPattern.test(input[y + 1]?.[x - 1] ?? '') ||
//         symbolPattern.test(input[y + 1]?.[x] ?? '') ||
//         symbolPattern.test(input[y + 1]?.[x + 1] ?? '') ||
//         symbolPattern.test(input[y]?.[x + 1] ?? '') ||
//         symbolPattern.test(input[y - 1]?.[x + 1] ?? '') ||
//         symbolPattern.test(input[y - 1]?.[x] ?? '') ||
//         symbolPattern.test(input[y - 1]?.[x - 1] ?? '')
//     );
// }

// function isNumber(cell: string) {
//     return digitPattern.test(cell);
// }

// function isLastDigit(row: string, x: number) {
//     const nextCell = row[x + 1];

//     return nextCell === undefined || !isNumber(nextCell);
// }

// //

// function part1(input: string[]) {
//     let sum = 0;
//     let part = '';
//     let isValid = false;

//     input.forEach((row, y) => {
//         row.split('').forEach((cell, x) => {
//             if (isNumber(cell)) {
//                 part += cell;

//                 if (isValidPart(input, x, y)) {
//                     isValid = true;
//                 }

//                 if (isLastDigit(row, x)) {
//                     if (isValid) {
//                         sum += Number.parseInt(part, 10);
//                     }

//                     part = '';
//                     isValid = false;
//                 }
//             }
//         });
//     });

//     return sum;
// }

// export default part1;

// import { match } from 'ts-pattern';

// //

// type Point = `${number}:${number}`;

// type ElementType = 'digit' | 'symbol' | 'period';

// type Element = {
//     point: Point;
//     value: string;
//     fullValue: string | null;
//     type: ElementType;
//     adjacent: Point[];
// };

// //

// const digitPattern = /\d/;
// const symbolPattern = /[^\d.\s]/;

// //

// function isDigit(cell: string) {
//     return digitPattern.test(cell);
// }

// function isSymbol(cell: string) {
//     return symbolPattern.test(cell);
// }

// function matchElementType(cell: string) {
//     return match<string, ElementType>(cell)
//         .when(isDigit, () => 'digit')
//         .when(isSymbol, () => 'symbol')
//         .otherwise(() => 'period');
// }

// //

// function makePoint(x: number, y: number): Point {
//     return `${x}:${y}`;
// }

// function getX(point: Point): number {
//     const maybeX = point.split(':')[0];

//     return maybeX ? Number.parseInt(maybeX, 10) : 0;
// }

// function getY(point: Point): number {
//     const maybeY = point.split(':')[1];

//     return maybeY ? Number.parseInt(maybeY, 10) : 0;
// }

// function createAdjacent(point: Point): Point[] {
//     const x = getX(point);
//     const y = getY(point);

//     return [
//         makePoint(x - 1, y),
//         makePoint(x - 1, y + 1),
//         makePoint(x, y + 1),
//         makePoint(x + 1, y + 1),
//         makePoint(x + 1, y),
//         makePoint(x + 1, y - 1),
//         makePoint(x, y - 1),
//         makePoint(x - 1, y - 1),
//     ];
// }

// function findFullValue(row: string, x: number) {
//     let fullValue = right(row[x]);

//     for (let index = x + 1; index < row.length; index += 1) {
//         const candidate = row[index];

//         if (candidate === undefined || !isDigit(candidate)) {
//             break;
//         }

//         if (isDigit(candidate)) {
//             fullValue = fullValue + candidate;
//         }
//     }

//     for (let index = x - 1; index > 0; index -= 1) {
//         const candidate = row[index];

//         if (candidate === undefined || !isDigit(candidate)) {
//             break;
//         }

//         if (isDigit(candidate)) {
//             fullValue = candidate + fullValue;
//         }
//     }

//     return fullValue;
// }

// function makeElements(input: string[]) {
//     const elements: Record<Point, Element> = {};
//     const checkedPoints: Point[] = [];

//     input.forEach((row, y) => {
//         row.split('').forEach((cell, x) => {
//             const point = makePoint(x, y);
//             const type = matchElementType(cell);

//             const prevX = makePoint(x - 1, y);
//             const nextX = makePoint(x + 1, y);

//             let fullValue: Element['fullValue'] = '';

//             if (
//                 type === 'digit' &&
//                 !checkedPoints.includes(prevX) &&
//                 !checkedPoints.includes(nextX)
//             ) {
//                 fullValue = findFullValue(row, x);

//                 checkedPoints.push(point);
//             } else {
//                 fullValue = null;
//             }

//             elements[point] = {
//                 type,
//                 point,
//                 fullValue,
//                 value: cell,
//                 adjacent: createAdjacent(point),
//             };
//         });
//     });

//     return elements;
// }

// function right<Value>(value: Value) {
//     if (value === null || value === undefined) {
//         throw new Error(`value "${value}" is nullish`);
//     }

//     return value;
// }

//

function part1(input: string[]) {
    return input
        .map(
            (line) =>
                <const>[
                    [...line.matchAll(/[^\d.\s]/g)].map((match) => match.index!),
                    [...line.matchAll(/\d+/g)].map(
                        (match) =>
                            <const>[
                                match.index!,
                                match.index! + match[0].length,
                                parseInt(match[0]),
                            ],
                    ),
                ],
        )
        .flatMap(([symbols, numbers], lineIndex, lines) =>
            numbers
                .filter(
                    ([start, end, _]) =>
                        (start > 0 && symbols.includes(start - 1)) ||
                        symbols.includes(end) ||
                        (lineIndex > 0 &&
                            lines[lineIndex - 1]?.[0].some(
                                (symbol) => symbol >= start - 1 && symbol <= end,
                            )) ||
                        (lineIndex < lines.length - 1 &&
                            lines[lineIndex + 1]?.[0].some(
                                (symbol) => symbol >= start - 1 && symbol <= end,
                            )),
                )
                .map(([_, __, number]) => number),
        )
        .reduce((prev, cur) => prev + cur, 0);
}

export default part1;
