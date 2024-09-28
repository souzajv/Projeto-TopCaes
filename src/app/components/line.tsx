interface lineProps {
    type: 'white' | 'orange' | 'red';
    className?: string;
}

export default function Line(props: lineProps) {

    const lineColor = () => {
        if (props.type === 'white') {
            return 'bg-customWhite';
        } else if (props.type === 'orange') {
            return 'bg-customOrange';
        } else {
            return 'bg-customRed';
        }
    }

    return (
        <div className={`relative h-40 w-full ${props.className || ''}`}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`${lineColor()} w-full h-0.5`}></div>
            </div>
        </div>
    )
}