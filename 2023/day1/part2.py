file = open('input.txt', 'r')
lines = file.readlines()

total = 0

for line in lines:
	searchTerms = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

	firstMatch = len(line)
	lastMatch = 0

	for term in searchTerms:
		firstIndex = line.find(term)
		if firstIndex >= 0 and firstIndex < firstMatch:
			firstMatch = firstIndex
			tensValue = term

		lastIndex = line.rfind(term)
		if lastIndex >= lastMatch:
			lastMatch = lastIndex
			onesValue = term

	print(line)

	tensValue = tensValue.replace("one", "1").replace("two", "2").replace("three", "3").replace("four", "4").replace("five", "5").replace("six", "6").replace("seven", "7").replace("eight","8").replace("nine", "9")
	onesValue = onesValue.replace("one", "1").replace("two", "2").replace("three", "3").replace("four", "4").replace("five", "5").replace("six", "6").replace("seven", "7").replace("eight","8").replace("nine", "9")
	print(tensValue)
	print(onesValue)

	calibration = tensValue + onesValue
	print(calibration)
	total += int(calibration)

print(total)