file = open('input.txt', 'r')
lines = file.readlines()

times = lines[0].split(":")[1].split(" ")
times = [i.strip() for i in times if i]

time = ""
for t in times:
	time = time + t
time = int(time)

distances = lines[1].split(":")[1].split(" ")
distances = [i.strip() for i in distances if i]

distance = ""
for d in distances:
	distance = distance + d
distance = int(distance)



winning_holds = []

for speed in range(time+1):
	traveled = speed * (time - speed)
	#print(distance)
	if traveled > distance:
		winning_holds.append(speed)
print(len(winning_holds))
	

# print(win_options)

# total = 1
# for win in win_options:
# 	total = total * win

# print(total)