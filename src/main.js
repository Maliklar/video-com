import { createApp } from 'vue'
import App from './App.vue'
import store from './store'





// Initialize Firebase

// async function m() {
//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//             first: "Ada",
//             last: "Lovelace",
//             born: 1815
//         });
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }

// }

// console.log(m());


createApp(App).use(store)
    .mount('#app');