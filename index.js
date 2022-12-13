const express = require('express');
const querystring = require('querystring');
const axios = require('axios');
const { resolveSoa } = require('dns');
const port = 8888;
require('dotenv').config();

const server= express();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

server.get('/', (req, res) => {
    res.send('This is the HomePage')
});

// Handling the /login route
server.get('/login', (req, res) => {

    // Generate random string that will be passed as State in queryParams
    const generateRandomString = length => {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    // Stringify the params that will be passed in the redirect URL
    const queryParams = querystring.stringify(
        {
            client_id: client_id,
            redirect_uri: redirect_uri,
            state: generateRandomString(16),
            response_type: 'code'
        }
    );

    // Redirect to the Spotify login page
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`)
});

// Handling the /callback route
server.get('/callback', (req, res) => {
    // Get the code from the URL param
    const code = req.query.code;

    // Make a POST request to the /api/token endpoint to get access_token, its expire_time and the refresh token
    axios({
        method: 'POST',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirect_uri
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
        },
    })
    // If the login succeds redirect to the client URL,
    // and pass as params the useful info
    .then(response => {
        const params = querystring.stringify({
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token,
            expires_in: response.data.expires_in
        });

        res.send(params);

        // res.redirect(`http://localhost:8080/setup?${params}`);
    })
    .catch(err => {
        res.send(err);
    })
});

server.listen(port);