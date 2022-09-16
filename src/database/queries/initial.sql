drop database if exists journey;
create database if not exists journey;
use journey;

-- USER role TABLE
CREATE TABLE IF NOT EXISTS user_role (
    id VARCHAR(36) PRIMARY KEY,
    isActive boolean default true,
    createDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifyDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(50),
    role VARCHAR(50)
)  ENGINE=INNODB;


CREATE TABLE IF NOT EXISTS tag (
    id VARCHAR(36) PRIMARY KEY,
    isActive boolean default true,
    createDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifyDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(50),
    role VARCHAR(50),
    tag varchar(50)
)  ENGINE=INNODB;

-- USER TABLE
CREATE TABLE IF NOT EXISTS user (
    id VARCHAR(36) PRIMARY KEY,
    isActive boolean default true,
    createDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifyDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(50),
    email VARCHAR(100),
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    lastLoginTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bio VARCHAR(400),
    dob DATE,
    userRoleId VARCHAR(36),
    FOREIGN KEY (userRoleId)
        REFERENCES user_role (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
)  ENGINE=INNODB;

-- PICTURES role TABLE
CREATE TABLE IF NOT EXISTS picture_role (
	id VARCHAR(36) PRIMARY KEY,
    isActive boolean default true,
    createDateTime timestamp default current_timestamp,
    modifyDateTime timestamp default current_timestamp,
    lastChangedBy VARCHAR(50),
    role VARCHAR(50),
    
    FOREIGN KEY (lastChangedBy)
        REFERENCES user (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
)  ENGINE=INNODB;

-- DREAM BUCKET LISTS
CREATE TABLE IF NOT EXISTS dream_bucket_list (
	id VARCHAR(36) PRIMARY KEY,
    isActive boolean default true,
    createDateTime timestamp default current_timestamp,
    modifyDateTime timestamp default current_timestamp,
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
    id VARCHAR(36) PRIMARY KEY,
    isActive boolean default true,
    createDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifyDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastChangedBy VARCHAR(50),
    title varchar(100),
    content varchar(5000),
    createdBy VARCHAR(20),
    FOREIGN KEY (createdBy)
        REFERENCES user (id)
        ON UPDATE RESTRICT ON DELETE CASCADE,
    FOREIGN KEY (lastChangedBy)
        REFERENCES user (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
)  ENGINE=INNODB;

-- POST TAGS Table, this is the table that only contains the post id and the tag id
CREATE TABLE IF NOT EXISTS post_tag (
    id VARCHAR(36) PRIMARY KEY,
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
-- USER role
insert into user_role (id, isActive, createDateTime, modifyDateTime, lastChangedBy, role)
values 
("admin", true, "2027-11-11 13:23:44", "2022-11-11 13:23:41", "1", "ADMIN"),
("user", true, "2023-11-11 13:23:44", "2022-11-11 13:23:41", "1", "USER"),
("ghost", true, "2027-11-11 13:23:44", "2022-11-11 13:23:41", "1", "GHOST");

-- USERS
insert into user (
id, isActive, createDateTime, modifyDateTime, lastChangedBy, email, firstName, lastName, lastLoginTime, bio, dob, userRoleId
)
values 
("1", true, "2022-11-11 13:23:44", "2022-11-11 13:23:41", "1", "zen96ev@gmail.com", "Zen", "Huzaini", "2022-11-17 13:23:49", "I really love cycling and outdoor activities", "1996-11-11", "admin"),
("2", true, "2022-10-11 13:23:44", "2022-10-11 13:23:41", "1", "fg@gmail.com", "Cloe", "Klo", "2022-11-17 13:23:49", "I really love water activities", "1997-11-11", "ghost"),
("3", true, "2022-12-11 13:23:44", "2022-12-11 13:23:41", "1", "vv@gmail.com", "Pol", "Aloe", "2022-11-17 13:23:49", "I really love sleeping activities", "1998-11-11", "user");

-- PICTURE role
insert into picture_role (id, isActive, createDateTime, modifyDateTime, lastChangedBy, role)
values 
("usr_prfl", true, "2029-11-11 13:23:44", "2022-11-11 13:23:41", "1", "Profile Picture"),
("usr_cllctns", true, "2028-11-11 13:23:44", "2022-11-11 13:23:41", "2", "Collection"),
("pst_hdr", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "post Header");


-- TAG role
insert into tag (id, isActive, createDateTime, modifyDateTime, lastChangedBy, tag)
values 
("1", true, "2029-11-11 13:23:44", "2022-11-11 13:23:41", "1", "Mountain"),
("2", true, "2028-11-11 13:23:44", "2022-11-11 13:23:41", "2", "Adventure"),
("3", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "Sea"),
("4", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "Forest"),
("5", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "Lake"),
("6", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "City");

-- POST
insert into post (id, isActive, createDateTime, modifyDateTime, lastChangedBy, title, content, createdBy)
values 
("1", true, "2029-11-11 13:23:44", "2022-11-11 13:23:41", "1", "walking Mountain", "ouch this is amazing", "1"),
("2", true, "2028-11-11 13:23:44", "2022-11-11 13:23:41", "2", "get the Adventure", "this must be hard", "2"),
("3", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "over the Sea", "I don't know", "2"),
("4", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "lalla la Forest", "what you need", "3"),
("5", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "Love Lake", "lorem ipsum","1"),
("6", true, "2032-11-11 13:23:44", "2022-11-11 13:23:41", "3", "City in the bones", "something in the city","2");

-- POSTTAG role    
insert into post_tag (id, postId, tagId)
values 
("1",  "1", "2"),
("2",  "2", "4"),
("3",  "3", "3"),
("4",   "3", "5"),
("5",   "3", "2"),
("6",  "2", "2");


-- UPDATE THE TABLE THAT NEEDS TO CHANGE THE FOREIGN KEY
ALTER TABLE user_role ADD CONSTRAINT fk_user_cat_last_changed_by FOREIGN KEY (lastChangedBy) REFERENCES user (id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE tag ADD CONSTRAINT fk_tag_last_changed_by FOREIGN KEY (lastChangedBy) REFERENCES user (id) ON UPDATE RESTRICT ON DELETE CASCADE;

