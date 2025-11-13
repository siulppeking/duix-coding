import "./Button.css";

const Button = ({
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    onClick
}) => {
    const className = `btn btn-${variant} btn-${size}`;
    return (
        <button className={className} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
