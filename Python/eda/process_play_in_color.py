import pandas as pd
import numpy as np
import json,os, re, math

play_in_color_path = os.getcwd() + "/data/play_in_color.json"
play_in_total_path = os.getcwd() + "/data/play_in_total.json"

# with open(play_in_color_path, 'r') as json_file:
#         play_in_color_data = json.load(json_file)

# with open(play_in_total_path, 'r') as json_file:
#         play_in_total_data = json.load(json_file)

def main():
    play_in_color_data=pd.read_json(play_in_color_path)
    play_in_color_data.columns = ['play_in','color']
    play_in_total_data=pd.read_json(play_in_total_path)
    data = play_in_color_data.merge(play_in_total_data,on='play_in',how='left')
    data = data.fillna(0)
    data.to_json(os.getcwd() + "/data/play_in_color_data.json",orient='records')
    print('finish')
main()