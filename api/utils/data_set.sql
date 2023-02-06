INSERT INTO identifiers (email, password, role) VALUES
    ('user1@gmail.com', 'password1', 'USER'),
    ('user2@gmail.com', 'password2', 'ADMIN'),
    ('user3@gmail.com', 'password3', 'USER');

INSERT INTO users (name, birthday, identifier_id) VALUES
    ('User 1', '1990-01-01', 1),
    ('User 2', '1995-05-05', 2),
    ('User 3', '2000-10-10', 3);

INSERT INTO musics (name, rep_image, track, artist, style, country, release_date) VALUES
    ('Music 1', 'image1.png', 'track1.mp3', 'Artist 1', 'Pop', 'USA', '2020-01-01'),
    ('Music 2', 'image2.png', 'track2.mp3', 'Artist 2', 'Rock', 'France', '2019-01-01'),
    ('Music 3', 'image3.png', 'track3.mp3', 'Artist 3', 'Jazz', 'Japan', '2018-01-01');

INSERT INTO artists (name) VALUES
    ('Artist 1'),
    ('Artist 2'),
    ('Artist 3');

INSERT INTO groups (user_id, name, description, date_creation) VALUES
    (1, 'Group 1', 'Description of Group 1', '2021-01-01'),
    (2, 'Group 2', 'Description of Group 2', '2020-01-01'),
    (3, 'Group 3', 'Description of Group 3', '2019-01-01');

INSERT INTO playlists (name, user_id) VALUES
    ('Playlist 1', 1),
    ('Playlist 2', 2),
    ('Playlist 3', 3);

INSERT INTO artist_user (user_id, artist_id) VALUES
    (1, 1),
    (2, 2),
    (3, 3);

INSERT INTO user_group (user_id, group_id) VALUES
    (1, 1),
    (2, 2),
    (3, 3);

INSERT INTO music_playlist (music_id, playlist_id) VALUES
    (1, 1),
    (2, 2),
    (3, 3);

INSERT INTO like_music (user_id, music_id) VALUES
    (1, 1),
    (2, 2),
    (3, 3);

INSERT INTO music_group (music_id, group_id) VALUES
    (1, 1),
    (2, 2),
    (3, 3);
