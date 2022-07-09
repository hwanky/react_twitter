import * as firebase from "firebase/app";

const firebaseConfig = {
  //.env를 만들어 키를 관리하면 gitignore를 통해 키를 보여주지 않음으로써 보안성 향상
  //반드시 REACT_APP을 붙여줘야함
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export default firebase.initializeApp(firebaseConfig);
