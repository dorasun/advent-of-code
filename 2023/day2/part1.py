import re
file = open('input.txt', 'r')
lines = file.readlines()

redMax = 12
greenMax = 13
blueMax = 14

total = 0

for line in lines:
	print(line.strip())
	
	gameIndex = int(line[line.find(" ")+1:line.find(":")])
	#print(gameIndex)

	rounds = line[line.find(":")+2:len(line)].split(";")
	goodDice = True
	
	for r in rounds:
		print("round: "+r)
		redCount = 0
		greenCount = 0
		blueCount = 0

		dice = r.split(",")
		
		for die in dice:
			print("die: "+die)
			die = die.strip()

			dieCount = die[0:die.find(" ")]


			if die.find("red") > -1 and int(dieCount) > redMax:
				print(dieCount + ": too many red dice")
				goodDice = False
			if die.find("green") > -1 and int(dieCount) > greenMax:
				print(dieCount + ": too many green dice")
				goodDice = False
			if die.find("blue") > -1 and int(dieCount) > blueMax:
				print(dieCount + ": too many blue dice")
				goodDice = False

	if goodDice:
		print ("round "+str(gameIndex)+" is soliddddddddd")
		total += gameIndex

print(total)