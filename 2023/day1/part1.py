import re
file = open('input.txt', 'r')
lines = file.readlines()

total = 0

for line in lines:
	#print(line.strip())
	ints = [int(s) for s in re.findall(r'\d', line)]
	print(ints)

	calibration = ints[0]*10 + ints[-1]
	print(calibration)
	total += calibration

print(total)

