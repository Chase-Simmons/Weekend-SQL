CREATE TABLE "task" (
	"id" SERIAL PRIMARY KEY,
	"task_name" VARCHAR(80) NOT NULL,
	"is_complete" BOOLEAN
	);
	
INSERT INTO "task" ("task_name", "is_complete")
VALUES ('Dishes', false),
('Trash', false),
('Complete assignment', true),
('Prank Myron', false),
('Write music', true)