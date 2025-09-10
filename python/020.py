import random
from random import choice
from time import sleep

choices_list = ["pedra", "papel", "tesoura"]
print("""
COMPUTADOR: Vamos jogar Pedra, Papel, Tesoura!
As regras são as seguintes:
- Papel vence Pedra e perde para Tesoura
- Pedra vence Tesoura e perde para Papel
- Tesoura vence Papel e perde para Pedra
""")

computer = random.choice(choices_list)
player = str(input("Você escolhe pedra, papel ou tesoura? \n")).lower()

print("JO")
sleep(0.50)
print("KEN")
sleep(0.5)
print("PÔ!!!")

def judge(computer, player):
    print(
f"""
Jogador: {player}
Computador: {computer}
"""
)

### Exceptions:
if player != "pedra" and player != "papel" and player != "tesoura":
    print(
f"{player} não é uma opção válida. Escolha pedra, papel ou tesoura!"
)

if player != "pedra" and player != "papel" and player != "tesoura":
    print(
f"{player} não é uma opção válida. Escolha pedra, papel ou tesoura!"
)

if computer == player:
    print("Empate. Vamos jogar novamente!")

if player == "pedra" and computer == "tesoura": # Pedra x Tesoura: Pedra
    print("Pedra vence tesoura. Jogador ganhou.")

if player == "tesoura" and computer == "pedra": # Tesoura x Pedra: Pedra
    print("Pedra vence tesoura. Computador ganhou.")

if player == "papel" and computer == "pedra": # Papel x Pedra: Papel
    print("Papel vence pedra. Jogador ganhou.")

if player == "pedra" and computer == "papel": # Pedra x Papel: Papel
    print("Papel vence pedra. Computador ganhou.")

if player == "papel" and computer == "tesoura": # Papel x Tesoura: Tesoura
    print("Tesoura vence papel. Computador ganhou.")

if player == "tesoura" and computer == "papel": # Tesoura x Papel: Tesoura
    print("Tesoura vence papel. Jogador ganhou.")

judge(choice(choices_list), player)