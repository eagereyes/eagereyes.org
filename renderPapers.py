#!/usr/bin/python3

import json

papers = json.load(open('papers.json', 'r'))

def key2URL(key):
    return key.replace(':', '-')

def authorList(authField):
    authors = authField.split(' and ')
    if len(authors) == 1:
        return authField
    elif len(authors) == 2:
        return '%s and %s' % (authors[0], authors[1])
    else:
        return ', '.join(authors[:-1]) + ', and ' + authors[len(authors)-1]

def getYear(paper):
    return paper['_key'].split(':')[-1][:4]

def makeReference(paper, pdfLink):
    slug = key2URL(paper['_key'])
    year = getYear(paper)

    s = ''

    if not pdfLink:
        s += '- '

    s += '%s, ' % authorList(paper['author'])
    if pdfLink:
        if '_pdf' not in paper: # meaning, no 'paper: no' entry
            s += '<a href="https://media.eagereyes.org/papers/%s/%s.pdf" target="_blank">%s</a>' % (year, slug, paper['title'])
        else:
            s += paper['title']
    else:
        s += '<a href="%s">%s</a>' % (slug, paper['title'])

    if paper['_type'] == 'inbook':
        s += ', in %s, _%s_' % (paper['editor'], paper['venue'])
    else:
        s += ', _%s_' % paper['venue']  
        if 'volume' in paper:
            s += ', vol. %s' % paper['volume']
        if 'number' in paper:
            s += ', no. %s' % paper['number']

    if 'pages' in paper:
        s += ', pp. %s' % paper['pages']

    if 'publisher' in paper:
        s += ', %s' % paper['publisher']

    s += ', %s.' % year

    if 'doi' in paper and pdfLink:
        s += ' <a href="https://dx.doi.org/%s" target="_new">DOI: %s</a>' % (paper['doi'], paper['doi'])

    return s


for paper in papers:
    print(paper['_key'])

    slug = key2URL(paper['_key'])

    with open('publications/%s.md' % slug, 'w') as outFile:
        outFile.write('---\n')
        outFile.write('title: "%s"\n' % paper['title'])
        outFile.write('---\n\n')
        outFile.write('# %s\n\n' % paper['title'])

        if '_thumb' in paper:
            outFile.write('<p><img src="https://media.eagereyes.org%s" /></p>\n\n' % paper['_thumb'])

        if 'abstract' in paper:
            outFile.write('> _%s_\n\n' % paper['abstract'])

        # main reference
        outFile.write('%s\n\n' % makeReference(paper, True))

        # additional links
        if 'data' in paper:
            outFile.write('- <a href="%s">Data</a>\n' % paper['data'])
        if 'website' in paper:
            outFile.write('- <a href="%s">Website</a>\n' % paper['website'])
        if 'talk' in paper:
            outFile.write('- <a href="%s">Talk</a>\n' % paper['talk'])
        
        # BibTeX
        outFile.write('\n```bibtex\n')
        outFile.write('@%s{%s,\n' % (paper['_type'], paper['_key']))
        outFile.write('\tyear = %s,\n' % getYear(paper))
        for key in paper:
            if not key[0] == '_':
                outFile.write('\t%s = {%s},\n' % (key, paper[key]))
        outFile.write('}\n```\n')


        outFile.write('\n')

with open('publications/index.md', 'w') as outFile:
    outFile.write('---\n')
    outFile.write('title: Robert Kosara\'s Publications\n')
    outFile.write('---\n\n')
    outFile.write('# Robert Kosara\'s Publications\n\n')

    lastYear = getYear(papers[0])
    outFile.write('## %s\n\n' % lastYear)
    for paper in papers:
        year = getYear(paper)
        if year != lastYear:
            outFile.write('\n## %s\n\n' % year)
            lastYear = year

        outFile.write('%s\n' % makeReference(paper, False))

    outFile.write('\n')

