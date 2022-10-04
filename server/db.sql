drop database if exists todo;  /*  drops database /deletes existing database */

create database if not exists todo; 

use todo;

create table task(

    id int primary key auto_increment,
    descritpion varchar(255) not null

);

insert into task(descritpion)values ("My test task");
insert into task (descritpion) values ("My other test task");