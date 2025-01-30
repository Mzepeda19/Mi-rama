
def addmultiplenumbers(nums):
    return sum(nums)

def multiplymultiplenumbers(nums):
    result = 1
    for num in nums:
        result *= num
    return result

def isiteven(num):
    return num % 2 == 0

def isitaninteger(num):
    return isinstance(num, int)

def main():
    print("Dile hola a la calculadora")

    # Ingresar numeros por el usuario
    user_input = input("Introduce los numeros separados por comas: ")
    
    # Lista de numeros
    try:
        nums_to_add = [float(num) for num in user_input.split(",")]
    except ValueError:
        print("Introduce solo numeros validos.")
        return
    
    print(f"Sumando los numeros {nums_to_add}: {addmultiplenumbers(nums_to_add)}")
    print(f"Multiplicando los numeros {nums_to_add}: {multiplymultiplenumbers(nums_to_add)}")
    
    # Par o impar
    num_to_check = input("Introduce un numero para comprobar si es par y entero: ")
    
    try:
        num_to_check = float(num_to_check)
    except ValueError:
        print("Introduce un numero valido.")
        return
    
    print(f"El numero {num_to_check} es par?: {isiteven(num_to_check)}")
    print(f"El numero {num_to_check} es un entero?: {isitaninteger(num_to_check)}")

if __name__ == "__main__":    
    main()
