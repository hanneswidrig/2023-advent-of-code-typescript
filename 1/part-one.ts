const file = await Bun.file("input.txt").text();
const lines = file.split(/\r?\n/);

const calibrations: number[] = [];

for (const line of lines) {
  const digits = line.trim().replace(/[^0-9]/g, "");
  if (digits.length > 1) {
    const firstDigit = digits.at(0) ?? "";
    const secondDigit = digits.at(-1) ?? "";
    const calibration = Number(firstDigit + secondDigit);
    calibrations.push(calibration);
  }

  if (digits.length === 1) {
    const firstDigit = digits.at(0) ?? "";
    const calibration = Number(firstDigit + firstDigit);
    calibrations.push(calibration);
  }
}

const total = calibrations.reduce((prev, curr) => prev + curr, 0);
console.log(total); // 56_042
