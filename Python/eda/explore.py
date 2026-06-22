import pandas as pd
import numpy as np
import json,os

PATH = os.getcwd() + "/data/all_squads.json"

def reorganise_dataframe(data_df):
    
    for i in range(data_df.shape[0]):
        data = pd.DataFrame(data_df.iloc[i]['squad'])
        data['country'] = data_df.iloc[i]['country']
        if i==0:
            df_total = data
        else:
            df_total = pd.concat([df_total,data])
    return df_total 

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
    print('finish')

main()
