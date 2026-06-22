from bs4 import BeautifulSoup
import requests,re
URL="https://en.wikipedia.org/wiki/Czech_Republic_national_football_team"
URL_wiki = "https://en.wikipedia.org"
HEADERS = {
    "User-Agent": "Mozilla/5.0"
    }

PLAYER_ROLES = ['GK','FW','DF','MF',]

def get_country_name(country_tag):
    country_string = str(country_tag)
    if re.search(r'Flag_of_(\w+).',country_string):
        country = re.search(r'Flag_of_(\w+).',country_string).group(1)
    else:
        country = "Unattached"
    return country

def process_players(players):
    players_list = []
    player_dic = {}
    for player in players:
        player_details = player.find_all('td')
        player_number = player_details[0].get_text().replace('\n',"").strip()
        # current squad would have player number in the first item, while recent call up don't have.
        if player_number in PLAYER_ROLES:
           break
        else:
            player_dic ={'player':player.find('th').get_text().replace('\n',"").strip(),
                        'number':player_number,
                        'position':player_details[1].get_text().replace('\n',"").strip(),
                        'birth_age':player_details[2].get_text().replace('\n',"").strip(),
                        'caps':player_details[3].get_text().replace('\n',"").strip(),
                        'goals':player_details[4].get_text().replace('\n',"").strip(),
                        'play_in':get_country_name(player_details[5]),
                        'club':player_details[5].get_text().replace('\n',"").strip(),
                        }
            players_list.append(player_dic)

    return players_list

def get_all_players(soup):
    players = soup.find_all(class_="nat-fs-player")
    return players

def create_soup(url):
    page_content = requests.get(url,headers = HEADERS)
    soup = BeautifulSoup(page_content.text, 'html.parser')
    return soup

def get_team_squad(url):
    url = URL_wiki+url
    soup = create_soup(url)
    players = get_all_players(soup)
    players_list = process_players(players) 

    return players_list

# def main():
#     soup = create_soup(URL)
#     players = get_all_players(soup)
#     players_list = process_players(players)
#     print('finish!')

# main()