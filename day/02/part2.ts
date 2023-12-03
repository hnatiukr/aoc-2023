import { makeRounds, Cubes, Round } from './part1.js';

//

function makeRequiredCubes(game: Round[]) {
    const requredCubes: Cubes = { red: 0, green: 0, blue: 0 };

    for (const round of game) {
        requredCubes.red = Math.max(round.red, requredCubes.red);
        requredCubes.green = Math.max(round.green, requredCubes.green);
        requredCubes.blue = Math.max(round.blue, requredCubes.blue);
    }

    return requredCubes;
}

function computePowerOfRequiredCubes(cubes: Cubes) {
    return cubes.red * cubes.green * cubes.blue;
}

function computePowerOfGames(power: number, game: Round[]) {
    const requiredCubes = makeRequiredCubes(game);
    const powerOfGame = computePowerOfRequiredCubes(requiredCubes);

    return (power += powerOfGame);
}

//

function part2(input: string[]) {
    return input.map(makeRounds).reduce(computePowerOfGames, 0);
}

export default part2;
