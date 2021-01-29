input = open("input7.txt").readlines()

dictio = {}

for line in input :
    line = line.strip().split(" bags contain ")
    tabColour =[]
    for element in line[1].split(", "):
        if element[-1] ==".":
            element = element[:-1]
        if "bags" in element:
            element = element[:-5]
        elif "bag" in element:
            element = element[:-4]
        tabColour.append(element[2:])
        dictio[line[0]]= tabColour

dictio.pop("shiny gold")

vide=[]

def quicontient(color):
    tabshiny=[]
    for key,value in dictio.items():
        if color in value:
            tabshiny.append(key)
            vide.append(key)
    for chose in tabshiny:
        quicontient(chose)
    return tabshiny

quicontient("shiny gold")

result = len(set(vide))
print(result)
