import math # importa a biblioteca "math."
print("Vamos calcular nossas vendas!")
while True: # não estava no código original mas eu queria melhorar o código. cria um loop
    while True: # there has to be an easier or less clunky way to do this by the way, but I'm not aware
        try:
            quantidade_pizzas_vendidas = int(input("Quantas pizzas vendidas?: ")) # pede um valor integer para o tanto de pizzas vendidas
            break # se sucedir, sai do loop
        except: # se der erro,
            print("Valor inválido!") # imprime esta mensagem e pede um valor novamente
    while True: # mesma coisa que acima, mas
        try:
            valor_venda_pizza = input("Qual valor de venda de cada pizza?\nR$:")
            valor_venda_pizza = valor_venda_pizza.replace(',','.') # troca todas as "," no código para "." (because the user is always wrong)
            valor_venda_pizza = float(valor_venda_pizza) # transforma o valor acima (string) em float
            break
        except:
            print("Valor invalido!")
    while True: # mesma coisa que acima
        try:
            custo_pizza = input("Qual o custo de produção?\nR$:")
            custo_pizza = custo_pizza.replace(',','.')
            custo_pizza = float(custo_pizza)
            break
        except:
            print("Valor invalido!")
    lucro_acumulado = quantidade_pizzas_vendidas * valor_venda_pizza # o lucro acumulado é o tanto de pizzas vendidas vezes o preço das pizzas
    liquido = lucro_acumulado - custo_pizza # o valor total é o lucro acumulado menos o custo de produzir as pizzas
    print(f"O valor do lucro é de: R$ {liquido:.2f}") # imprime o valor liquido
    meta_financeira_liquida = float(input("Qual a meta de lucro desejada?\nR$:")) # pede ao usuário a meta que ele ou ela ou elu desejava atingir
    if liquido <= 0: # se o valor do líquido for menor que 0
        print("\nErro no valor da pizza.")
        print("Ajuste os valores e tente novamente.") # erro no código, manda o usuário ao começo do código
    else:
        lucro = liquido - meta_financeira_liquida # define o lucro como o total ganho menos a meta
        porcentagem_lucro = lucro / meta_financeira_liquida * 100 # transforma o acima em porcentagem
        print("\nEm resumo, teremos: ")
        if lucro >= 0: # se o lucro for mais que 0 reais
            print(f"Meta atingida!") # imprime o valor ganho e a porcentagem a mais que é do lucro
            print(f"R${lucro:.2f} de lucro em total, sendo isso {porcentagem_lucro:.0f}% da meta do lucro.")
        else: # caso contrário
            print(f"Meta não atingida.")
            lucro_faltante = meta_financeira_liquida - liquido # define o valor faltante como valor da meta menos o total adquirido
            pizza_para_vender = lucro_faltante / custo_pizza # define o tanto de pizzas faltantes para vender como o valor acima dividido pelo custo das pizzas
            pizzas_necessarias = math.ceil(pizza_para_vender) # arredonda o número para cima
            total_faltante = pizzas_necessarias * custo_pizza # define o preço que deve arrecadar como o tanto de pizzas faltantes vezes o preço de cada uma
            print(f"Faltam {pizzas_necessarias} pizzas para vender, ou R${total_faltante:.2f} em total. Faltam {abs(porcentagem_lucro):.0f}% da meta.") # imprime o acima
        break # sai do primeiro loop do código
