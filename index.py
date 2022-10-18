from math import (factorial,sqrt)

def sinDecimal(numero):
    if (numero == 6.0):
        return (6)

def imprimir (caso, resultado):
    print ("Variable: "+ str(caso) + " | Resultado: " + str(resultado))

imprimir(0, factorial(factorial(0)+factorial(0)+factorial(0)))
imprimir(1, factorial(1 + 1 + 1))
imprimir(2, 2 + 2 + 2)
imprimir(3, 3 * 3 - 3)
imprimir(4, sinDecimal(sqrt(4 * 4) + sqrt(4)))
imprimir(5, sinDecimal(5 + 5 / 5))
imprimir(6, 6 + 6 - 6)
imprimir(7, sinDecimal(7 - 7 / 7))
imprimir(8, sinDecimal(8 - sqrt(sqrt(8 + 8))))
imprimir(9, sinDecimal(sqrt(9) + 9 / sqrt(9)))







