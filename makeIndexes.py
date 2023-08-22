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

                    if directory != 'blog/%d' % postYear:
                        print('WRONG YEAR (should be %d): %s' % (postYear, directory+'/'+entry.name))

    return files

def writeIndex(files, fileName, dirName):

    files = sorted(files, key=lambda f: f['date'], reverse=True)

    with open(fileName, 'w') as out:
        out.write('---\n')
        out.write('title: Index for %s\n' % dirName )
        out.write('outline: false\n')
        
        # for Blog year indices, link between years!
        parts = dirName.split(' ')
        if parts[0] == 'Blog':
            if int(parts[1])+1 in posts:
                out.write('next:\n  text: Blog %d\n  link: /blog/%d/\n' % (int(parts[1])+1, int(parts[1])+1))
            else:
                out.write('next: false\n')
            if int(parts[1])-1 in posts:
                out.write('prev:\n  text: Blog %d\n  link: /blog/%d/\n' % (int(parts[1])-1, int(parts[1])-1))
            else:
                out.write('prev: false\n')
        else:
            out.write('prev: false\n')
            out.write('next: false\n')

        out.write('---\n\n')
        out.write('# %s\n\n' % dirName)

        for file in files:
            out.write('### <a href="/%s">%s</a>\n' % (file['path'][:-3], file['title']))
            out.write('%s _<a href="/%s">Read more…</a>_\n\n' % (file['description'], file['path'][:-3]))


tags = {}
posts = {}

with scandir('blog') as it:
    for entry in it:
        if entry.is_dir():
            dir = 'blog/'+entry.name
            print(dir)
            files = scanDirectory(dir)
            
allPosts = []
for year in posts:
    writeIndex(posts[year], 'blog/%d/index.md' % year, 'Blog %d' % year)
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

writeIndex(tags['criticism'], 'tag/criticism.md', 'Criticism')
writeIndex(tags['book-reviews'], 'tag/book-reviews.md', 'Book Reviews')
writeIndex(tags['pie-charts'], 'tag/pie-charts.md', 'Pie Charts')
writeIndex(tags['isotype'], 'tag/isotype.md', 'ISOTYPE')
writeIndex(tags['influences'], 'tag/influences.md', 'Lists of Influences')
writeIndex(tags['criticism'], 'tag/criticism.md', 'Criticism')
writeIndex(tags['eagereyestv'], 'tag/eagereyestv.md', 'EagerEyes Videos')
writeIndex(tags['peer-review'], 'tag/peer-review.md', 'Peer Review')
writeIndex(tags['conference'], 'tag/conference.md', 'Conference Reports')
writeIndex(tags['basics'], 'tag/basics.md', 'Visualization Basics')


allPosts = sorted(allPosts, key=lambda f: f['date'], reverse=True)

for p in allPosts:
    p['date'] = p['date'].strftime('%B %d, %Y')
    # strip the .md extension
    p['path'] = p['path'][:-3]

dump(allPosts[:20], open('home-feed.json', 'w'))

print('%d posts' % len(allPosts))