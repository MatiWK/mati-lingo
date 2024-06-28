import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { Home, Loader } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

type Props = {
    className?: string;
}

export const Sidebar = ({className}: Props) => {
    return (
        <div className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
        )}>
            <Link href="/learn">
                <div className='flex items-center gap-x-3 pl-4 pt-8 pb-7 '>
                    <Image width={40} height={40} src="/mascot.png" alt="mascot"/>
                    <h1 className='text-2xl font-extrabold tracking-wide text-green-500'>
                        Lingo
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem 
                label="learn" 
                href='/learn' 
                iconSrc="/learn.svg"
                />
                <SidebarItem 
                label="leaderboard" 
                href='/leaderboard' 
                iconSrc="/leaderboard.svg"
                />
                <SidebarItem 
                label="quests" 
                href='/quests' 
                iconSrc="/quests.svg"
                />
                <SidebarItem 
                label="shop" 
                href='/shop' 
                iconSrc="/shop.svg"
                />
            </div>
            <div >
                <ClerkLoading>
                    <Loader className="w-5 h-5 text-muted-foreground" animate-spin/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
            
        </div>
    )
}