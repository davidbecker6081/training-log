import './CustomButton.sass';

export const CustomButton = ({ label, onClick, disabled, className, children, isIconRight = false }) => {
    return (
        <button
            className={`button ${className} ${disabled ? 'is-disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {isIconRight ? (
                <div className="is-flex is-align-items-center">
                    <span className="is-flex mar-r-sm">{children}</span>
                    <span>{label}</span>
                </div>
            ) : (
                <div className="is-flex is-align-items-center">
                    <span>{label}</span>
                    <span className="is-flex mar-r-sm">{children}</span>
                </div>
            )}
        </button>
    );
}
