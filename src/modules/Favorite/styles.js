import { makeStyles } from '@material-ui/styles';

const listStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0, 3),
        marginTop: theme.spacing(2),
        height: '100%',
        overflowX: 'hidden',
    },
}));

export default listStyles;
