import React, {useState} from "react";

function AddMessage({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                value={value}
                onChange={
                    event => setValue(event.target.value)
                }
            />
            <button type={'submit'}>Отправить</button>
        </form>
    )
}

export default AddMessage