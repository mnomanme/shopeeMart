import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import initializeAuthentication from '../components/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});

	const auth = getAuth();

	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = () => {
		return signInWithPopup(auth, googleProvider);
		// .then((result) => {
		// 	console.log(result);
		// })
		// .catch((error) => {
		// 	console.log(error);
		// });
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
		});
	}, [auth]);

	return { user, setUser, signInUsingGoogle, logOut };
};

export default useFirebase;
