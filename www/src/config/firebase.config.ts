import { NODE_ENV_DEV } from '@/utils/NODE_ENV'
import { initializeApp } from 'firebase/app'
import 'firebase/app-check'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import config from 'config'

if (NODE_ENV_DEV) {
    // @ts-expect-error firebase app check debug token
    window.FIREBASE_APPCHECK_DEBUG_TOKEN = true
}

const firebaseConfig = {
    apiKey: config.get<string>('firebase.apiKey'),
    authDomain: config.get<string>('firebase.authDomain'),
    projectId: config.get<string>('firebase.projectId'),
    storageBucket: config.get<string>('firebase.storageBucket'),
    messagingSenderId: config.get<string>('firebase.messagingSenderId'),
    appId: config.get<string>('firebase.appId'),
    measurementId: config.get<string>('firebase.measurementId'),
}

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseStorage = getStorage(firebaseApp)
export const firebaseProvider = new GoogleAuthProvider()
// export const firebaseAppCheck = initializeAppCheck(firebaseApp, {
//     provider: new ReCaptchaV3Provider(dotenv.get(ENV.FIRE_APPCHECK_KEY)),
//     isTokenAutoRefreshEnabled: true,
// })
