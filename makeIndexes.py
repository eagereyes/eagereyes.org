#!/usr/bin/python3

from datetime import datetime, timedelta
from os import path, scandir
from json import dump

def deYAML(s):
    s = s.strip()
    s = s[1:-1]
    s = s.replace('\\"', '"')

    return s

def scanDirectory(directory):
    files = []
    with scandir(directory) as it:
        for entry in it:
            if entry.name != 'index.md':
                with open(directory+'/'+entry.name, 'r') as file:
                    o = {'path': directory+'/'+entry.name}
                    line = file.readline() # skip first line
                    line = file.readline()
                    while not line.startswith('---'):
                        parts = line.split(':', 1)
                        if parts[0] == 'title':
                            o['title'] = deYAML(parts[1])
                        elif parts[0] == 'description':
                            o['description'] = deYAML(parts[1])
                        elif parts[0] == 'date':
                            o['date'] = datetime.fromisoformat(parts[1].strip().replace(' ', 'T'))
                        elif parts[0] == 'tags':
                            o['tags'] = parts[1].strip().split(', ')
                            for tag in o['tags']:
                                if tag in tags:
                                    tags[tag].append(o)
                                else:
                                    tags[tag] = [o]
                        elif parts[0] == 'featuredImage':
                            o['featuredImage'] = parts[1].strip()

                        line = file.readline()

                    files.append(o)
                    
                    postYear = o['date'].year
                    if postYear in posts:
                        posts[postYear].append(o)
                    else:
                        posts[postYear] = [o]

                    if directory != 'blog/%d' % postYear and directory != 'zipscribble-maps':
                        print('WRONG YEAR (should be %d): %s' % (postYear, directory+'/'+entry.name))

    return files

tags = {}
posts = {}

with scandir('blog') as it:
    for entry in it:
        if entry.is_dir():
            dir = 'blog/'+entry.name
            # print(dir)
            files = scanDirectory(dir)
            
allPosts = []
for year in posts:
    allPosts += posts[year]

sidebar = [];
with open('blog/index.md', 'w') as out:
    out.write('---\n')
    out.write('title: Index for Blog\n')
    out.write('outline: false\n')
    out.write('prev: false\n')
    out.write('next: false\n')
    out.write('---\n\n')
    out.write('# Blog Index\n\n<p></p>\n\n')
    for year in sorted(posts.keys(), reverse=True):
        out.write('## <a href="/blog/%d/">Blog %d</a>\n\n<p></p>\n\n' % (year, year))
        items = sorted(posts[year], key=lambda d: d['date'], reverse=True)
        items = list(map(lambda d: {'text': d['title'], 'link': '/'+d['path']}, items))
        sidebar.append({'text': 'Blog %d' % year, 'items': items, 'collapsed': True })

sidebar = [{'text': 'Blog', 'items': sidebar}]

dump(sidebar, open('sidebar.json', 'w'))
