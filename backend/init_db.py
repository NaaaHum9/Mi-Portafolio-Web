import sqlite3

conn = sqlite3.connect('database.db')
cursor = conn.cursor()

# cursor.execute('DROP TABLE IF EXISTS projects')



cursor.execute('''
CREATE TABLE projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    image_url TEXT,
    github_url TEXT,
    youtube_url TEXT
)
''')

cursor.execute('''
INSERT INTO projects (title, description, category, image_url, github_url, youtube_url)
VALUES (?,?,?,?,?,?)
''',(
    'Sitio Web Personal',
    'Landing page con React',
    'frontend',
    'https://via.placeholder.com/300x200.png?text=Frontend+1',
    'https://github.com/nahumvg/frontend-proyecto',
    'https://youtu.be/video1'
))

cursor.execute('''
INSERT INTO projects (title, description, category, image_url, github_url, youtube_url)
VALUES (?, ?, ?, ?, ?, ?)
''', (
    'Clasificador de Imágenes',
    'Clasificación de imágenes usando CNN con TensorFlow',
    'machine',
    'https://via.placeholder.com/300x200.png?text=Machine+Learning',
    'https://github.com/nahumvg/ml-clasificador',
    'https://youtu.be/video2'
))

cursor.execute('''
INSERT INTO projects (title, description, category, image_url, github_url, youtube_url)
VALUES (?, ?, ?, ?, ?, ?)
''', (
    'Clasificador de Imágenes',
    'Clasificación de imágenes usando CNN con TensorFlow',
    'data',
    'https://via.placeholder.com/300x200.png?text=Machine+Learning',
    'https://github.com/nahumvg/ml-clasificador',
    'https://youtu.be/video2'
))

cursor.execute('''
INSERT INTO projects (title, description, category, image_url, github_url, youtube_url)
VALUES (?, ?, ?, ?, ?, ?)
''', (
    'Clasificador de Imágenes',
    'Clasificación de imágenes usando CNN con TensorFlow',
    'others',
    'https://via.placeholder.com/300x200.png?text=Machine+Learning',
    'https://github.com/nahumvg/ml-clasificador',
    'https://youtu.be/video2'
))

cursor.execute('''
INSERT INTO projects (title, description, category, image_url, github_url, youtube_url)
VALUES (?, ?, ?, ?, ?, ?)
''', (
    'Clasificador de Imágenes',
    'Clasificación de imágenes usando CNN con TensorFlow',
    'frontend',
    'https://via.placeholder.com/300x200.png?text=Machine+Learning',
    'https://github.com/nahumvg/ml-clasificador',
    'https://youtu.be/video2'
))

conn.commit()
conn.close()
