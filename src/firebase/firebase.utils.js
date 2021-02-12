import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDYjGre-jjYN9D8xU1Yox1ywX4640rnogc',
	authDomain: 'shop-db-3cb37.firebaseapp.com',
	databaseURL: 'https://shop-db-3cb37-default-rtdb.firebaseio.com',
	projectId: 'shop-db-3cb37',
	storageBucket: 'shop-db-3cb37.appspot.com',
	messagingSenderId: '303915770517',
	appId: '1:303915770517:web:7b66b8315d03a6971db19c',
	measurementId: 'G-DDWL2Z5GWQ'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
