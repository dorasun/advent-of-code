import re
file = open('input.txt', 'r')
lines = file.readlines()

total = 0

for line in lines:
	print(line.strip())

	redMax = 0
	greenMax = 0
	blueMax = 0
	
	gameIndex = int(line[line.find(" ")+1:line.find(":")])
	#print(gameIndex)

	rounds = line[line.find(":")+2:len(line)].split(";")
	
	for r in rounds:
		print("round: "+r)

		dice = r.split(",")
		
		for die in dice:
			print("die: "+die)
			die = die.strip()

			dieCount = int(die[0:die.find(" ")])


			if die.find("red") > -1 and dieCount > redMax:
				redMax = dieCount
			if die.find("green") > -1 and dieCount > greenMax:
				greenMax = dieCount
			if die.find("blue") > -1 and dieCount > blueMax:
				blueMax = dieCount

	total += redMax * greenMax * blueMax

print(total)