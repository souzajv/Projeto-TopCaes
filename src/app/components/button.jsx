export default function Button({ content }) {
    return (
        <div>
            <a className="font-titulos text-customBlack bg-customYellow font-semibold py-3 px-7 rounded-full text-lg hover:bg-customOrange hover:text-customWhite duration-300 uppercase"
                href="">{content}</a>
        </div>
    );
} 