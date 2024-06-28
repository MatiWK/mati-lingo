import { Button } from "@/components/ui/button";
import { getCourseById } from "@/db/queries";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
    title: string;
};

export const Header = ({title}: Props) => {

    return (
        <div className="flex justify-between items-center sticky
        top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] border-b-2 mb-5
        text-neutral-500 lg:z-50 ">
            <Link href="/courses">
                <Button size="sm" variant="ghost">
                    <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
                </Button>
            </Link>
            <h1 className="font-bold text-lg">
                {title}
            </h1>
            <div />
        </div>
    )
}