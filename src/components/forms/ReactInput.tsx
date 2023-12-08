import React, {useEffect, useState} from 'react'

export default function ReactInput({name, ...props}) {
    const [type, setType] = useState("")
    const [label, setLabel] = useState("")
    const [placeholder, setPlaceholder] = useState("")
    useEffect(() => {
        setType(props.type ? props.type : 'text')
        const string = props.label ? props.label : name
        setLabel(string.charAt(0).toUpperCase() + string.slice(1))
        if (!props.placeholder) {
            setPlaceholder("Enter " + label)
        }
    }, [label])

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder}  {...props}/>

        </>
    )
}
