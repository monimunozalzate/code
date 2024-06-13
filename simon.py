# Pedir al usuario que ingrese una cadena
cadena = input("Ingresa una cadena: ")


    # variable primer caracter (índice 0) y variable penúltimo caracter (índice -2)
    primer_caracter = cadena[0]
    penultimo_caracter = cadena[-2]

    # Concatenar los dos caracteres y mostrar el resultado
    resultado = primer_caracter + penultimo_caracter
    print("El resultado de concatenar el primer y penúltimo caracter es:", resultado)
