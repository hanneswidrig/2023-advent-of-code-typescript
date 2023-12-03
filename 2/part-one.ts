const file = await Bun.file("input.txt").text();
const lines = file.split(/\r?\n/);

let total = 0;

for (const line of lines) {
  const group = line.split(":");
  const game = group.at(0);
  const bag = group.at(1);

  let invalid = false;

  if (bag) {
    const contents = bag.split(";");

    for (const hand of contents) {
      const cubes = hand.split(",");

      for (const cubeCount of cubes) {
        const count = Number(cubeCount.match(/\d+/g)?.at(0) ?? "0");

        if (cubeCount.includes("red") && count > 12) {
          invalid ||= true;
        }

        if (cubeCount.includes("green") && count > 13) {
          invalid ||= true;
        }

        if (cubeCount.includes("blue") && count > 14) {
          invalid ||= true;
        }
      }
    }

    if (!invalid) {
      const gameIndex = game?.match(/\d+/g)?.at(0);
      if (gameIndex) {
        total += Number(gameIndex);
      }
    }
  }
}

console.log(total); // 2_278
