import unicodedata
import sys
import json
#import os
allItems = []
#function to find chars
def UnicodeLookup(char):
    #for every Unicode character in the range of usable characters
    for i in range(0x110000):
        #character wanted
        character = chr(i)
        #name of character (description of what it is)
        name = unicodedata.name(character, "")
        #if character wanted
        if ''+char.upper() in f"{name}":
            #create item object
            item = {"Icon": "char", "Title": f"{character}", "Subtitle": f"{name}"}
            #append to all array
            allItems.append(item)
    #convert to JSON
    json_string = json.dumps(allItems)
    #jsonDumpPath = os.getcwd()[:-14]+"\JSON data\chars.json"
    #with open(jsonDumpPath, 'w') as file:
    #   file.write(json_string)
    #output JSON
    print(json_string)
#running function with argument
UnicodeLookup(sys.argv[1])
