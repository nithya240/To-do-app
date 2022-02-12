class Authentication{
    registerSucccessfulLoggedIn(username,password){
        console.log('registerSucccessfulLoggedIn')
        sessionStorage.setItem('authenticatedUser',username)
        sessionStorage.setItem('authenticatedPassword',password)
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
        sessionStorage.removeItem('authenticatedPassword')
        
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user==null)return false;
        return true;
    }

    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user==null)return '';
        return user;
    }
}
export default new Authentication()