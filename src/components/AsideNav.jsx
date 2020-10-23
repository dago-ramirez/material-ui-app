import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';
import DrawerList from './DrawerList';

export default function AsideNav(props) {
    const theme = useTheme();
    // const container = props.window !== undefined ? () => window().document.body : undefined;
    
    return (
        <nav className={props.classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    // container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.mobileOpen}
                    onClose={props.onClickEvent}
                    classes={{
                        paper: props.classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <DrawerList className={props.classes.toolbar} />
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: props.classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <DrawerList className={props.classes.toolbar} />
                </Drawer>
            </Hidden>
        </nav>
    )
}
