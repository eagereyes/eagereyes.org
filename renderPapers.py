#!/usr/bin/python3

import json

papers = json.load(open('papers.json', 'r'))

def key2URL(key):
    return key.replace(':', '-')

def authorList(authField):
    authors = authField.split(' and ')
    if len(authors) == 1:
        return authors
    elif len(authors) == 2:
        return '%s and %s' % (authors[0], authors[1])
    else:
        return ', '.join(authors[:-1]) + ', and ' + authors[len(authors)-1]

for paper in papers:
    print(paper['key'])

    slug = key2URL(paper['key'])
    year = slug.split('-')[-1][:4]

    with open('publications/%s.md' % slug, 'w') as outFile:
        outFile.write('---\n')
        outFile.write('title: %s\n' % paper['title'])
        outFile.write('---\n\n')
        outFile.write('# %s\n\n' % paper['title'])

        if 'abstract' in paper:
            outFile.write('> _%s_\n\n' % paper['abstract'])

        outFile.write('%s, ' % authorList(paper['author']))
        if 'pdf' not in paper: # meaning, no 'paper: no' entry
            outFile.write('[%s](/papers/%s/%s.pdf)' % (paper['title'], year, slug))
        else:
            outFile.write(paper['title'])

        if paper['type'] == 'inbook':
            outFile.write(', in %s, _%s_' % (paper['editor'], paper['venue']))
        else:
            outFile.write(', _%s_' % paper['venue'])
            if 'volume' in paper:
                outFile.write(', vol. %s' % paper['volume'])
            if 'number' in paper:
                outFile.write(', no. %s' % paper['volume'])

        if 'pages' in paper:
            outFile.write(', pp. %s' % paper['pages'])

        outFile.write(', %s\n' % year)

        outFile.write('\n```\n')
        outFile.write('@%s {%s,\n' % (paper['type'], paper['key']))
        for key in paper:
            if key != 'type' and key != 'shortVenue' and key != 'key':
                outFile.write('%s: {%s},\n' % (key, paper[key]))
        outFile.write('}\n```\n')


        outFile.write('\n')
