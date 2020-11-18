mot = input("Ecris un mot :")

def solution(mot):
    lettres = list(mot)
    lettres.reverse()
    mirror ="".join(lettres)
    return mirror


resultat =solution(mot)
print("le mot à l'envers est "+resultat+" !")
