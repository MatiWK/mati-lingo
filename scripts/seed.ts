import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database")
        
        await db.delete(schema.courses)
        await db.delete(schema.userProgress)
        await db.delete(schema.units)
        await db.delete(schema.lessons)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeOptions)
        await db.delete(schema.challengeProgress)

        await db.insert(schema.courses).values([
            {
                // ID field isn't needed because we are using 
                // serial in our schema, but we will leave it
                id: 1,
                title: "Spanish",
                imageSrc: "/ES.svg"
            },
            {
                id: 2,
                title: "German",
                imageSrc: "/DE.svg"
            },
            {
                id: 3,
                title: "English",
                imageSrc: "/GB.svg"
            },
            {
                id: 4,
                title: "Croatian",
                imageSrc: "/HR.svg"
            },
            {
                id: 5,
                title: "Italian",
                imageSrc: "/IT.svg"
            },
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1, //Spanish
                title: "Unit 1",
                description: "Learn the basics of Spanish",
                order: 1,
            }
        ])

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1, //Unit 1
                order: 1,
                title: "Nouns"
            },
            {
                id: 2,
                unitId: 1, //Unit 1
                order: 2,
                title: "Verbs"
            },
            {
                id: 3,
                unitId: 1, //Unit 1
                order: 3,
                title: "Adjectives"
            },
            {
                id: 4,
                unitId: 1, //Unit 1
                order: 4,
                title: "Restaurants"
            },
            {
                id: 5,
                unitId: 1, //Unit 1
                order: 5,
                title: "Clubs"
            }
        ])

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1, // Nouns
                type: "SELECT",
                question: 'Which one of these is the "the man"?',
                order: 1
            },
            {
                id: 2,
                lessonId: 1, // Nouns
                type: "ASSIST",
                question: '"the man"?',
                order: 2
            },
            {
                id: 3,
                lessonId: 1, // Nouns
                type: "SELECT",
                question: 'Which one of these is the "the robot"?',
                order: 3
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1, // Which one of these is "the man"
                imageSrc: "/es_man.png",
                correct: true,
                text: "el hombre",
                audioSrc: "/es_man.mp3"
            },
            {
                challengeId: 1,
                imageSrc: "/es_woman.png",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3"
            },
            {
                challengeId: 1,
                imageSrc: "/es_robot.png",
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3"
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 2, // Which one of these is "the man"
                correct: true,
                text: "el hombre",
                audioSrc: "/es_man.mp3"
            },
            {
                challengeId: 2,
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3"
            },
            {
                challengeId: 2,
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3"
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 3, // Which one of these is "the robot"
                imageSrc: "/es_man.png",
                correct: false,
                text: "el hombre",
                audioSrc: "/es_man.mp3"
            },
            {
                challengeId: 3,
                imageSrc: "/es_woman.png",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3"
            },
            {
                challengeId: 3,
                imageSrc: "/es_robot.png",
                correct: true,
                text: "el robot",
                audioSrc: "/es_robot.mp3"
            }
        ])


        

        console.log("Seeding finished")
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database")
    }
};

main();