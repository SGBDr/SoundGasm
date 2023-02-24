-- for a nice initialization, first we delete the database (if you are smart, you known that if data
-- in database are important, you have to export it first)
DROP DATABASE IF EXISTS soundgasm;

-- create of the database
CREATE DATABASE soundgasm;

-- It's possible that the creation of database is not possible with the same fils of table creation
-- if it's your case, create the database first ab open an sql script editor on dbeaver an execute
-- the rest.

CREATE TABLE tokens{
   token VARCHAR(255) NOT NULL,
   ip VARCHAR(255) NOT NULL,
   user_id INT NOT NULL,
   create_time time,
}

CREATE TABLE identifiers(
   identifier_id INT NOT NULL AUTO_INCREMENT,
   email VARCHAR(115) NOT NULL,
   password VARCHAR(150) NOT NULL,
   active BOOLEAN NOT NULL DEFAULT(true),
   role VARCHAR(50) NOT NULL check(role = 'ADMIN' or role = 'USER'),
   PRIMARY KEY(identifier_id),
   UNIQUE(email)
);

CREATE TABLE users(
   user_id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(130) NOT NULL,
   birthday DATE NOT NULL,
   identifier_id INT NOT NULL,
   PRIMARY KEY(user_id),
   UNIQUE(identifier_id),
   FOREIGN KEY(identifier_id) REFERENCES identifiers(identifier_id)
);

CREATE TABLE artists(
   artist_id INT NOT NULL,
   name VARCHAR(100) NOT NULL,
   PRIMARY KEY(artist_id),
   UNIQUE(name)
);

CREATE TABLE musics(
   music_id INT,
   name VARCHAR(100) NOT NULL,
   rep_image VARCHAR(300) NOT NULL,
   track VARCHAR(300) NOT NULL,
   artist VARCHAR(100) NOT NULL,
   style VARCHAR(100),
   country VARCHAR(100),
   release_date DATE,
   PRIMARY KEY(music_id),
   FOREIGN KEY(artist) REFERENCES artists(name),
   UNIQUE(track),
   UNIQUE(music_id)
);


CREATE TABLE groups(
   group_id INT NOT NULL AUTO_INCREMENT,
   user_id INT NOT NULL,
   name VARCHAR(50) NOT NULL,
   description TEXT,
   date_creation DATE NOT NULL,
   FOREIGN KEY(user_id) REFERENCES users(user_id),
   PRIMARY KEY(group_id)
);

CREATE TABLE playlists(
   playlist_id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(130) NOT NULL,
   user_id INT NOT NULL,
   PRIMARY KEY(playlist_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE music_playlist(
   music_id INT,
   playlist_id INT,
   PRIMARY KEY(music_id, playlist_id),
   FOREIGN KEY(music_id) REFERENCES musics(music_id),
   FOREIGN KEY(playlist_id) REFERENCES playlists(playlist_id)
);

CREATE TABLE artist_user(
   user_id INT,
   artist_id INT,
   PRIMARY KEY(user_id, artist_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id),
   FOREIGN KEY(artist_id) REFERENCES artists(artist_id)
);

CREATE TABLE user_group(
   user_id INT,
   group_id INT,
   PRIMARY KEY(user_id, group_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id),
   FOREIGN KEY(group_id) REFERENCES groups(group_id)
);


CREATE TABLE like_music(
   user_id INT,
   music_id INT,
   PRIMARY KEY(user_id, music_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id),
   FOREIGN KEY(music_id) REFERENCES musics(music_id)
);

CREATE TABLE music_group(
   music_id INT,
   group_id INT,
   PRIMARY KEY(music_id, group_id),
   FOREIGN KEY(music_id) REFERENCES musics(music_id),
   FOREIGN KEY(group_id) REFERENCES groups(group_id)
);
