import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            light: "#9f3f68",
            main: "#6d0a3e",
            dark: "#3d0018",
            contrastText: "fff"
        },
        secondary: {
            light: "#ffd149",
            main: "#ffa000",
            dark:"#c67100",
            contrastText: "000"
        },
        success: {
        main: "#fff"
    }
}
})