function part2(input: string[]) {
    return input
        .map(
            (line) =>
                <const>[
                    [...line.matchAll(/[*]/g)].map((match) => match.index!),
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
            symbols
                .map((index) => [
                    ...numbers
                        .filter(([start, end, _]) => start == index + 1 || end == index)
                        .map(([_, __, number]) => number),
                    ...(lineIndex == 0
                        ? []
                        : (lines[lineIndex - 1]?.[1] || [])
                              .filter(
                                  ([start, end, _]) =>
                                      (start >= index - 1 && start <= index + 1) ||
                                      (end <= index + 1 && end > index - 1),
                              )
                              .map(([_, __, number]) => number)),
                    ...(lineIndex == lines.length - 1
                        ? []
                        : (lines[lineIndex + 1]?.[1] || [])
                              .filter(
                                  ([start, end, _]) =>
                                      (start >= index - 1 && start <= index + 1) ||
                                      (end <= index + 1 && end > index - 1),
                              )
                              .map(([_, __, number]) => number)),
                ])
                .filter((numbers) => numbers.length == 2)
                .map((numbers) => (numbers[0] || 0) * (numbers[1] || 0)),
        )
        .reduce((prev, cur) => prev + cur, 0);
}

export default part2;
