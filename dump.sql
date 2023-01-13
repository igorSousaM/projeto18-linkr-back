CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(50) NOT NULL,
	"password" TEXT NOT NULL,
	"email" TEXT(100) NOT NULL UNIQUE,
	"photo" TEXT NOT NULL
)

CREATE TABLE "sessions" (
	"id" SERIAL PRIMARY KEY,
	"userId" INTEGER NOT NULL REFERENCES "users"("id"),
	"token" TEXT NOT NULL UNIQUE,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
)

CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"userId" INTEGER NOT NULL REFERENCES "users"("id"),
	"text" TEXT NOT NULL,
	"link" TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
)

CREATE TABLE "likes" (
	"id" SERIAL PRIMARY KEY,
	"userId" INTEGER NOT NULL REFERENCES "users"("id"),
	"postId" INTEGER NOT NULL REFERENCES "posts"("id"),
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
)

CREATE TABLE "hashtags" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(50) NOT NULL,
	"postId" INTEGER NOT NULL REFERENCES "posts"("id")
)

CREATE TABLE "comments" (
	"id" SERIAL PRIMARY KEY,
	"text" TEXT NOT NULL,
	"userId" INTEGER NOT NULL REFERENCES "users"("id"),
	"postId" INTEGER NOT NULL REFERENCES "posts"("id")
)