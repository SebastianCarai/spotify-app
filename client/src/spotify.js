let spotify = {
    login(){
        // Save URL Parameters to variables
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        const accessToken = urlParams.get('access_token');
        const refreshToken = urlParams.get('refresh_token');
        const expiresIn = urlParams.get('expires_in');

        if(!localStorage.getItem('accessToken')){
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('expiresIn', expiresIn);
        }
    },

    logout(){
        console.log('Logged out');
    }
}

export default spotify;