num = int(input('Digite um número a ser convertido: \n'))
base = int(input('''Escolha a base da conversão:
Para binário, digite 1
Para octal, digite 2
Para hexadecimal, digite 3
Sua escolha: \n'''))

if base in (0,1,2,3):
    if base == 0:
        quit()
    elif base == 1:
        print('Conversão para binário... Convertido para binário: ', bin(num))
    elif base == 2:
        print('Conversão para octal... Convertido para octal: ', oct(num))
    elif base == 3:
        print('Conversão para hexadecimal... Convertido para hexadecimal: ', hex(num))
    else:
        print('Por favor, escolha uma das três opções.')