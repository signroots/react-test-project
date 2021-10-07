import { Avatar, Button, Grid, Paper, TextField, Typography,Link } from '@material-ui/core'
import React from 'react'
import LockOutlinedIcon from '@material-ui/icons//LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = () => {

    const paperStyle={padding :20,height :'70vh',width:280,margin:"20px auto"}
    const avatarStyle={backgroundColor:"#06929d"}
    const btnStyle={margin:"8px 0"}
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                    </Grid>
                    <TextField label="username" placeholder="enter username" fullWidth required />
                    <TextField label="password" placeholder="enter password" type="password" fullWidth required />
                    <FormControlLabel
                        control={
                        <Checkbox
                           
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Remember me"
                    />    

                    <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Login</Button>                
                    <Typography>
                        <Link href="#">
                            Forgot password
                        </Link>
                    </Typography>
                    <Typography>Don't have an account ?
                        <Link href="#">
                            Sign in
                        </Link>
                    </Typography>
                    
                </Paper>
            </Grid>
          
        </div>
    )
}

export default Login
