valor = float(input("Digite o valor do produto."))
def v(valor):
    if valor >= 1000:
        return "Caro"
    else:
        return "Barato"
resultado = v(valor)
print("O preço está",resultado,".")
