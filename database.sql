
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

ALTER TABLE "user"
ADD "player_name" varchar(80);

CREATe TABLE "game" (
	"id" SERIAL PRIMARY KEY, 
	"user_id" INT NOT NULL REFERENCES "user",
	"played_at" TIMESTAMP, 
	"location" VARCHAR(80),
	"notes" VARCHAR(100),
	"partner" VARCHAR(80), 
	"opponent_1"VARCHAR(80),
	"opponent_2"VARCHAR(80)
	);
	
CREATE TABLE "match" (
	"id" SERIAL PRIMARY KEY,
	"team_1_score" INT NOT NULL, 
	"team_2_score" INT NOT NULL,
	"game_id" INT NOT NULL REFERENCES "game"

);
	