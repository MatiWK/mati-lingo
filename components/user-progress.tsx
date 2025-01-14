import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
    activeCourse: typeof courses.$inferSelect;
    hearts: number;
    points: number;
    activeSubscription: boolean;
}

export const UserProgress = ({
    activeCourse,
    hearts,
    points,
    activeSubscription
}: Props) => {
    
    return (
        <div className="flex items-center justify-between gap-x-2 w-full ">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image 
                    src={activeCourse.imageSrc}
                    alt={activeCourse.title}
                    width={32}
                    height={32}
                    className="rounded-md border"
                    />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image 
                    src="/points.svg"
                    alt="points"
                    width={28}
                    height={28}
                    className="mr-2"
                    />
                    {points}

                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image 
                    src="/hearts.svg"
                    alt="hearts"
                    width={22}
                    height={22}
                    className="mr-2"
                    />
                    {activeSubscription 
                    ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> 
                    : hearts
                    }
                    

                </Button>
            </Link>

            

        </div>
    )
}