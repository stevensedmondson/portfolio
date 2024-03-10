import Link from "next/link"

export default function Banner() {
    return (
        <div className="flex justify-between text-white w-full">    
            <div>
                <h1 className="uppercase text-3xl pl-[5rem] lg:pl-[10rem] pt-[2rem]">Steve</h1>
                <h1 className="text-3xl pl-[5rem] lg:pl-[10rem]">Edmondson</h1>
            </div>
            <nav className="flex text-xl uppercase pt-[3rem] pr-[5rem] gap-4 invisible xl:visible">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/skills'>Skills</Link>
                <Link href='/education'>Education</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/resume'>Resume</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
        </div>
    )
}