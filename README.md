# Technical Test -Mentorias-App_Academia-Geek-

## **Technical Test Descrition:**

**Monitorías App**
Is an app that helps to an academic coordinator to manage his faculty's instructors team agendas. The app lets coordinators to SignIn with an institutional profile setting it in the database. Then the logged coordinator would manage a data of his instructors' team (name, lastname, academic program, semester, DNI, phone number and email). After that, the coordinator would have access to each instructors' agenda letting him/her to take a look of existing appointments or set a new one with course, date, classroom and instructor's name record in the database.

Monitorías App uses firestore to manage records in database of coordinators' academic profiles and instructors' agendas. It works using `getDocs`, `query`, `where`, `collection`, `updateDoc` and `setDoc` methods to manage info between Firestore and the app. Authentications happens with Firebase Auth methods (_email and password or Google popups_). Finally the UI was made with Reactjs and several libraries like Redux, React-Redux, React-Icons, React-Bootstrap, Bootstrap, Styled-Components, React-Toastify, React-Router-Dom and Normalize.

**Test requirements link:** https://docs.google.com/document/d/1lUSxcqdYOYw5Eh3NLF9HGxjq2spH2tHM/edit?usp=sharing&ouid=112118444505608854622&rtpof=true&sd=true 

## **Test execution instructions:** 
To execute this technical test it is necesary to have installed _node.js_ at _v16.17.0_ version, _Git_ and _yarn_ at _v1.22.19_.

**Note:** To use and modify this app it should be done with _yarn_ because app was build with _yarn_.

Then it is necesary to clone the repository into a local directory in a console or a terminal, using: 
```
git clone https://github.com/sad-sad-094/PT-Mentorias-App_Academia-Geek/tree/main
```
Once the previous step was done it is neccessary to run (on console or terminal) 
```
yarn install
```
to get dependencies installed in local directory. After dependencies were installed it is just neccessary to run (on console or terminal) 
```
yarn start
``` 
command to run the app with _localhost_.

## **Deploy:**
Monitorías App was deployed with Firebase Hosting. For this deploy I should installed Firebase CLI with 
```
yarn global add firebase-tools
```
and setting Firebase Hosting services. It is necesary the following steps:

1.
```
yarn build
```
2.
```
firebase login
```
3.
```
firebase init
```
4.
```
firebase deploy
```

**Note:** Some of theese commands has his own steps that I should follow.


### Deploy URL: [https://monitoriasapp-academiageek.web.app](https://monitoriasapp-academiage-779cb.web.app)

 