import json #Bilioteca json
import requests

def trivia_fetch (num):
  response = requests.get("http://numbersapi.com/"+ str (num) + "?json")
  print(response)
  trivia =  json.loads(response.content)
  return print (trivia)

trivia_fetch(119)