import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CollectionsIcon from '@material-ui/icons/Collections';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function ListComponent({ array }) {
    return (
        <>
            <List>
                {array.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index > 1 ? <DashboardIcon /> : <CollectionsIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </>
    )
}
