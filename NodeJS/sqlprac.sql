Insert Into Customers (CustomerName, Address, City, PostalCode, Country)
values ('Hekkan Burger','Gateveien 15','Sandnes','4306','Norway');

SELECT * FROM Customers WHERE PostalCode IS NULL;
SELECT * FROM Customers WHERE PostalCode IS NOT NULL;

Update Customers Set City = 'Oslo';
Update Customers Set City = 'Oslo' where Country = 'Norway';
Update Customers Set City = 'Oslo', Country = 'Norway' WHERE CustomerID = 32;

Delete from Customers where Country = 'Norway';
Delete from Customers;

SELECT * FROM Customers where city like "a%";
SELECT * FROM Customers where city like "%a";
SELECT * FROM Customers where city like "%a%";
SELECT * FROM Customers where city like "a%b";
SELECT * FROM Customers where city not like "a%";
SELECT * FROM Customers where country in ('Norway', 'France');
SELECT * FROM Customers where country not in ('Norway', 'France');


drop database testDB;
drop database testDB;

create table Persons
 (
  PersonID int,
  LastName varchar(255),
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255) 
);

create table Persons ( PersonID int, LastName varchar(255), FirstName varchar(255), Address varchar(255), City varchar(255));

drop table Persons;
Truncate table Persons;
alter table Persons add Birthday DATE;
alter table Persons drop column Birthday;

