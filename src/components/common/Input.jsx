export default function Input({ label, ...props }) {
    return (
        <div className="input-container">
            <input
                placeholder=""
                {...props}
                className="custom-input"
            />
            <label htmlFor={props.id} className="custom-input-label">{label}</label>
        </div>
    )
}