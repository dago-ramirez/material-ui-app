import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListComponent from './ListComponent';

export default function DrawerList({ className }) {
    return (
        <div>
            <div className={className} />
            <Divider />
            <ListComponent array={['Stepper 1', 'Stepper 2', 'Tabla', 'Formulario']} />
            <Divider />
            <ListComponent array={['All mail', 'Trash', 'Spam']} />
        </div>
    )
}
