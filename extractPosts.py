#!/usr/bin/python3

import json
import re

def deWordPress(text):
	out = ''
	for line in text.split('\n'):
		if not line.startswith('<!-- wp:') and not line.startswith('<!-- /wp:'):
			out += line + '\n'
	return out

def convertHTML(text):
	out = ''
	for line in text.split('\n'):
		if line.startswith('<h2>'):
			out += '\n## ' + line[4:-5] + '\n\n'
		elif line.startswith('<p>') and line.endswith('</p>'):
			out += line[3:-4] + '\n\n'
		elif line == '<!--more-->':
			out += '\n'
		else:
			out += line + '\n'

	return re.sub('\n\n+', '\n\n', out)


def deHTML(text):
	text = re.sub('</?[^>]+>', '', text)

	return text.strip()

def quoteQuotes(text):
	return re.sub('"', '\\"', text)

def extractExcerpt(postText):
	if '<!--more-->' in postText:
		return postText.split('<!--more-->')[0]
	else:
		return postText

posts = json.load(open('posts.json', 'r'))

# EXTRACTPATH = 'blog/2023/'
EXTRACTPATH = 'blog/2008/'

for post in posts:
	if post['slug'].startswith(EXTRACTPATH):
		print(post['slug'])
		content = deWordPress(post['content'])
		excerpt = post['excerpt']
		if len(post['excerpt']) == 0:
			excerpt = extractExcerpt(content)

		with open(post['slug'] + '.md', 'w') as outFile:
			outFile.write('---\n')
			outFile.write('title: "%s"\n' % quoteQuotes(post['title']))
			outFile.write('description: "%s"\n' % quoteQuotes(deHTML(excerpt)))
			outFile.write('date: %s\n' % post['date'])
			outFile.write('tags: %s\n' % post['tags'])
			outFile.write('---\n\n')
			outFile.write('# %s\n\n' % post['title'])
			outFile.write(convertHTML(content))
			if len(post['comments']) > 0:
				outFile.write('\n---\n')
				outFile.write('## Comments\n\n')
				for comment in post['comments']:
					# outFile.write('<Comment author="%s" link="%s">\n' % (comment['author'], comment['author_url']))
					# outFile.write('\t%s\n' % comment['content'])
					# outFile.write('</Comment>\n\n')
					if len(comment['author_url']) > 0:
						outFile.write('<a href="%s" rel="nofollow noopener" target="_blank">%s</a> says…\n' % (comment['author_url'], comment['author']))
					else:
						outFile.write('%s says…\n' % comment['author'])
					
					outFile.write('>\t%s\n\n' % re.sub('\n', '\n>\t', comment['content']))
			outFile.write('\n')
		
