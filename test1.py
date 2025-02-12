import subprocess

# Boilerplate function - include this in every test below!
def prepare_and_assert(input_array, output_array):
    # Prepare Variables
    expected_output = '\n'.join(output_array)

    # Get Actual Output 
    print(f"Running with inputs: {input_array}")  # Verifica que los inputs sean correctos
    output_data = subprocess.run(['node', 'index.js'] + input_array, stdout=subprocess.PIPE)
    output_bytes = output_data.stdout.strip()
    output_string = output_bytes.decode("utf-8")

    # Test if Expected Output is found in Actual Output
    print(f"Expected output: {expected_output}")  # Imprime la salida esperada
    print(f"Actual output: {output_string}")  # Imprime la salida real

    assert expected_output in output_string

# Test 1
def test_task_one():
    print("Running Test 1...")  # Verifica si llega a esta prueba
    # Inputs
    input_array = [
        '1'
    ]
    # Outputs
    output_array = [
        'hello: world'
    ]
    prepare_and_assert(input_array, output_array)

# Test 2
def test_task_two():
    print("Running Test 2...")  # Verifica si llega a esta prueba
    # Inputs
    input_array = [
        '2',
        'tomato',
        'sauce'
    ]
    # Outputs
    output_array = [
        'tomato: sauce'
    ]
    prepare_and_assert(input_array, output_array)

# Test 3
def test_task_three():
    print("Running Test 3...")  # Verifica si llega a esta prueba
    # Inputs
    input_array = [
        '3',
        'pizza',
        'pineapple'
    ]
    # Outputs
    output_array = [
        'pizza: pineapple'
    ]
    prepare_and_assert(input_array, output_array)

# Test 4
def test_task_four():
    print("Running Test 4...")  # Verifica si llega a esta prueba
    # Inputs
    input_array = [
        '4',
        'Queens',
        'Brooklyn'
    ]
    # Outputs
    output_array = [
        'Booking a taxi from Queens to Brooklyn.'
    ]
    prepare_and_assert(input_array, output_array)

# Test 5
def test_task_five():
    print("Running Test 5...")  # Verifica si llega a esta prueba
    # Inputs
    input_array = [
        '5',
        '3',
        'Gigi',
        'Sam',
        'Jack'
    ]
    # Outputs
    output_array = [
        "[ 'Gigi', 'Sam', 'Jack' ]"
    ]
    prepare_and_assert(input_array, output_array)

# Ejecutar las pruebas
test_task_one()
test_task_two()
test_task_three()
test_task_four()
test_task_five()