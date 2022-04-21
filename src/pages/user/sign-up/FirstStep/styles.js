import { makeStyles } from "@material-ui/core";

export default makeStyles(theme =>({
    first_step_page:{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color : "#222831",
        width: '100%'
    },
    first_step_page_container:{
        border: "2px solid #ddd",
        borderRadius: '5px',
        width: '50%',
        backgroundColor : '#EEEEEE',
        [theme.breakpoints.down("sm")]:{
            width: '90%',
        }
    },
    first_step_page_header:{
        textAlign: 'center',
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    first_step_page_body : {
        padding: theme.spacing(4)
    },
    user_type_choice_title : {
        textAlign: 'center',
        marginTop: theme.spacing(2)
    },
    send_message_notif : {
        fontSize: '0.7em',
        marginTop: '1%'
    },
    go_to_sign_in_page:{
        width: '100%',
        fontSize: '0.7em',
        textAlign: 'center',
    }
}))