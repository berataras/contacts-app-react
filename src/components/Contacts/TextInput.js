export default function TextInput({name, placeholder, onChange}) {
    return (
        <div>
            <input type="text" name={name} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}
