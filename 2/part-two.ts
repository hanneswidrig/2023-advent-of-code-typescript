const file = await Bun.file("input.txt").text();
const lines = file.split(/\r?\n/);

let total = 0;

for (const line of lines) {
  const splitLine = line.split(":");
  const game = splitLine.at(0);
  const bag = splitLine.at(1);

  if (bag) {
    const contents = bag.split(";").map((v) => v.trim());

    console.log(contents);

    let maxRed = 0;
    let maxGreen = 0;
    let maxBlue = 0;

    for (const hand of contents) {
      const cubes = hand.split(",").map((v) => v.trim());

      for (const cubeCount of cubes) {
        const count = Number(cubeCount.match(/\d+/g)?.at(0) ?? "0");

        if (cubeCount.includes("red") && count > maxRed) {
          maxRed = count;
        }

        if (cubeCount.includes("green") && count > maxGreen) {
          maxGreen = count;
        }

        if (cubeCount.includes("blue") && count > maxBlue) {
          maxBlue = count;
        }
      }
    }

    total += maxRed * maxGreen * maxBlue;
  }
}

console.log(total); // 67_953
