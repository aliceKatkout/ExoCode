input = open('input6.txt').read()
answers = input.split("\n\n")
ans2=[]
i=j=0
while i < len(answers):
    j+= len(set("".join(answers[i].split("\n"))))
    i +=1
print(j)
