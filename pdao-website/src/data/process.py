import pandas as pd
import os.path
import math
import json
readFrom = "./0410.xlsx"
writeTo = "./teams.json"
df = pd.read_excel(os.path.join(os.path.dirname(__file__), readFrom))
teamList = []
for row in df.iterrows():
    try:
        if math.isnan(float(row[1]["備註"])):
            team = {"name": "", "members": []}
            team["name"] = row[1]["隊伍名稱"]
            team["members"] = [row[1]["隊員1"], row[1]["隊員2"], row[1]["隊員3"]]
            for i, el in enumerate(team["members"]):
                try:
                    if math.isnan(float(el)):
                        del team["members"][i]
                except ValueError:
                    pass
            teamList.append(team)
    except ValueError:
        print(f"Team {row[0]} Some problem!")

with open(os.path.join(os.path.dirname(__file__), writeTo), "w", encoding="utf-8") as writer:
    writer.write(json.dumps(teamList, indent=4, ensure_ascii=False))
