import Login from './login'
import { useState } from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import { lightTheme, darkTheme } from './cor'

const App = () => {

    const [ theme, setTheme ] = useState( darkTheme )
    const [ dark, setDark ] = useState( true )

    const changeTheme = () => {
        if ( dark )
            setTheme( lightTheme )
        else
            setTheme( darkTheme )

        setDark( !dark )
    }

    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            <Login theme={ changeTheme } />
        </ThemeProvider>
    )
}

export default App;
