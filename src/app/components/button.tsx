interface ButtonProps {
    content: string;
    href: string;
    className: string,
}

export default function Button({ content, href, className }: ButtonProps) {
    return (
        <div className={`${className}`}>
            <a className="text-customBlack bg-customYellow font-semibold py-4 px-7 rounded-full text-lg hover:bg-customOrange hover:text-customWhite duration-300 uppercase
            3xl:text-3xl 3xl:py-6 3xl:px-12"
                href={href}>{content}</a>
        </div>
    );
} 