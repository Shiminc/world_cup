import pandas as pd
import numpy as np
import json,os, re, math

PATH = os.getcwd() + "/data/all_squads.json"
entity_path = os.getcwd() + "/data/entity.csv"
league_path = os.getcwd() + "/data/league.json"
birthplace_path = os.getcwd() + "/data/birthplaces.geojson"

with open(birthplace_path, 'r') as json_file:
        birthplace_data = json.load(json_file)

def getting_relevant_level(data):
    properties = []
    for feature in data['features']:
            properties.append(feature['properties'])
      
    return pd.DataFrame(properties)    

def extract_birth_country(birth_town_string):
    if re.search(r',[A-Za-z ]+$',birth_town_string):
        birth_country = re.search(r',([A-Za-z ]+$)',birth_town_string).group(1)
    else:
        birth_country = 'Ivory Coast'
   
    return birth_country.lstrip(" ")

def main():
    data = getting_relevant_level(birthplace_data)
    data['birth_country'] =  data['Birth town'].apply(extract_birth_country)
    data.to_csv('players_birthplace.csv')
    print('finish')

main()
