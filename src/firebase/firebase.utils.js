import firebase from 'firebase/app';
import 'firebase/firestore';

const config = 'UOUT API AND INFO HERE'

export const saveMessageIntoDatabase = ( message ) => {
	const messageTime = Date.now()
	const messageRef = firestore.doc(`messages/${messageTime}`);

	messageRef.set({
		name: message.name,
		company: message.company,
		email: message.email,
		phone: message.phone,
		message: message.message
	})
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();


