x = int(input("Digite o primeiro número: "))

while True:
    print("1. Adição.")
    print("2. Subtração.")
    print("3. Multiplicação.")
    print("4. Divisão.")
    print("5. Exponenciação.")
    print("6. Radiciação.")
    y = input("Digite a operação (1/2/3/4/5/6): ")

    if y in ('1', '2', '3', '4','5','6'):
        try:
            z = int(input("Digite o segundo número: "))
        except ValueError:
            print("Inválido. Digite um número.")
            continue

        if y == '1':
            print(x, "+", z, "=", (x+z))
            v = (x+z)
        elif y == '2':
            print(x, "-", z, "=", (x-z))
            v = (x-z)
        elif y == '3':
            print(x, "*", z, "=", (x*z))
            v = (x*z)
        elif y == '4':
            print(x, "/", z, "=", (x/z))
            v = (x/z)
        elif y == '5':
            print(x, "^", z, "=", (x**z))
            v = (x**z)
        elif y == '6':
            print(z, "√", x, "=", (x**(1/z)))
            v = (x**(1/z))

        w = input("Continuar? (y/n):")
        if w == ("n"):
            break
        elif w == ("y"):
            x = v
            print ("Primeiro número: ",x)
