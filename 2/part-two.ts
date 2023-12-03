const file = await Bun.file("input.txt").text();
const lines = file.split(/\r?\n/);

let total = 0;

for (const line of lines) {
  const bag = line.split(":").at(1);
  if (bag) {
    const contents = bag.split(";");

    let maxRed = 0;
    let maxGreen = 0;
    let maxBlue = 0;

    for (const hand of contents) {
      const cubes = hand.split(",");

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
