
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


ALTER TABLE "user"CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
    
);

CREATE TABLE "match" (
	"id" SERIAL PRIMARY KEY,
	"team_1_score" INT NOT NULL, 
	"team_2_score" INT NOT NULL,
	"game_id" INT NOT NULL REFERENCES "game"

);

CREATE TABLE "game" (
	"id" SERIAL PRIMARY KEY, 
	"user_id" INT NOT NULL REFERENCES "user",
	"date" DATE, 
	"score_a" INT,
	"score_b" INT,  
	"location" VARCHAR(80),
	"partner" VARCHAR(80), 
	"opponent_1"VARCHAR(80),
	"opponent_2"VARCHAR(80),
	"notes" VARCHAR(120)

);




	