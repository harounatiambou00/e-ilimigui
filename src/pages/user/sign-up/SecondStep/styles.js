import { makeStyles } from "@material-ui/core";

export default makeStyles(theme =>({
    second_step_page:{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        color: '#064663'

    },
    second_step_page_container:{
        border: "2px solid #ddd",
        borderRadius: '5px',
        width: '60%',
        [theme.breakpoints.down("sm")]:{
            width: '100%',
            border : 'none'
        }
    },
    second_step_page_header:{
        textAlign: 'center',
        alignItems: 'center'
    },
    second_step_page_body : {
        padding: theme.spacing(4)
    },
    form_control:{
        marginTop: theme.spacing(2),
    },
    policyText : {
        fontWeight: 400,
        fontSize: '0.8em',
    },
    footer:{
        display: 'flex',
        alignItems : 'center',
        justifyContent:'center'
    }
}))