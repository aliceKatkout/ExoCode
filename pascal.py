numbers = [0,1,0]
pascal =[numbers]



def pascaline(e) :
    newLine =[]
    newLine.append(0)
    for i in range(len(e)-1):
        newNumber = e[i] + e[i+1]
        newLine.append(newNumber)

    newLine.append(0)
    pascal.append(newLine)
    print newLine

    return pascal


pascaline(numbers)
print pascal
derniereLigne = pascal[-1]
print derniereLigne
pascaline(derniereLigne)
print pascal
pascaline(derniereLigne)
print pascal
