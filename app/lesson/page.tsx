import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "./quiz";

const Lesson = async () => {
    const lessonData = getLesson();
    const userProgressData = getUserProgress();

    const [
        lesson,
        userProgress
    ]  = await Promise.all([
        lessonData,
        userProgressData
    ]);

    if (!lesson || !userProgress) {
        redirect("/learn")
    }

    const initialPercantage = lesson.challenges
    .filter((challenge) => challenge.completed)
    .length / lesson.challenges.length * 100;

  return (
    <Quiz 
    initialLessonId={lesson.id}
    initialLessonChallenges={lesson.challenges}
    initialHearts={userProgress.hearts}
    initialPercentage={initialPercantage}
    userSubscription={null}
    />
  )
}

export default Lesson
