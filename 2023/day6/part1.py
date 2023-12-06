file = open('input.txt', 'r')
lines = file.readlines()

times = lines[0].split(":")[1].split(" ")
times = [i.strip() for i in times if i]

distances = lines[1].split(":")[1].split(" ")
distances = [i.strip() for i in distances if i]

print(times)
print(distances)

#max_distance = 0
win_options = []

for x in range(len(times)):
	winning_holds = []
	print(times[x])
	time_held = int(times[x])

	for speed in range(time_held+1):
		distance = speed * (time_held - speed)
		#print(distance)
		if distance > int(distances[x]):
			winning_holds.append(speed)
	#print(winning_holds)
	win_options.append(len(winning_holds))

print(win_options)

total = 1
for win in win_options:
	total = total * win

print(total)