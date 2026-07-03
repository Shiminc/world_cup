import pandas as pd
import numpy as np
import json,os, re, math

PATH = os.getcwd() + "/data/all_squads.json"
entity_path = os.getcwd() + "/data/entity.csv"
league_path = os.getcwd() + "/data/league.json"
birthplace = pd.read_csv(os.getcwd()+"/data/wc2026_players_updated.csv")

with open(league_path, 'r') as json_file:
        league_data = json.load(json_file)

        
def determine_league(club_name):
    if club_name in league_data['premier_league']:
        league = 'Premier_League'
    elif club_name in league_data['la_liga']:
        league = 'La_Liga'
    elif club_name in league_data['ligue_1']:
        league = 'Ligue_1'
    elif club_name in league_data['serie_A']:
        league = 'Serie_A'
    elif club_name in league_data['bundesliga']:
        league = 'Bundesliga'
    else:
        league = 'non_big_five'
    return league

def extract_name(name_string):
    # search captain related string 
    if re.search(r'\(.*',name_string):
        captain_string = re.search(r'\(.*',name_string).group(0)
        name = name_string.replace(captain_string,"")
    else:
        name = name_string
    return name
def extract_age(birth_age_string):
    if re.search(r'[0-9]{2}\)$',birth_age_string):
        age = re.search(r'([0-9]{2})\)$',birth_age_string).group(1)
    else:
        age = 0
    return int(age)

def rank_play_in(play_in_string, country_df):
    ranking = country_df['play_in'].value_counts()
    play_in_rank = ranking[play_in_string]
    return play_in_rank


def reorganise_dataframe(data_df):
    
    for i in range(data_df.shape[0]):
        data = pd.DataFrame(data_df.iloc[i]['squad'])
        data['play_in'] = data['play_in'].apply(lambda x:x.rstrip('_'))
        data['play_in'] = data['play_in'].apply(lambda x:x.lstrip('the_'))
        data['play_in_rank'] = data['play_in'].apply(rank_play_in, country_df=data)
        data['country'] = data_df.iloc[i]['country']
        data['local'] = data['play_in'] == data['country']
        # "birth_age": "(2000-02-03) 3 February 2000 (age\u00a026)",
        data['age'] = data['birth_age'].apply(extract_age)
        data['player'] = data['player'].apply(extract_name)

        data['club'] = data['club'].apply(lambda x:x.replace('[a]',''))

        data['league'] = data['club'].apply(determine_league)
        data.sort_values(by=['play_in_rank','play_in'],ascending=False,inplace=True)
        if i==0:
            df_total = data
        else:
            df_total = pd.concat([df_total,data])

    df_total = match_entity(df_total)
    
    return df_total.fillna("") 

def calculate_shannon_diversity_index(data):
#https://www.statology.org/shannon-diversity-index/

    total_number_player = data.shape[0]     
    play_in_df = data['play_in'].value_counts().to_frame()
    play_in_df.reset_index(inplace=True)
    play_in_df['proportion']=play_in_df['count']/total_number_player
    play_in_df['index_part']= play_in_df['proportion']*play_in_df['proportion'].apply(math.log)
    return -sum(play_in_df['index_part'])


def reorganise_to_json(df):
    json_format = []
    for country in df.country.unique():
        data = df[df['country']==country]
        index = calculate_shannon_diversity_index(data)
        proportion_local = (data['local']).mean()
        proportion_big_five = sum(data['league']!='non_big_five')/data.shape[0]
        country_dic = {
            'country': country,
            'diversity_index': index,
            'proportion_local':proportion_local,
            'proportion_big_five':proportion_big_five,
            'mean_age': data['age'].mean(),
            'squad': data.to_dict('records')
        }
        json_format.append(country_dic)
    return json_format

def match_entity(df_total):
    entity = pd.read_csv(entity_path)
    return df_total.merge(entity,on='play_in')

def read_json_to_df(path):
    # load the json
    with open(path, 'r') as json_file:
        data = json.load(json_file)
    
    # read into the df
    data_df = pd.DataFrame(data)

    # reorganised data and incorporate country into variable

    data = reorganise_dataframe(data_df)

    return data


def main():
    data = read_json_to_df(PATH)
    play_in_numbers = pd.DataFrame(data.play_in.value_counts()).reset_index()
    # play_in_numbers.to_json('trial.json',orient='records')
    # data.to_csv('players.csv', encoding="utf-8-sig")
    # data.to_json(os.getcwd() + "/data/processed_data.json",orient='records')
    data = data.merge(birthplace,on='player')
    
    data_json = reorganise_to_json(data)
    with open(os.getcwd() + "/data/data.json",'w') as file:
        json.dump(data_json,file)
    print('finish')

main()
