import { match } from 'ts-pattern';

function equal(description: string, expected: string, actual: string);
function equal(description: string, expected: number, actual: number);
function equal(description: string, expected: string | number, actual: string | number) {
    match(expected === actual)
        .with(true, () => {
            console.log(`✅ PASS ${description}`);
            console.log(`> expected result is correct: ${actual}\n`);
        })
        .otherwise(() => {
            console.log(`🚷 FAIL ${description}`);
            console.log(`> expected ${expected}, but got ${actual}\n`);
        });
}

export default equal;
