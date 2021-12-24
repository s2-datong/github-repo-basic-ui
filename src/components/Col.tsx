import '../css/Col.css'
export const Col: React.FC<{style?: any, className?: string}> = ({children, style, className}) => {

    return (
        <div className={`col ${className}`} style={style}>
            {children}
        </div>
    )
}