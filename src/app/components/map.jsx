import { BiMapPin } from "react-icons/bi";

export default function Map({ className }) {
    return (
        <div className={`flex flex-col items-center gap-2 ${className}`}>
            <div className="flex gap-2 justify-center items-center max-w-64">
                <BiMapPin className="text-customOrange size-6 min-w-6 mt-[-4px]" />
                <p className="font-textos text-customOrange text-sm font-semibold">
                    R. Ananias Ferreira de Andrade, 3183 - Lagoinha, Porto Velho/RO</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.2707545413264!2d-63.858494099999994!3d-8.7605766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325b5ea8ad701f%3A0xc00dee01ec750f39!2sR.%20Ananias%20Ferreira%20de%20Andrade%2C%203183%20-%20Lagoinha%2C%20Porto%20Velho%20-%20RO%2C%2076824-530!5e0!3m2!1spt-BR!2sbr!4v1726511541610!5m2!1spt-BR!2sbr"
                width="270" height="250" loading="lazy"
                className="rounded-3xl">
            </iframe>
        </div>
    )
};