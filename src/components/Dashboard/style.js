import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    container: {
        width: '100%',
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '10%',
        padding: 10,
    },

    main: {
        height: '90%',
        width: '100%',
        display: 'flex',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },

    boxes: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        width: '60%',

        [theme.breakpoints.up('sm')]: {
            width: '60%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },

    boxToday: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '40%',
        padding: 10,
        
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },

    mainBoxToday: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        background: '#252c36',
        margin: 10,
        borderRadius: 5,
    },

    TodayTitle: {
        height: '15%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 10,

        '& p': {
            color: '#535969',
            fontSize: 18,
            padding: 4,
        }
    },

    BoxGrafics: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',  
        
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    grafic:{
        flex: 1,
        width: '100%',
        height: 300,
    },

    infoGrafic:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    }

}))

export default useStyles;