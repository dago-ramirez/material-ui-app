import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function FormComponent() {
    const classes = useStyles();
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')

    const guardarDatos = (e) => {
        e.preventDefault()

        if (!fruta.trim()) {
            console.log('esta vacio fruta')
            return
        }

        if (!descripcion.trim()) {
            console.log('esta vacio descripcion')
            return
        }

        console.log('procesando datos...' + fruta + descripcion)

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h3">
                    Formulario
                </Typography>
                <form className={classes.form} noValidate onSubmit={guardarDatos} >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="fruit"
                        label="Fruta"
                        name="fruit"
                        autoFocus
                        onChange={ (e) => setFruta(e.target.value) }
                    />
                    <TextField
                        multiline
                        rows='2'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="description"
                        label="Descripción"
                        id="description"
                        onChange={ e => setDescripcion(e.target.value) }
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Enviar
                    </Button>
                </form>
            </div>
        </Container>
    );
}