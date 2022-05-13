import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// function SendIcon() {
//     return null;
// }

function AddMessage({onCreate}) {
    const [value, setValue] = useState("");

    function submitHandler(event) {
        event.preventDefault();
        if (value.trim()) {
            onCreate(value);
            setValue("");
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <TextField
                id="outlined-multiline-static"
                label="Введите сообщение"
                autoFocus={true}
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />

            <Button
                style={ {marginLeft: "10px",}}
                variant="contained"
                type={"submit"}
                endIcon={<SendIcon />}
                size="large"
            >
                go
            </Button>
            {/*<button type={"submit"}>Отправить</button>*/}
        </form>
    );
}

export default AddMessage;
