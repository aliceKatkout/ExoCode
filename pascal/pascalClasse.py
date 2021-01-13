triangle = []
lineNumber = 10

for j in range(lineNumber):
    newline = []
    for i in range(len(triangle)+1):
        if i == 0 or i == len(triangle):
            newline.append(1)
        else:
            newline.append(triangle[len(triangle)-1][i-1] + triangle[len(triangle)-1][i])
    triangle.append(newline)

for line in triangle :
    spaceNumber = lineNumber - len(line)
    for i in range(spaceNumber):
        print(" ",end="")
    for element in line :
        print (element,end=' ')
    print()
