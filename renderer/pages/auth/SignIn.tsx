import React from 'react'

import { Avatar, Button, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container} from '@material-ui/core'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Link from 'next/Link'
import Router from 'next/router'

export default function SignIn() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  })
  const [error, setError] = React.useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

  };

  const onChange = (event) => {
    const { target: { name, value } } = event

    setForm({ ...form, [name]: value})
  }

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {/*<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>*/}
        {/*  <LockOutlinedIcon />*/}
        {/*</Avatar>*/}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            onChange={onChange}
            value={form.email}
            required
            fullWidth
            autoFocus
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={onChange}
            value={form.password}
            required
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/auth/SignUp" as="/auth/sign-up">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}