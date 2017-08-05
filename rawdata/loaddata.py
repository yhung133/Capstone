import csv
import sys, os

app_path = "/Users/annabellehuang/Desktop/MyApp"
sys.path.append(app_path)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")
from racialjustice.models import Arrest

with open('arrests.csv','rb') as csvfile:
    csvreader = csv.reader(csvfile, delimiter=',')
    csvreader.next()
    i = 1
    
    for row in csvreader:
        arrest = Arrest()
        arrest.arrestee_id = row[0]
        arrest.arrest_date = row[1]
        arrest.arrest_time = row[2]
        arrest.arrest_code = row[3]
        arrest.arrest_location = row[4]
        arrest.crime_code = row[5]
        arrest.crime_code_description = row[6]
        arrest.crime_code_category = row[7]
        arrest.crime_code_category_description = row[8]
        arrest.weapon_code_1 = row[9]
        arrest.weapon_code_2 = row[10]
        arrest.weapon_code_3 = row[11]
        arrest.race = row[12]
        arrest.sex = row[13]
        arrest.age = row[14]
        arrest.employment_code = row[15]
        arrest.arrest_officer_code = row[16]
        arrest.result = row[17]
        arrest.jurisdiction = row[18]
        arrest.more_than_one_charge = row[19]
        arrest.mvo = row[20]
        
        try:
            arrest.save()
        except:
            print "there was a problem with line", i
        
        i += 1
        
        
    
        
        
        
        
        
        


