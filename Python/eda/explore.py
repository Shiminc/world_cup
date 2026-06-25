import pandas as pd
import numpy as np
import json,os

PATH = os.getcwd() + "/data/all_squads.json"
entity_path = os.getcwd() + "/data/entity.csv"


def reorganise_dataframe(data_df):
    
    for i in range(data_df.shape[0]):
        data = pd.DataFrame(data_df.iloc[i]['squad'])
        data['play_in'] = data['play_in'].apply(lambda x:x.rstrip('_'))
        data['play_in'] = data['play_in'].apply(lambda x:x.lstrip('the_'))
        data['country'] = data_df.iloc[i]['country']
        data['local'] = data['play_in'] == data['country']
        data.sort_values(by='play_in',inplace=True)
        if i==0:
            df_total = data
        else:
            df_total = pd.concat([df_total,data])

    df_total = match_entity(df_total)
    
    return df_total.fillna("") 

def reorganise_to_json(df):
    json_format = []
    for country in df.country.unique():
        data = df[df['country']==country]
        country_dic = {
            'country': country,
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
    # data.to_csv('players.csv')
    # data.to_json(os.getcwd() + "/data/processed_data.json",orient='records')
    # data_json = reorganise_to_json(data)
    # with open(os.getcwd() + "/data/data.json",'w') as file:
    #     json.dump(data_json,file)
    print('finish')

main()
