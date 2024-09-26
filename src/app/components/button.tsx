interface ButtonProps {
    content: string;
    href: string;
}

export default function Button({ content, href }: ButtonProps) {
    return (
        <div>
            <a className="text-customBlack bg-customYellow font-semibold py-4 px-7 rounded-full text-lg hover:bg-customOrange hover:text-customWhite duration-300 uppercase"
                href={href}>{content}</a>
        </div>
    );
} 