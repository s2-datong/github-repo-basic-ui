export const Col: React.FC<{style?: any}> = ({children, style}) => {

    const _style = {
        ...style,
        height: '100%',
        width: '50vw'
    };
    return (
        <div style={_style}>
            {children}
        </div>
    )
}