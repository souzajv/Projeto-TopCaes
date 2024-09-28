import Line from './line';

interface lineTitleProps {
    children: React.ReactNode,
    className: string,
    lineType: 'white' | 'orange' | 'red',
}

export default function LineTitle({ children, className, lineType }: lineTitleProps) {
    return (
        <div className="flex items-center justify-center w-full">
            <Line
                type={lineType}
                className='overflow-hidden w-full'
            />
            <div className={`${className} mx-2 text-center`}>
                {children}
            </div>
            <Line
                type={lineType}
                className='overflow-hidden w-full'
            />
        </div>
    )
}