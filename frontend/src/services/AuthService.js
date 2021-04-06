export default class Auth{
    
    static myInstance = null;
    static getInstance(){
        if(Auth.myInstance == null){
            Auth.myInstance = new Auth();
        }
       return this.myInstance;
    }

    authenticated = false;
    email = '';
    id ='';
    role = '';

    username = '';

    login(email, id, role){
        this.authenticated = true;
        this.email = email;
        this.id = id;
        this.role = role;
        this.username = email.substr(0, email.indexOf('@'));
    }
    
    getEmail()
    {
        return this.email;
    }

    getId()
    {
        return this.id;
    }

    getRole(){
        return this.role;
    }

    getUsername(){
        return this.username;
    }

    isAuthenticated(){
        return this.authenticated;
    }

    isAdmin(){
        if(this.role === 'ROLE_ADMIN')
            return true;
        return false;
    }

    isStaff(){
        if(this.role === 'ROLE_STAFF')
            return true;
        return false;
    }

    isGuest(){
        if(this.role === 'ROLE_GUEST')
            return true;
        return false;
    }

    logout(){
        this.authenticated = false;
        this.id = '';
        this.email = '';
        this.role = '';

        this.username = '';
        
    }
}
