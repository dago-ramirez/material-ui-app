import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListComponent from './ListComponent';

export default function DrawerList({ className }) {
    return (
        <div>
            <div className={className} />
            <Divider />
            <ListComponent array={['Inbox', 'Starred', 'Send email', 'Drafts']} />
            <Divider />
            <ListComponent array={['All mail', 'Trash', 'Spam']} />
        </div>
    )
}
