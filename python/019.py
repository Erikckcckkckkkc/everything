participantes = ["Carlos", "Ana", "Pedro", "Beatriz"]
horarios = ["15H", "9H", "12H", "18H"]
notas = [15, 9, 12, 18]
titulos = ["The Great Gatsby", "To Kill a Mockingbird", "Alice's Adventures in Wonderland", "1984", "Wuthering Heights"]

participantes = participantes.sort()
print("Participantes ordenados de A a Z:", participantes)
participantes = participantes.sort(reversed=True)
print("Participantes ordenados de Z a A:", participantes)

print("Horários ordenados:", sorted(horarios))

print("Notas ordenadas:", sorted(notas))

print("Títulos de livros ordenados:", sorted(titulos))
