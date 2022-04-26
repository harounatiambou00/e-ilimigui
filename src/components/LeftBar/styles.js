import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    leftBar : {
        minWidth : '40%',
    },
    drawerContent : {
        [theme.breakpoints.up("md")] : {
            width : 400,
        },
        [theme.breakpoints.down("md")] : {
            width : 300,
        },
        backgroundColor : '#EEEEEE',
        height : '100%'
    },
    leftBarHeader : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        color : '#222831',
    }

}));