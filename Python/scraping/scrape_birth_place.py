from bs4 import BeautifulSoup
import requests,re
import json,os

URL = "https://football.fandom.com/wiki/"
HEADERS = {
    "User-Agent": "Mozilla/5.0"
    }

PATH = os.getcwd() + "/data/player.json"

def create_soup(url):
    page_content = requests.get(url,headers = HEADERS)
    soup = BeautifulSoup(page_content.text, 'html.parser')
    return soup

def scrape_birth_place(name_string):
    url = URL + name_string
    soup = create_soup(url)
    return soup

def main():
    with open(PATH, 'r') as json_file:
        data = json.load(json_file)
    soup = scrape_birth_place(data[0])
    print('finish')

main()