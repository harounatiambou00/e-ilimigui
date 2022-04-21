import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    leftBar : {
        minWidth : '40%',
    },
    drawerContent : {
        [theme.breakpoints.up("md")] : {
            width : 350,
        },
        [theme.breakpoints.down("md")] : {
            width : 250,
        },
        backgroundColor : '#FFD369',
        height : '100%'
    },
    leftBarHeader : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        color : '#222831',
    }

}));