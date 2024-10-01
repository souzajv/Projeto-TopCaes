interface SocialProps {
    children: React.ReactNode,
    href: string,
    text: string,
}
export default function Social({ children, href, text }: SocialProps) {
    return (
        <a href={href} target="_blank" className="flex items-center gap-2 text-customWhite text-sm opacity-70 hover:text-customBlack duration-300
        md:text-lg
        2xl:text-2xl
        3xl:text-4xl">
            {children}
            <p>{text}</p>
        </a>
    );
}
