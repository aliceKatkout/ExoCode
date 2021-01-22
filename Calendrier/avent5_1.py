import math

input = open('input5.txt').read()
boardingPass = input.split("\n")
boardingPass.pop()


def seatId (element) :
    rowMin = 0
    rowMax = 127
    row = 0
    for i in range(6):
        if element[i] == "F":
            rowMax = math.floor(rowMax-(rowMax-rowMin)/2) #63
        else :
            rowMin = math.ceil(rowMax-(rowMax-rowMin)/2) #64
    if element[6]== "F":
        row = rowMin
    else :
        row = rowMax

    columnMin = 0
    columnMax = 7
    column = 0
    for j in range(7, 9):
        if element[j] == "L":
            columnMax = math.floor(columnMax-(columnMax-columnMin)/2) #63
        else :
            columnMin = math.ceil(columnMax-(columnMax-columnMin)/2) #64
    if element[9]== "L":
        column = columnMin
    else :
        column = columnMax

    seatId = row*8 + column
    return seatId

def higherSeatId(array):
    tabId = []
    for element in array:
        tabId.append(seatId(element))
    return max(tabId)


print(higherSeatId(boardingPass))
