import unicodedata 
import sys
import json
allItems = []
def UnicodeLookup(char):
    for i in range(0x110000): 
        character = chr(i) 
        name = unicodedata.name(character, "")
        if ' '+char.upper() in f"{name}":
            item = [f"{character}",f"{name}"]
            allItems.append(item)
            json_string = json.dumps(allItems)
            f = open("chars.json", "w")
            f.write(json_string)
            f.close()

UnicodeLookup(sys.argv[1])
