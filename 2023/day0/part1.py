file = open('input.txt', 'r')
lines = file.readlines()

total = 0

for line in lines:
	print(line.strip())	
	

print(total)