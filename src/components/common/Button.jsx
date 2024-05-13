export default function Button({ variant, label, ...props }) {
    return (
        <button {...props} className={`${variant}-button`}>
            {label}
        </button>
    )
}