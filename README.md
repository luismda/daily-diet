# Daily Diet 🍽️😋

<img width="180" src="https://github.com/luismda/daily-diet/assets/88680118/2255380c-855a-47a3-a306-3b36aea86697" alt="" />
<img width="180" src="https://github.com/luismda/daily-diet/assets/88680118/0945044b-8133-4e31-9430-be28e17f5553" alt="" />
<img width="180" src="https://github.com/luismda/daily-diet/assets/88680118/bdb66eda-c5fc-49fd-8a7d-607fc8994130" alt="" />
<img width="180" src="https://github.com/luismda/daily-diet/assets/88680118/4aaaed73-2175-4bad-ab37-c17e60e31d04" alt="" />
<img width="180" src="https://github.com/luismda/daily-diet/assets/88680118/ed4141db-49e0-4795-8b1b-caa2887b5f63" alt="" />
<img width="180" src="https://github.com/luismda/daily-diet/assets/88680118/e042bd15-3464-4397-8ea9-9392d7e5f2e1" alt="" />
<img width="180" src="https://github.com/luismda/daily-diet/assets/88680118/f6663614-eb86-40de-9d8c-397444e9edf2" alt="" />
<img width="180" src="https://github.com/luismda/daily-diet/assets/88680118/25a55f8d-7831-45ea-ba45-ddedefb51a68" alt="" />

---

## About

Daily Diet is a mobile application to control your diet. In it you can register your meals and follow your progress.

With this application, you can register a new meal at a specific date and time, informing whether or not it is in your diet. It is also possible to view the details of each meal, as well as edit and delete your already registered meals. In addition, the application provides you with a follow-up of your diet, providing feedback through some statistics and metrics based on the meals already registered, such as the best sequence of meals within the diet, percentage of meals in the diet, among other information.

The project was developed using these technologies:

- TypeScript
- React Native
- Expo Managed Workflow
- NativeWind (*library to use TailwindCSS in React Native*)
- React Navigation (*stack navigation*)
- Async Storage (*used to local storage of meals*)
- React Hook Form
- Zod

Finally, this project was a challenge developed in the React Native training in [**Rocketseat**](https://github.com/rocketseat-education) **Ignite** course. The main purpose of this app was to practice **styling, navigation and local storage**, as well as some **React Hooks and techniques, and good coding practices**.

[**Access the project layout in Figma**](https://www.figma.com/community/file/1218573349379609244)

## Instructions

- Requirements:
  - [Node.js LTS](https://nodejs.org/en)

1. Clone the repository:

```sh
git clone https://github.com/luismda/daily-diet.git
```

2. Install the dependencies:

```sh
npm i
```

3. Run app:

```sh
npm start
```

4. To preview the app, you can use Expo Go on your physical device or use an Android or iPhone emulator on your computer. See some more details in the [**React Native**](https://reactnative.dev/docs/environment-setup?guide=quickstart) and [**Expo**](https://docs.expo.dev/get-started/expo-go/) documentation.

## Get started

A good starting point to get to know the project better is to look at the code, so you can start with the `screens` folder, where all the project's screens are located. In the `routes` folder, you will also find all the routes defined in the app.

All components were created inside the `components` folder. You will notice that some of them have more than one file for the same component. This happens because of the **Composition Pattern**, which was used in some cases.

Finally, in the `storage` folder you will find the functions that handle **Async Storage** and handle local read and write operations. It is important to highlight that the key used to store the meals is defined in the constants folder.

## Created by

Luís Miguel | [**LinkedIn**](https://www.linkedin.com/in/luis-miguel-dutra-alves/)

##

**#NeverStopLearning 🚀**
