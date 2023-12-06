file = open('input.txt', 'r')
lines = file.readlines()

total = 0
lineNum = 0

for line in lines:
	line = line.strip()
	if lineNum == 0:
		seeds = line[line.find(":")+2:len(line)].split(" ")
		seeds = [eval(i) for i in seeds]
		mapped = seeds[:]

	elif line.find(":") > -1:
		# new category about to start
		print(line)
		print(seeds)

		seeds = mapped[:]
		print(seeds)

	elif len(line) > 0:
		mapping = line.split(" ")
		mapping = [eval(i) for i in mapping]

		for x in range(len(seeds)): 
			if seeds[x] >= mapping[1] and seeds[x] < mapping[1] + mapping[2]:
				# print("\n")
				# print("seed " + str(seeds[x]))
				# print(mapping)

				mapped[x] = mapping[0] + (seeds[x] - mapping[1])
				# print("seed " + str(seeds[x]))
				# print("mapping " + str(mapped[x]))
				# print("\n")


	lineNum+= lineNum + 1
	

print(seeds)
print(mapped)

print(min(mapped))