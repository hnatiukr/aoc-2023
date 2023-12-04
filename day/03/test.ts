import equal from '../../equal.js';

import part1 from './part1.js';
import part2 from './part2.js';

const input = [
    '467..114..',
    '...*......',
    '..35..633.',
    '......#...',
    '617*......',
    '.....+.58.',
    '..592.....',
    '......755.',
    '...$.*....',
    '.664.598..',
];

equal('part1', 4361, part1(input));
equal('part2', 467835, part2(input));
