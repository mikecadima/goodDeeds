

CREATE TABLE deeds(
    deeds_id SERIAL PRIMARY KEY,
    category VARCHAR(50),
    title VARCHAR(25),
    description VARCHAR(255),
    date_created timestamp,
    date_todo timestamp,
    location VARCHAR(50),
    status VARCHAR(20),
    picture text
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    phone VARCHAR(20),
    name  VARCHAR(100),
    short_bio VARCHAR(255),
    username VARCHAR(100),
    location VARCHAR(100),
    email VARCHAR(100)
);

ALTER TABLE deeds ADD CONSTRAINT user_id_fk foreign key (user_id) references users(user_id);

-- rating INT check(rating >=1 and rating <=5)

CREATE TABLE ratings(
    rating_id SERIAL PRIMARY KEY,
    user_id INT,
    rating INT check(rating >=1 and rating <=5)
);

ALTER TABLE ratings ADD CONSTRAINT user_rating_id_fk foreign key (user_id) references users(user_id);
