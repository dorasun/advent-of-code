import re
file = open('input.txt', 'r')
lines = file.readlines()

total = 0

for line in lines:
	#print(line.strip())
	ints = re.findall(r'\d', line)
	print(ints)

	calibration = ints[0] + ints[-1]
	print(calibration)
	total += int(calibration)

print(total)

