file = open('input.txt', 'r')
lines = file.readlines()

total = 0

for line in lines:
	line = line[line.find(":")+2:len(line)]

	winners = line.split("|")[0].split(" ")
	winners = [i.strip() for i in winners if i]

	numbers = line.split("|")[1].split(" ")
	numbers = [i.strip() for i in numbers if i]

	score = 0
	matches = set(winners) & set(numbers)
	#print(str(len(matches)))

	for x in range(len(matches)):
		if x == 0:
			score = score + 1
		else:
			score = score * 2

	total = total + score

print(total)