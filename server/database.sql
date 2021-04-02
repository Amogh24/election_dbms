//Start your postgres service: sudo service postgresql start
//Connect to the postgres service and open the psql shell: sudo -u postgres psql

\c db1;
CREATE TABLE VOTER
(
    V_id SERIAL PRIMARY KEY,
    Name varchar(255) NOT NULL,
    Age int NOT NULL,
    Gender varchar(255) NOT NULL,
    Address varchar(255) NOT NULL,
    Phone int NOT NULL,
    DOB date NOT NULL,
    email varchar(255) NOT NULL,
    consti_id int NOT NULL,
    FOREIGN KEY(consti_id) REFERENCES CONSTITUENCY(consti_id),
    CHECK (Age>=18)
);

CREATE TABLE CONSTITUENCY
(
    consti_id SERIAL PRIMARY KEY,
    consti_name varchar(255) NOT NULL
);