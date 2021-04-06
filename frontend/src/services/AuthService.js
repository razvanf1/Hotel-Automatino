export default class Auth{
    static myInstance = null;
    static getInstance(){
        if(Auth.myInstance == null){
            Auth.myInstance = new Auth();
        }
       return this.myInstance;
    }

    authenticated = false;
    role = '';

    login(r){
        this.authenticated = true;
        this.role = r;
    }
    
    setRole(role){
        this.role = role;
    }

    getRole(){
        return this.role;
    }

    isAuthenticated(){
        return this.authenticated;
    }

    isAdmin(){
        if(this.role === 'admin')
            return true;
        return false;
    }

    isStaff(){
        if(this.role === 'staff')
            return true;
        return false;
    }

    isGuest(){
        if(this.role === 'guest')
            return true;
        return false;
    }

    logout(){
        this.authenticated = false;
        this.role = -1;
    }
}
