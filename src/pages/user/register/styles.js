import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container : {
        width : "100%",
        height : '100vh',
        padding : '0',
        [theme.breakpoints.up("sm")] : {
            display : 'flex',
        },
        [theme.breakpoints.down("sm")] : {
            maxHeight : '100vh',
        },
        backgroundColor: "#F7F7F7"
    },
    img : {
        height :"100vh",
        [theme.breakpoints.down("sm")] : {
            display : "none",
        }
    },
    form :{
        display : "flex",
        flexDirection : 'column',
        alignItems : 'center',
        paddingLeft : '2%',
        paddingRight : "2%",
        justifyContent : 'space-between',
        [theme.breakpoints.down("sm")] : {
            paddingLeft : '4%',
            paddingRight : "4%",
        },
    },
    logo : {
        width : "100px",
        height : "100px",
    },
    registrationHeader :{
        display : 'flex',
        width : "100%",
        [theme.breakpoints.up("md")] : {
            justifyContent : "space-between"
        },
        [theme.breakpoints.down("md")] : {
            flexDirection: "column",
            textAlign: "center",
            marginTop : theme.spacing(2),
            marginBottom: theme.spacing(2)
        }
    },
    title : {
        fontFamily : "'Roboto Mono', monospace",
        color: "#B85C38",
        [theme.breakpoints.down("md")] : {
            marginTop : theme.spacing(1),
            marginBottom: theme.spacing(3)
        }
    },
    userTypeButtons : {
        display: 'flex',
        justifyContent: 'space-around',
        minWidth: '30%',
    },
    small: {
        textAlign: 'center',
        fontFamily : "'Roboto Mono', monospace",
    },
    registrationFooter : {
        marginTop : "2%",
        marginBottom : "2%",
    },
    centerText : {
        textAlign : 'center',
    }
}))