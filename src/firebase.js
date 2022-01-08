import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1fo-nan8gZQXUh07bSJ7mlMtnvzfy84k",
  authDomain: "payment-app-8becc.firebaseapp.com",
  projectId: "payment-app-8becc",
  storageBucket: "payment-app-8becc.appspot.com",
  messagingSenderId: "508645583501",
  appId: "1:508645583501:web:c13ba72bec36e2765450c4",
};

const app = initializeApp(firebaseConfig);
export { app };
