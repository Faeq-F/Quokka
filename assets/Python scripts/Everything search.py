import ctypes
import os
import sys
import json
#defines
EVERYTHING_REQUEST_FILE_NAME = 0x00000001
EVERYTHING_REQUEST_PATH = 0x00000002
EVERYTHING_REQUEST_FULL_PATH_AND_FILE_NAME = 0x00000004
EVERYTHING_REQUEST_EXTENSION = 0x00000008
EVERYTHING_REQUEST_SIZE = 0x00000010
EVERYTHING_REQUEST_DATE_CREATED = 0x00000020
EVERYTHING_REQUEST_DATE_MODIFIED = 0x00000040
EVERYTHING_REQUEST_DATE_ACCESSED = 0x00000080
EVERYTHING_REQUEST_ATTRIBUTES = 0x00000100
EVERYTHING_REQUEST_FILE_LIST_FILE_NAME = 0x00000200
EVERYTHING_REQUEST_RUN_COUNT = 0x00000400
EVERYTHING_REQUEST_DATE_RUN = 0x00000800
EVERYTHING_REQUEST_DATE_RECENTLY_CHANGED = 0x00001000
EVERYTHING_REQUEST_HIGHLIGHTED_FILE_NAME = 0x00002000
EVERYTHING_REQUEST_HIGHLIGHTED_PATH = 0x00004000
EVERYTHING_REQUEST_HIGHLIGHTED_FULL_PATH_AND_FILE_NAME = 0x00008000
#location of SDK files from argument
location = sys.argv[2]
location = location[:-14]+"\External res\Everything-SDK\dll\Everything64.dll"
#dll imports
try:
    #try loading 64 bit one
    everything_dll = ctypes.WinDLL(location)
except:
    #if error, load 32 bit one
    location = location[:-16]+"Everything32.dll"
    everything_dll = ctypes.WinDLL(location)
#getting the date modified data
everything_dll.Everything_GetResultDateModified.argtypes = [ctypes.c_int,ctypes.POINTER(ctypes.c_ulonglong)]
#getting the size data
everything_dll.Everything_GetResultSize.argtypes = [ctypes.c_int,ctypes.POINTER(ctypes.c_ulonglong)]
#getting the file name data
everything_dll.Everything_GetResultFileNameW.argtypes = [ctypes.c_int]
everything_dll.Everything_GetResultFileNameW.restype = ctypes.c_wchar_p
#setup search
everything_dll.Everything_SetSearchW(sys.argv[1])
everything_dll.Everything_SetRequestFlags(EVERYTHING_REQUEST_FILE_NAME | EVERYTHING_REQUEST_PATH)
#execute the query
everything_dll.Everything_QueryW(1)
#get the number of results
num_results = everything_dll.Everything_GetNumResults()
#create buffers
filename = ctypes.create_unicode_buffer(260)
#show results
allItems = []
#for every result
for i in range(num_results):
    #get the full path to that file / folder
    everything_dll.Everything_GetResultFullPathNameW(i,filename,260)
    location = '{}'.format(ctypes.wstring_at(filename))
    #go through every character in the location
    name = ''
    #backward to find folder its in
    for j in reversed(range(0,len(location))):
        #found first folder
        if location[j] == '\\':
            #ends loop
            break
        #if the folder is not found then the character is part of folder/file name
        else:
            name = name+location[j]
            location = location[:-1]
    name = name[::-1]
    #creating item object
    item = {"Icon":"File", "Title": '{}'.format(name), "Subtitle": '{}'.format(location)}
    #adding to all array
    allItems.append(item)
    #turning into JSON
json_string = json.dumps(allItems)
#path to write data if needed
jsonDumpPath = sys.argv[2][:-14]+"\JSON data\Fsearch.json"
#with open(jsonDumpPath, 'w') as file:
    #file.write(json_string)
    #output data
print(json_string)
