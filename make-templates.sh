#!/bin/bash

# Argument from command line
maybeAoCDate=$1

# Validate the argument
validAoCDates=$(seq -w 1 25)

if [[ -z $maybeAoCDate || ! $validAoCDates =~ $maybeAoCDate ]]; then
    echo "Incorrect argument: \"$maybeAoCDate\". Please provide a valid date as an argument, e.g.: \"01\", \"02\", \"14\", etc."
    exit 1
fi

# Create directory if it doesn't exist
mkdir -p "./day/$maybeAoCDate"

# Template for index.ts
indexFile="./day/$maybeAoCDate/index.ts"

cat > ${indexFile}<< EOF
import readInput from '../../read-input.js';

import part1 from './part1.js';
import part2 from './part2.js';

const input = readInput('${maybeAoCDate}');

console.log(part1(input));
console.log(part2(input));
EOF

echo "$indexFile has been created"

# Template for test.ts
testFile="./day/$maybeAoCDate/test.ts"

cat > ${testFile}<< EOF
import equal from '../../equal.js';

import part1 from './part1.js';
import part2 from './part2.js';

const input = [''];

equal('part1', 0, part1(input));
equal('part2', 0, part2(input));
EOF

echo "$testFile has been created"

# Template for part1.ts
part1File="./day/$maybeAoCDate/part1.ts"

cat > ${part1File}<< EOF
function part1(input: string[]) {
    return 0;
}

export default part1;
EOF

echo "$part1File has been created"

# Template for part2.ts
part2File="./day/$maybeAoCDate/part2.ts"

cat > ${part2File}<< EOF
function part2(input: string[]) {
    return 0;
}

export default part2;
EOF

echo "$part1File has been created"

# Template for input.txt

inputFile="./day/$maybeAoCDate/input.txt"

cat > ${inputFile}<< EOF
EOF

echo "$inputFile has been created"

# Template for README.md

readmeFile="./day/$maybeAoCDate/README.md"

cat > ${readmeFile}<< EOF
EOF

echo "$readmeFile has been created"

echo ""
