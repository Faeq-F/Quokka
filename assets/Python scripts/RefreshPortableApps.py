#used modules
import os
import time
import sys
import json
#allows working path to be scanned
from os import listdir
#update function
def update(PortablePath, JSONpath):
    #list with all apps
    AllAppsFolders = listdir(PortablePath)
    #all executable files for apps (.exe files with name) - ([directory to executable file,name of file without file extention],{next item})
    executables = []
    #all files in portable apps directory
    files = []
    #adding items to above lists
    # r=root, d=list of directories, f = list of files
    for r, d, f in os.walk(PortablePath):
        for file in f:
            #checks if the file is executable
            if file[-4:] == '.exe' or file[-4:] == '.jar' or file[-4:] == '.py' or file[-4:] == '.ps' or file[-4:] == '.bat':
                #adds the directory to the file to the sublist
                file = os.path.join(r, file)
                #checking if the executable is within the root folder for the application data
                splitstring = file.split('\\')
                length = len(splitstring)
                #anything more than five is not in application root folder
                if int(length) > 5:
                    #skips
                    time.sleep(0)
                else:
                    #adds directory to sublist
                    filename = splitstring[len(splitstring) - 1]
                    foldername = splitstring[len(splitstring) - 2]
                    item = foldername + ' (' + filename + ')'
                    #removes file extention and adds directory and file name to sublist
                    newlist = (item, file)
                    #adds executable to list
                    executables.append(newlist)
            else:
                #skips if not an executable
                time.sleep(0)
    #creating item object
    list = [{"Title": x[0], "Subtitle": x[1], "Icon": "PortableApp"} for x in executables]
    #turning to JSON
    dataInJSON = json.dumps(list)
    #writing index to file
    with open(JSONpath, 'w') as f:
        f.write(dataInJSON)
#formatting argument given
path = r'%s' % sys.argv[1]
#running function
update(path, sys.argv[2])
