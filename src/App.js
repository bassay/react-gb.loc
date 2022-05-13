import "./App.scss";
import React, {useEffect, useState} from "react";
import MessageList from "./Message/MessageList";
import AddMessage from "./Message/AddMessage";
import {Typography, Box, Paper, Grid, Container} from '@mui/material';
import {styled} from '@mui/material/styles';
import List from "./List/List";

/*
// Добавить “массив чатов” - массив объектов с полями name и id (в качестве id
 можно выбрать любую уникальную строку). Добавить список чатов - он должен отображаться слева
 от списка сообщений. Используйте List и ListItem из material-ui (список пока не несет никакой функциональности).

*/

function App() {
    const [messageList, setMessageList] = useState([]);
    const [list, setList] = useState([]);

    const AUTHOR = {
        me: "Rustem",
        bot: "Bot",
    }

    // для стилизации
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author !== AUTHOR.bot) {
            let timerId = setInterval(() => {
                setMessageList([...messageList, newMessage]);
            }, 500)

            const newMessage = {
                id: Date.now(),
                author: "Bot",
                body: "Эхо: " + messageList[messageList.length - 1].body + " - " + Date.now(),
            };
            return () => {
                if (timerId) {
                    clearInterval(timerId);
                }
            }

        }
    }, [messageList]);

    function addMessage(body) {
        if (body !== '') {
            const newMessage = {
                id: Date.now(), author: "Rustem", body: body,
            }
            setMessageList([...messageList, newMessage]);
        }
    }

    return (<>
            <Container>
                <Box sx={{
                    // bgcolor: '#cfe8fc',
                    // width: '100vh',
                    // maxWidth: "xl",
                    flexGrow: 1
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Item>
                                <Typography
                                    variant="h6"
                                    component="h3"
                                >Список чатов</Typography>
                                <List>
                                </List>
                            </Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <Typography variant="h3"
                                            component={"h1"}>
                                    Мини чат с ботом
                                </Typography>
                                {messageList.length ? (
                                    <MessageList message={messageList}/>) : (
                                    <span>Начните чат! Напишите свое первое сообщение</span>)}
                                <AddMessage onCreate={addMessage}/>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>);
}
export default App;
