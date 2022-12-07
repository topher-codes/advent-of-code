const input = await Deno.readTextFile('./data.txt');

const grouped = input.split('\n\n');

const groupedSums = grouped.map((group) => {
	const numbers = group.split('\n').map((s) => parseInt(s, 10));
	return numbers.reduce((a, b) => a + b, 0);
});

const max = Math.max(...groupedSums);

const topThree = groupedSums.sort((a, b) => b - a).slice(0, 3);

const sum = topThree.reduce((a, b) => a + b, 0);

console.log(sum);
