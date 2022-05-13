import React from 'react';
import ReactDOM from 'react-dom/client';

// import './index.css';
import App from './App';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {orange, indigo} from "@mui/material/colors";

const theme = createTheme({
    status: {
        danger: orange[500],
    },
    // palette: {
    //     mode: 'dark',
    // },
    palette: {
        primary: indigo,
        secondary: {
            main: '#039be5',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);

// Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17
// ReactDOM.render(
//     <React.StrictMode>
//         {/*<ThemeProvider theme={darkTheme}>*/}
//         {/*    <App/>*/}
//         {/*</ThemeProvider>*/}
//
//         <ThemeProvider theme={theme}>
//             <App/>
//         </ThemeProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );