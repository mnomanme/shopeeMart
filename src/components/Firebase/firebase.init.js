import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const initializeAuthentication = () => {
	initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* steps for authentication

step-1: initial setup 
1. firebase: create project 
2. create web app 
3. get configuration
4. initialize firebase
5. enable auth methdod  

step-2: steup component
1. create login component 
2. create register component 
3. create route for login and registration

step-3: set auth system
1. setup sign in method
2. setup sign out method 
3. use state 
4. special ovserver 
5. return necessary methods and states from useFirebase
 
step-4: create auth context hook (useAuth)
1. create a auth context 
2. create context Provider
3. set context Provider context value
3. use Auth Provider
4. create useAuth hook

step-5 create private hook
1.  create pirvate hook
2. set private hook

step-6: redirect after login
1. after login redirect user to their desired destination


*/
