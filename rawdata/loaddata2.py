import csv
import json
import io

csv_path = 'arrests.csv'
json_path = 'arrests.json'
data = []


with open(csv_path, 'r') as csvfile:
    csvreader = csv.reader(csvfile, delimiter = ',')
    csvreader.next()
    i = 1
    for row in csvreader:
        tempdict = {}
        tempdict["model"] = "racialjustice.arrest"
        tempdict["pk"] = i
        i += 1
        fields = ["arrestee_id", "arrest_date", "arrest_time", "arrest_code", "arrest_location",
                  "crime_code", "crime_code_description", "crime_code_category", "crime_code_category_description", "weapon_code_1", "weapon_code_2", "weapon_code_3",
                  "race", "sex", "age", "employment_code", "arrest_officer_code", "result", "jurisdiction", "more_than_one_charge", "mvo"]
        tempdict["fields"] = {}
        for j in range (0,len(fields)):
            if fields[j] == "arrest_date":
                date = row[j].replace('/', '.').split('.')
                for k in range(0,3):
                    if len(date[k]) == 1:
                        date[k] = '0' + date[k]
                row[j] = date[2] + '-' + date[0] + '-' + date[1]
            if fields[j] == "age" or fields[j] == "arrest_officer_code":
                if row[j] == '':
                    row[j] = 0
            tempdict["fields"][fields[j]] = row[j]
        data.append(tempdict)

    print len(data)

with io.open(json_path, 'w', encoding = 'utf-8') as jsonfile:
    json_str = json.dumps(data, indent=4, sort_keys=True, separators=(',',':'), ensure_ascii=False)
    if isinstance(json_str, str):
        try:
            json_str = json_str.decode('utf-8')
        except:
            json_str = json_str.decode('latin-1')
    jsonfile.write(json_str)
        
        
    
    
    
