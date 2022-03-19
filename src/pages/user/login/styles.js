import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    login : {
        height:"100vh",
    },
    container : {
        backgroundColor: "#F7F7F7",
        display : 'flex',
        justifyContent : "center",
        alignItems: 'center',
        height: '100%',
        textAlign: 'center'
    },
    form : {
        maxWidth : "450px",
        backgroundColor: "white",
        padding: theme.spacing(2),
        borderRadius: 5,
    },
    logo : {
        width : "100px",
        height : "100px",
    },
    title : {
        fontFamily : "'Roboto Mono', monospace",
        color: "#B85C38",
    },
    userTypeButtons : {
        display: 'flex',
        justifyContent: 'space-around',
    },
    leftText : {
        textAlign : 'left',
    },
    centerText:{
        textAlign: 'center'
    }
}))