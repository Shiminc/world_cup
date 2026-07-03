import pandas as pd
import numpy as np
import json,os, re, math

PATH = os.getcwd() + "/data/birth_place_color.csv"

def structure_json_dict(row):
    return {'birth_place': row['birth_place'],
             'count': row['count'],
             'color': row['color']}    
def main():    
    data = pd.read_csv(PATH)
    data_in_json = data.apply(structure_json_dict, axis=1).tolist()
    with open(os.getcwd() + "/data/birth_place_color.json",'w') as file:
        json.dump(data_in_json,file)
    
    print('finish')
main()