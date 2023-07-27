#!/usr/bin/python3

import json
import re
from datetime import datetime, timedelta

MEDIAPATH = 'https://media.eagereyes.org/'

TIMEDELTA = timedelta(hours=8)

def deWordPress(text):
	out = ''
	for line in text.split('\n'):
		if (not line.startswith('<!-- wp:') and not line.startswith('<!-- /wp:')) or line.endswith('</blockquote>'):
			out += line + '\n'
	return out.replace('<!--more-->', '')

def convertHTML(text):
	out = ''
	for line in text.split('\n'):
		if line.startswith('<h2'):
			header = re.match(r'<h2[^>]*>([^<]+)</h2>', line)
			if header:
				out += '\n\n## %s\n\n' % header.group(1)
			else:
				out += '\n\n## ' + line[4:-5] + '\n\n' # <em> inside h2 or similar, not very common
		elif line.startswith('<p>') and line.endswith('</p>'):
			out += line[3:-4] + '\n\n'
		elif line == '<!--more-->':
			out += '\n'
		else:
			out += line + '\n'

	if '<blockquote>' in out:
		parts = re.split(r'</?blockquote>', out)
		newOut = parts[0]
		midPart = re.sub(r'</?em>', '', parts[1])
		newOut += '\n>\t'+'\n>\t'.join(midPart.split('\n'))+'\n\n'
		newOut += parts[2]
		out = newOut

	# Replace all image links
	out = re.sub(r'<img src="(https?://eagereyes.org)?/([^"]+)"', r'<img src="%s\2"' % MEDIAPATH, out)

	# Replace all links to the kosara.net site
	out = re.sub(r'<a href="https?://kosara.net/', '<a href="https://eagereyes.org/', out)

	return re.sub(r'\n\n+', '\n\n', out)


def deHTML(text):
	text = re.sub(r'</?[^>]+>', '', text)

	return text.strip()

def quoteQuotes(text):
	return re.sub(r'"', '\\"', text)

def extractExcerpt(postText):
	if '<!--more-->' in postText:
		return postText.split('<!--more-->')[0]
	else:
		return postText

posts = json.load(open('posts.json', 'r'))

REPLACEPATHS = [{'from': 'blog/web/', 'to': 'blog/2014/'},
				{'from': 'blog/zipscribble-maps/', 'to': 'blog/2016/'}
				]

EXTRACTPATH = 'blog/'

for post in posts:
	slug = post['slug']
	for r in REPLACEPATHS:
		slug = slug.replace(r['from'], r['to'])
	
	if slug.startswith(EXTRACTPATH):
		print(slug)
		content = deWordPress(post['content'])
		excerpt = post['excerpt']
		if len(post['excerpt']) == 0:
			excerpt = extractExcerpt(post['content'])

		date = datetime.fromisoformat(post['date'][:-1])
		date = date-TIMEDELTA

		with open(slug + '.md', 'w') as outFile:
			outFile.write('---\n')
			outFile.write('title: "%s"\n' % quoteQuotes(post['title']))
			outFile.write('description: "%s"\n' % quoteQuotes(deHTML(excerpt)))
			outFile.write('date: %s\n' % date)
			outFile.write('tags: %s\n' % post['tags'])
			if content.count('<h2') == 0:
				outFile.write('outline: false\n')
			outFile.write('---\n\n')
			outFile.write('# %s\n\n' % post['title'])
			outFile.write(convertHTML(content))
			outFile.write('\n_Posted by <a href="/about">Robert Kosara</a> on ' + date.strftime('%B %d, %Y') + '_\n\n')
			if len(post['comments']) > 0:
				outFile.write('\n<aside class="comments">\n\n')
				outFile.write('---\n')
				outFile.write('## Comments\n\n')
				for comment in post['comments']:
					# outFile.write('<Comment author="%s" link="%s">\n' % (comment['author'], comment['author_url']))
					# outFile.write('\t%s\n' % comment['content'])
					# outFile.write('</Comment>\n\n')
					if len(comment['author_url']) > 0:
						outFile.write('<a href="%s" rel="nofollow noopener" target="_blank">%s</a> says…\n' % (comment['author_url'], comment['author']))
					else:
						outFile.write('%s says…\n' % comment['author'])
					
					outFile.write('>\t%s\n\n' % re.sub(r'\n', '\n>\t', comment['content']))

				outFile.write('</aside>\n')
			outFile.write('\n')
		
