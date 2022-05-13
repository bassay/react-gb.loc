import React from "react";
// import ListItem from "./ListItem"

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
    <Button key="one">c ботом</Button>,
    <Button key="two">с Часами</Button>,
];

function List() {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="outlined"
                size="large"
                fullWidth={true}
            >
                {buttons}
            </ButtonGroup>

        </Box>
    )
}

export default List