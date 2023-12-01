import re
import numpy as np
file = open('input.txt', 'r')
lines = file.readlines()

total = 0

for line in lines:
	index1 = line.find("1")
	index2 = line.find("2")
	index3 = line.find("3")
	index4 = line.find("4")
	index5 = line.find("5")
	index6 = line.find("6")
	index7 = line.find("7")
	index8 = line.find("8")
	index9 = line.find("9")

	indexOne = line.find("one")
	indexTwo = line.find("two")
	indexThree = line.find("three")
	indexFour = line.find("four")
	indexFive = line.find("five")
	indexSix = line.find("six")
	indexSeven = line.find("seven")
	indexEight = line.find("eight")
	indexNine = line.find("nine")
	indices = np.array([-1, index1, index2, index3, index4, index5, index6, index7, index8, index9, -1, indexOne, indexTwo, indexThree,indexFour, indexFive, indexSix, indexSeven,indexEight,indexNine])

	print(line)
	print(indices)
	tensPlace = list(indices).index(min(indices[indices>=0]))
	print(tensPlace)
	if tensPlace > 10:
		tensPlace -= 10



	index1 = line.rfind("1")
	index2 = line.rfind("2")
	index3 = line.rfind("3")
	index4 = line.rfind("4")
	index5 = line.rfind("5")
	index6 = line.rfind("6")
	index7 = line.rfind("7")
	index8 = line.rfind("8")
	index9 = line.rfind("9")

	indexOne = line.rfind("one")
	indexTwo = line.rfind("two")
	indexThree = line.rfind("three")
	indexFour = line.rfind("four")
	indexFive = line.rfind("five")
	indexSix = line.rfind("six")
	indexSeven = line.rfind("seven")
	indexEight = line.rfind("eight")
	indexNine = line.rfind("nine")
	indices = np.array([-1, index1, index2, index3, index4, index5, index6, index7, index8, index9, -1, indexOne, indexTwo, indexThree,indexFour, indexFive, indexSix, indexSeven,indexEight,indexNine])





	onesPlace = list(indices).index(max(indices))
	print(onesPlace)
	if onesPlace > 10: 
		onesPlace -= 10
	#onesPlace = indices.index(max(indices))

	# print(line.strip())

	# ints = [int(s) for s in re.findall(r'\d', line)]
	# print(ints)

	calibration = tensPlace*10 + onesPlace
	print(calibration)
	total += calibration

print(total)

