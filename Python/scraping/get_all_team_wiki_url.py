from bs4 import BeautifulSoup
import requests,re
from Python.scraping.scrape_one_country import get_team_squad
import json

URL = "https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_squads"
HEADERS = {
    "User-Agent": "Mozilla/5.0"
    }

def extract_url(soup):
    link_tags = soup.find_all(href=re.compile("_national_(football|soccer)_team"))

    links =[]
    for link in link_tags:
        links.append(link['href'])
    
    # get rid of duplicates
    links = list(dict.fromkeys(links))
    return links

def create_soup(url):
    page_content = requests.get(url,headers = HEADERS)
    soup = BeautifulSoup(page_content.text, 'html.parser')
    return soup


def get_all_team_players(links):
    teams = []
    for link in links:
        country = re.search(r'(\w+)_national_(football|soccer)_team', link).group(1)
        team = {'country':country, 'squad':get_team_squad(link)}
        teams.append(team)

    return teams

def main():
    soup = create_soup(URL)
    links = extract_url(soup)
    teams = get_all_team_players(links)
    with open('all_squads.json','w') as file:
            json.dump(teams,file)
    print('finish!')

main()