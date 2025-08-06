# ✅ Firebase Todo Task Management App (Expo SDK 53)

A cross-platform **Todo app** built using **React Native (Expo)** and **Firebase**, featuring Google login and full task CRUD support.

## 🚀 Features

- 🔐 Google Authentication (via Firebase)
- 📝 Add, edit, and delete tasks
- 🗂 Organize tasks with title, description, due date, and status
- 💾 Cloud storage using Firestore
- 🔄 Pull-to-refresh
- 🧭 React Navigation & Context API
- 📱 Compatible with Android and iOS

---

## 🛠️ Tech Stack

- Expo SDK 53
- Firebase (Auth + Firestore)
- React Native
- React Navigation
- Context API

---

## 📂 Folder Structure

```
TodoApp/
├── App.js
├── firebase.js
├── package.json
├── README.md
├── /contexts
│   └── AuthContext.js
├── /services
│   └── taskService.js
├── /screens
    ├── LoginScreen.js
    ├── TaskListScreen.js
    └── AddEditTaskScreen.js
```

---

## 🧪 Getting Started

### 1. 📦 Install dependencies

```bash
npm install
```

### 2. ▶️ Start the development server

```bash
npx expo start
```

### 3. 📲 Run on mobile

- Install **Expo Go** app on your phone
- Scan the QR code in the terminal or browser

---

## 🔧 Firebase Setup

### ✅ Enable Google Login

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing
3. Enable **Google Authentication**
4. Add the following to Authorized domains:
   ```
   localhost
   127.0.0.1
   expo.io
   auth.expo.io
   ```
5. In **OAuth Redirect URIs**, add:
   ```
   https://auth.expo.io/@your-username/TodoApp
   ```

### 🔑 Add Firebase Config

Update `firebase.js` with your Firebase credentials:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID",
};
```

---


## ✅ To Do (Optional)

- [ ] Add priorities / tags to tasks
- [ ] Push notifications for due tasks
- [ ] Offline mode with local cache
- [ ] App theming (dark/light)

---

## 📄 License

“This project is a part of a hackathon run by 
https://www.katomaran.com ” 


