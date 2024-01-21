import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'

interface Props {
    MuiAppBar: any
    drawerWidth: any
    AppBarProps: any
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

const shouldForwardProp = (prop: any) => prop !== 'open'

const createAppBarStyles = ({ theme, open, drawerWidth }: { theme: any; open: boolean; drawerWidth: any }) => {
    const transition = theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    })

    const styles: any = {
        zIndex: theme.zIndex.drawer + 1,
        transition,
    }

    if (open) {
        styles.marginLeft = drawerWidth
        styles.width = `calc(100% - ${drawerWidth}px)`
        styles.transition = theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    }

    return styles
}

export const AppBarConfig = ({ MuiAppBar, drawerWidth }: Props) => {
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp,
    })<AppBarProps>((props) => createAppBarStyles({ ...props, drawerWidth }))

    return <ThemeProvider theme={createTheme()}>{/* ... */}</ThemeProvider>
}
