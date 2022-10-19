
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
	"played_at" DATE, 
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

INSERT INTO "match"("id","team_1_score","team_2_score","game_id")
VALUES (1,11,9,1);

INSERT INTO "match"("id","team_1_score","team_2_score","game_id")
VALUES (2,11,5,2);

INSERT INTO "match"("id","team_1_score","team_2_score","game_id")
VALUES (3,7,11,3);

INSERT INTO "match"("id","team_1_score","team_2_score","game_id")
VALUES (4,8,11,4);

INSERT INTO "match"("id","team_1_score","team_2_score","game_id")
VALUES (5,11,8,5);

INSERT INTO "match"("id","team_1_score","team_2_score","game_id")
VALUES (6,9,11,6);

	
INSERT INTO "game" (
"id","user_id","played_at","location","notes","partner","opponent_1","opponent_2")
VALUES 
(1,1,'2022-10-08','Maple Grove', 'Game notes...', 'Billy', 'Exene', 'John');

INSERT INTO "game" (
"id","user_id","played_at","location","notes","partner","opponent_1","opponent_2")
VALUES 
(2,1,'2022-10-08','Maple Grove', 'Game Two', 'Billy', 'Exene', 'John');

INSERT INTO "game" (
"id","user_id","played_at","location","notes","partner","opponent_1","opponent_2")
VALUES 
(3,1,'2022-10-08','Maple Grove', 'Game three...', 'Billy', 'Exene', 'John');

INSERT INTO "game" (
"id","user_id","played_at","location","notes","opponent_1")
VALUES 
(4,1,'2022-10-08','Maple Grove', 'Game notes...', 'Exene');

INSERT INTO "game" (
"id","user_id","played_at","location","notes","opponent_1")
VALUES 
(5,1,'2022-10-08','Maple Grove', 'singles game 2', 'Exene');

INSERT INTO "game" (
"id","user_id","played_at","location","notes","opponent_1")
VALUES 
(6,1,'2022-10-08','Maple Grove', 'singles game 3', 'Exene');




	