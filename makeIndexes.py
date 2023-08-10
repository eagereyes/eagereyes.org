#!/usr/bin/python3

from datetime import datetime, timedelta
from os import path, scandir

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

                        line = file.readline()

                    files.append(o)
                    
                    postYear = o['date'].year
                    if postYear in posts:
                        posts[postYear].append(o)
                    else:
                        posts[postYear] = [o]

                    if directory != 'blog/%d' % postYear:
                        print('WRONG YEAR (should be %d): %s' % (postYear, directory+'/'+entry.name))

    return files

def writeIndex(files, fileName, dirName):

    files = sorted(files, key=lambda f: f['date'], reverse=True)

    with open(fileName, 'w') as out:
        out.write('---\n')
        out.write('title: Index for %s\n' % dirName )
        out.write('outline: false\n')
        out.write('---\n\n')
        out.write('# %s\n\n' % dirName)

        for file in files:
            out.write('### <a href="/%s">%s</a>\n' % (file['path'][:-3], file['title']))
            out.write('%s _<a href="/%s">Read more…</a>_\n\n' % (file['description'], file['path'][:-3]))


tags = {}
posts = {}
numPosts = 0

with scandir('blog') as it:
    for entry in it:
        if entry.is_dir():
            dir = 'blog/'+entry.name
            print(dir)
            files = scanDirectory(dir)
            numPosts += len(files)
            writeIndex(files, dir+'/index.md', 'Blog '+entry.name)

writeIndex(tags['criticism'], 'tag/criticism.md', 'Criticism')
writeIndex(tags['book-reviews'], 'tag/book-reviews.md', 'Book Reviews')
writeIndex(tags['pie-charts'], 'tag/pie-charts.md', 'Pie Charts')
writeIndex(tags['isotype'], 'tag/isotype.md', 'ISOTYPE')
writeIndex(tags['influences'], 'tag/influences.md', 'Lists of Influences')
writeIndex(tags['criticism'], 'tag/criticism.md', 'Criticism')
writeIndex(tags['eagereyestv'], 'tag/eagereyestv.md', 'EagerEyes Videos')

print('%d posts' % numPosts)