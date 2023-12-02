const file = await Bun.file("input.txt").text();
const lines = file.split(/\r?\n/);

let total = 0;

for (const line of lines) {
  const digitMap: [value: string, regex: RegExp][] = [
    ["1", /one/g],
    ["2", /two/g],
    ["3", /three/g],
    ["4", /four/g],
    ["5", /five/g],
    ["6", /six/g],
    ["7", /seven/g],
    ["8", /eight/g],
    ["9", /nine/g],
  ];

  const matches: { value: string; index: number }[] = [];

  for (const match of line.matchAll(/\d+/g)) {
    if (match.index !== undefined) {
      matches.push({ value: match[0], index: match.index });
    }
  }

  for (const [digit, regex] of digitMap) {
    for (const match of line.matchAll(regex)) {
      if (match.index !== undefined) {
        matches.push({ value: digit, index: match.index });
      }
    }
  }

  const parsedLine = matches
    .sort((a, b) => a.index - b.index)
    .map(({ value }) => value)
    .join("");

  const hasDigits = parsedLine.length > 0;
  const firstDigit = parsedLine.at(0);
  const lastDigit = parsedLine.at(-1);

  if (hasDigits && firstDigit && lastDigit) {
    total += Number(firstDigit + lastDigit);
  }
}

console.log(total); // 55_358
