import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 1,
        minWidth: 230,
        background: '#262b35',
        margin: 10,
        borderRadius: 5,
        padding: 1,
    },

    title: {
        height: '15%',
        background: '#252c36',
        width: '100%',
        display: 'flex',
        alignItems: 'center',

        '& > p': {
            paddingLeft: 10,
            fontSize: 18,
            color: '#535969',
        }
    },

    boxMain: {
        height: '85%',
        width: '100%',
        background: '#222832',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        '& > p': {
            height: '20%',
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
        }
    },

    grafic: {
        height: '100%',

    },

    boxTooltip: {
        background: '#fff',
        width: 300,
        borderRadius: 5,
    },

    tooltipTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333b47',
        margin: '10px 0',
    },

    tooltip: {
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',

        '& > span': {
            fontWeight: 'bold',
            paddingRight: 10,
            color: '#535969',
        },

        '& > p': {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#535969',

        },
        '&:last-child': {
            marginBottom: 10,
        }
    }

});

export default useStyles;