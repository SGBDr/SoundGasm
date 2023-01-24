-- for a nice initialization, first we delete the database (if you are smart, you known that if data
-- in database are important, you have to export it first)
DELETE DATABASE IF EXISTS soundgasm;

-- create of the database
CREATE DATABASE soundgasm;

-- It's possible that creation of database is not possible with the same fils of table creation
-- if it's your case, create the database first ab open an sql script editor on dbeaver an execute
-- the rest.

CREATE TABLE identifiers(
   identifier_id BIGSERIAL,
   email VARCHAR(115) NOT NULL,
   password VARCHAR(150) NOT NULL,
   active LOGICAL NOT NULL DEFAULT(true),
   role VARCHAR(50) NOT NULL check(role = "ADMIN" or role = "USER"),
   PRIMARY KEY(identifier_id),
   UNIQUE(email)
);

CREATE TABLE users(
   user_id BIGSERIAL,
   name VARCHAR(130) NOT NULL,
   birthday DATE NOT NULL,
   identifier_id BIGINT NOT NULL,
   PRIMARY KEY(user_id),
   UNIQUE(identifier_id),
   FOREIGN KEY(identifier_id) REFERENCES identifiers(identifier_id)
);

CREATE TABLE musics(
   music_id BIGSERIAL,
   name VARCHAR(100) NOT NULL,
   rep_image VARCHAR(300) NOT NULL,
   track VARCHAR(300) NOT NULL,
   artist VARCHAR(100) NOT NULL,
   PRIMARY KEY(music_id)
);

CREATE TABLE artists(
   artist_id BIGSERIAL,
   name VARCHAR(100) NOT NULL,
   PRIMARY KEY(artist_id),
   UNIQUE(name)
);

CREATE TABLE groups(
   group_id BIGSERIAL,
   user_id BIGINT NOT NULL,
   description TEXT,
   date_creation DATE NOT NULL,
   FOREIGN KEY(user_id) REFERENCES users(user_id)
   PRIMARY KEY(group_id)
);

CREATE TABLE playlists(
   playlist_id BIGSERIAL,
   name VARCHAR(130) NOT NULL,
   user_id BIGINT NOT NULL,
   PRIMARY KEY(playlist_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE artist_user(
   user_id BIGINT,
   artist_id VARCHAR(50),
   PRIMARY KEY(user_id, artist_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id),
   FOREIGN KEY(artist_id) REFERENCES artists(artist_id)
);

CREATE TABLE user_group(
   user_id BIGINT,
   group_id BIGINT,
   PRIMARY KEY(user_id, group_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id),
   FOREIGN KEY(group_id) REFERENCES groups(group_id)
);

CREATE TABLE music_playlist(
   music_id BIGINT,
   playlist_id BIGINT,
   PRIMARY KEY(music_id, playlist_id),
   FOREIGN KEY(music_id) REFERENCES musics(music_id),
   FOREIGN KEY(playlist_id) REFERENCES playlists(playlist_id)
);

CREATE TABLE like_music(
   user_id BIGINT,
   music_id BIGINT,
   PRIMARY KEY(user_id, music_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id),
   FOREIGN KEY(music_id) REFERENCES musics(music_id)
);

CREATE TABLE music_group(
   music_id BIGINT,
   group_id BIGINT,
   PRIMARY KEY(music_id, group_id),
   FOREIGN KEY(music_id) REFERENCES musics(music_id),
   FOREIGN KEY(group_id) REFERENCES groups(group_id)
);
