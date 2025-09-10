
numero_secreto = 40
rodada = 1
tentativas = 3
print("**********************************************")
print("******BEM VINDO AO JOGO DA ADIVINHAÇÃO!!******")
print("**********************************************")
print()
while rodada <= tentativas:
    print("Rodada", rodada,"de", tentativas,".")
    chute = input("Digite seu número: ")
    chute = int(chute)
    print("Você digitou", chute)

    if chute > numero_secreto:
        print("Muito alto!")
        print()
        rodada = rodada + 1
    elif chute < numero_secreto:
        print("Muito baixo!")
        print()
        rodada = rodada + 1
    else:
        print("Acertou!")
        print()
        print("Você acertou em", rodada, "tentativas.")
        break
print("O número correto era", numero_secreto,".")
print("Fim do jogo.")