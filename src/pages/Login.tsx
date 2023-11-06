import React, {useState} from 'react';

function Login() {
    const [document, setDocument] = useState({name: '', file: null, date: ''});
    const [errors, setErrors] = useState({name: '', file: '', date: ''});

    const handleChange = (e) => {
        const {name, value, type, files} = e.target;

        if (type === 'file') {
            if (files.length > 0) {
                setDocument({...document, [name]: files[0]});
                setErrors({...errors, file: ''});
            } else {
                setDocument({...document, [name]: null});
                setErrors({...errors, file: 'File is required'});
            }
        } else {

            setDocument({...document, [name]: value});
            if (name === 'name') {

                if (value.trim() === '') {
                    setErrors({...errors, name: 'Invalid name'});
                } else {
                    setErrors({...errors, name: ''});
                }
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!document.file) {
            setErrors({...errors, file: 'File is required'});
        }

        if (document.name.trim() === '') {
            setErrors({...errors, name: 'Invalid name'});
        }

        console.log('File: ', document.file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={document.name}
                onChange={handleChange}
            />
            {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
            <input
                type="file"
                name="file"
                onChange={handleChange}
            />
            {errors.file && <p style={{color: 'red'}}>{errors.file}</p>}

            <input
                type="date"
                name="date"
                value={document.date}
                onChange={handleChange}
            />
            {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
