interface PrincipalButtonProps {
    content: string;
    href: string;
    className: string,
}

export default function PrincipalButton({ content, href, className }: PrincipalButtonProps) {
    return (
        <div className={`${className}`}>
            <a className="text-customBlack bg-customYellow font-semibold py-6 px-9 rounded-full text-3xl hover:bg-customOrange hover:text-customWhite duration-300 uppercase"
                href={href}>{content}</a>
        </div>
    );
} 