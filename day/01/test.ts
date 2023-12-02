import equal from '../../equal.js';

import part1 from './part1.js';
import part2 from './part2.js';

equal('part1', 142, part1(['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet']));

equal(
    'part2',
    281,
    part2([
        'two1nine',
        'eightwothree',
        'abcone2threexyz',
        'xtwone3four',
        '4nineeightseven2',
        'zoneight234',
        '7pqrstsixteen',
    ]),
);
