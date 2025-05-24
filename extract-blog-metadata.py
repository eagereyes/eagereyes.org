#!/usr/bin/python3

import os
import glob
import yaml
import json

posts = []

# Loop through years 2006 to 2025
for year in range(2006, 2026):
    year_dir = f"blog/{year}"
    
    # Check if the year directory exists
    if os.path.exists(year_dir):
        # Find all markdown files in the year directory
        markdown_files = glob.glob(os.path.join(year_dir, "*.md"))
        
        for file_path in markdown_files:
            if not file_path.endswith('index.md'):
                try:
                    with open(file_path, 'r', encoding='utf-8') as file:
                        content = file.read()
                        
                    posts.append({
                        'year': year,
                        'filename': os.path.basename(file_path),
                        'content': content,
                        'slug': os.path.basename(file_path).replace('.md', '')
                    })
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")

# Process posts to extract frontmatter and content
for post in posts:
    content = post['content']
    parts = content.split('---\n')
    
    if len(parts) >= 3:
        post['frontmatter'] = parts[1].strip()
        post['content'] = parts[2].strip()
    else:
        post['frontmatter'] = ''
        post['content'] = content.strip()

# Parse frontmatter as YAML and add to meta field
for post in posts:
    if post['frontmatter']:
        try:
            # print(post['frontmatter'])
            post['meta'] = yaml.safe_load(post['frontmatter'])
        except yaml.YAMLError as e:
            print(f"Error parsing YAML in {post['filename']}: {e}")
            post['meta'] = {}
    else:
        post['meta'] = {}

# Sort posts by date in reverse order (newest first)
posts.sort(key=lambda post: post['meta'].get('date', ''), reverse=True)

# Extract meta fields from all posts and write to YAML file
meta_data = []
for post in posts:
    meta_entry = {
        'year': post['year'],
        'slug': post['slug'],
    }
    for key, value in post['meta'].items():
        meta_entry[key] = value

    # Convert date to string if it exists
    if 'date' in meta_entry and meta_entry['date'] is not None:
        meta_entry['date'] = meta_entry['date'].isoformat()

    if 'tags' in meta_entry:
        # Convert tags to a list if it's a string
        if isinstance(meta_entry['tags'], str):
            meta_entry['tags'] = [tag.strip() for tag in meta_entry['tags'].split(',')]
        else:
            meta_entry['tags'] = []

    meta_data.append(meta_entry)

# Write meta fields to JSON file
with open('blog-meta.json', 'w', encoding='utf-8') as f:
    json.dump(meta_data, f, indent=2, ensure_ascii=False)

print(f"Converted {len(posts)} posts")
