export type Cubes = {
    red: number;
    green: number;
    blue: number;
};

export type Round = Cubes & { id: number };

const BAG_LIMITS: Cubes = { red: 12, green: 13, blue: 14 } as const;

//

export function matchGameId(line: string) {
    const regex = /Game (\d+):/;
    const maybeGameId = line.match(regex);
    return maybeGameId ? Number.parseInt(maybeGameId[1], 10) : 0;
}

export function makeRounds(line: string) {
    const gameId = matchGameId(line);
    const regex = /(\d+) (blue|green|red)/g;

    return line.split(';').reduce((acc, set) => {
        let match: RegExpExecArray | null = null;
        const cubes: Round = { red: 0, green: 0, blue: 0, id: gameId };

        while ((match = regex.exec(set)) !== null) {
            const [, number, color] = match;

            cubes[color] += Number.parseInt(number, 10);
        }

        return [...acc, cubes];
    }, [] as Round[]);
}

export function isGamePossible(rounds: Round[]) {
    return rounds.every(
        ({ red, green, blue }) =>
            red <= BAG_LIMITS.red && green <= BAG_LIMITS.green && blue <= BAG_LIMITS.blue,
    );
}

export function calculateSum(sum: number, game: Round[]) {
    return (sum += game[0].id);
}

//

function part1(input: string[]) {
    return input.map(makeRounds).filter(isGamePossible).reduce(calculateSum, 0);
}

export default part1;
