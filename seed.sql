insert into users 
(displayname, username) 
VALUES
('alice','a1ice9'),('bob','bobchan');
select * from users;

insert INTO todos
    (priority, task, user_id)
 VALUES 
 (1, 'feed the cat',1),
 (2, 'pet the cat',1),
 (3, 'learn to dance',1),
 (4, 'feed the dog',2),
 (99, 'pet the dog',2),
 (2, 'learn to cook',2);

select * from todos;