//Start your postgres service: sudo service postgresql start
//Connect to the postgres service and open the psql shell: sudo -u postgres psql

\c db1;
CREATE TABLE VOTER
(
    v_id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    age int NOT NULL,
    gender varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    phone int NOT NULL,
    dob date NOT NULL,
    email varchar(255) NOT NULL,
    consti_id int NOT NULL,
    FOREIGN KEY(consti_id) REFERENCES CONSTITUENCY(consti_id),
    CHECK (age>=18)
);

CREATE TABLE CONSTITUENCY
(
    consti_id SERIAL PRIMARY KEY,
    consti_name varchar(255) NOT NULL
);

CREATE TABLE ELECTION_OFFICER
(
    officer_id int ,
    name varchar(255),
    consti_id int NOT NULL,
    PRIMARY KEY (officer_id),
    FOREIGN KEY(consti_id) REFERENCES CONSTITUENCY(consti_id)
);

CREATE TABLE CANDIDATES
(
    candidate_id int,
    v_id int NOT NULL,
    consti_id int NOT NULL,
    age int,
    PRIMARY KEY (candidate_id),
    FOREIGN KEY(consti_id) REFERENCES CONSTITUENCY(consti_id),
    FOREIGN KEY(v_id) REFERENCES VOTER(v_id),
    CHECK (age>=25)
);