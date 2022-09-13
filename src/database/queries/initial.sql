drop database if exists journey;
create database if not exists journey;
use journey;

-- USER CATEGORY TABLE
CREATE TABLE IF NOT EXISTS user_category (
    id VARCHAR(20) PRIMARY KEY,
    isActive BOOLEAN,
    createDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifydateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(50),
    category VARCHAR(50)
)  ENGINE=INNODB;


CREATE TABLE IF NOT EXISTS tag (
    id VARCHAR(20) PRIMARY KEY,
    isActive BOOLEAN,
    createDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifydateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(50),
    category VARCHAR(50),
    tag varchar(50)
)  ENGINE=INNODB;

-- USER TABLE
CREATE TABLE IF NOT EXISTS user (
    id VARCHAR(20) PRIMARY KEY,
    isActive BOOLEAN,
    createDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifydateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(50),
    email VARCHAR(100),
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    lastLoginTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bio VARCHAR(400),
    dob DATE,
    userCategoryId VARCHAR(20),
    FOREIGN KEY (userCategoryId)
        REFERENCES user_category (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
)  ENGINE=INNODB;

-- PICTURES CATEGORY TABLE
CREATE TABLE IF NOT EXISTS picture_category (
	id VARCHAR(20) PRIMARY KEY,
    isActive BOOLEAN,
    createDateTime timestamp default current_timestamp,
    modifydateTime timestamp default current_timestamp,
    lastChangedBy VARCHAR(50),
    category VARCHAR(50),
    
    FOREIGN KEY (lastChangedBy)
        REFERENCES user (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
)  ENGINE=INNODB;

-- DREAM BUCKET LISTS
CREATE TABLE IF NOT EXISTS dream_bucket_list (
	id VARCHAR(20) PRIMARY KEY,
    isActive BOOLEAN,
    createDateTime timestamp default current_timestamp,
    modifydateTime timestamp default current_timestamp,
    lastChangedBy VARCHAR(50),
    title VARCHAR(50),
    description varchar(500),
    createdBy VARCHAR(20),
    FOREIGN KEY (createdBy)
        REFERENCES user (id)
        ON UPDATE RESTRICT ON DELETE CASCADE,
	FOREIGN KEY (lastChangedBy)
        REFERENCES user (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
)  ENGINE=INNODB;

-- POSTS TABLE
CREATE TABLE IF NOT EXISTS post (
    id VARCHAR(20) PRIMARY KEY,
    isActive BOOLEAN,
    createDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifydateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(50),
    title varchar(100),
    content varchar(5000),
    FOREIGN KEY (lastChangedBy)
        REFERENCES user (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
)  ENGINE=INNODB;

-- POST TAGS Table, this is the table that only contains the post id and the tag id
CREATE TABLE IF NOT EXISTS post_tag (
    id VARCHAR(20) PRIMARY KEY,
    postId varchar(100),
    tagId varchar(100),
	FOREIGN KEY (postId)
   REFERENCES post (id)
   ON UPDATE RESTRICT ON DELETE CASCADE,
   
   FOREIGN KEY (tagId)
   REFERENCES tag (id)
   ON UPDATE RESTRICT ON DELETE CASCADE
)  ENGINE=INNODB;


--- INSERT ALL DATA
-- USER CATEGORY
insert into user_category (id, isActive, createDateTime, modifydateTime, lastChangedBy, category)
values 
("cat_admin", true, "2027-11-11 13:23:44", "2022-11-11 13:23:41", "1", "Administartor"),
("cat_user", true, "2023-11-11 13:23:44", "2022-11-11 13:23:41", "1", "User");

-- USERS
insert into user (
id, isActive, createDateTime, modifydateTime, lastChangedBy, email, firstName, lastName, lastLoginTime, bio, dob, userCategoryId
)
values 
("1", true, "2022-11-11 13:23:44", "2022-11-11 13:23:41", "1", "zen96ev@gmail.com", "Zen", "Huzaini", "2022-11-17 13:23:49", "I really love cycling and outdoor activities", "1996-11-11", "cat_admin"),
("2", true, "2022-10-11 13:23:44", "2022-10-11 13:23:41", "1", "fg@gmail.com", "Cloe", "Klo", "2022-11-17 13:23:49", "I really love water activities", "1997-11-11", "cat_user"),
("3", true, "2022-12-11 13:23:44", "2022-12-11 13:23:41", "1", "vv@gmail.com", "Pol", "Aloe", "2022-11-17 13:23:49", "I really love sleeping activities", "1998-11-11", "cat_user");

-- PICTURE CATEGORY
insert into picture_category (id, isActive, createDateTime, modifydateTime, lastChangedBy, category)
values 
("usr_prfl", true, "2029-11-11 13:23:44", "2022-11-11 13:23:41", "1", "Profile Picture"),
("usr_cllctns", true, "2028-11-11 13:23:44", "2022-11-11 13:23:41", "2", "Collection"),
("pst_hdr", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "post Header");


-- TAG CATEGORY
insert into tag (id, isActive, createDateTime, modifydateTime, lastChangedBy, tag)
values 
("1", true, "2029-11-11 13:23:44", "2022-11-11 13:23:41", "1", "Mountain"),
("2", true, "2028-11-11 13:23:44", "2022-11-11 13:23:41", "2", "Adventure"),
("3", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "Sea"),
("4", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "Forest"),
("5", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "Lake"),
("6", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "City");

-- POST
insert into post (id, isActive, createDateTime, modifydateTime, lastChangedBy, title, content)
values 
("1", true, "2029-11-11 13:23:44", "2022-11-11 13:23:41", "1", "walking Mountain", "ouch this is amazing"),
("2", true, "2028-11-11 13:23:44", "2022-11-11 13:23:41", "2", "get the Adventure", "this must be hard"),
("3", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "over the Sea", "I don't know"),
("4", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "lalla la Forest", "what you need"),
("5", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "Love Lake", "lorem ipsum"),
("6", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "City in the bones", "something in the city");

-- POSTTAG CATEGORY    
insert into post_tag (id, postId, tagId)
values 
("1",  "1", "2"),
("2",  "2", "4"),
("3",  "3", "3"),
("4",   "3", "5"),
("5",   "3", "2"),
("6",  "2", "2");


-- UPDATE THE TABLE THAT NEEDS TO CHANGE THE FOREIGN KEY
ALTER TABLE user_category ADD CONSTRAINT fk_user_cat_last_changed_by FOREIGN KEY (lastChangedBy) REFERENCES user (id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE tag ADD CONSTRAINT fk_tag_last_changed_by FOREIGN KEY (lastChangedBy) REFERENCES user (id) ON UPDATE RESTRICT ON DELETE CASCADE;

