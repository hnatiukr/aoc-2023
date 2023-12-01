import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

import { match } from 'ts-pattern';

type Format = 'lines' | 'plain';

const SRC_DIR_NAME = 'day';
const INPUT_FILE_NAME = 'input.txt';

export function readInput(day: string): string[];
export function readInput(day: string, format: Format): string;
export function readInput(day: string, format?: Format): string[] | string {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const dirPath = `${__dirname}/${SRC_DIR_NAME}/${day}`;
    const input = readFileSync(resolve(dirPath, INPUT_FILE_NAME), 'utf-8')
        .replace(/\r/g, '')
        .trim();

    return match(format)
        .with('plain', () => input)
        .otherwise(() => input.split('\n'));
}
