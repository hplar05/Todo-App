# To-Do List Application

## Project Description

This To-Do List app helps users keep track of their tasks efficiently. It provides a simple and intuitive interface to add, edit, and remove tasks. The app leverages modern state management and local storage techniques to ensure a smooth user experience.

![image](https://i.postimg.cc/VvH7rMQM/appimages.jpg)


## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/hplar05/to-do-list-application.git
    cd to-do-list-application
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the app:**
    ```bash
    npx expo start -c
    ```

4. **Build the app (if needed):**
    ```bash
    npm run build
    ```

## List of Implemented Features

- **State Management:** 
  - Implemented using Zustand for efficient and scalable state management.

- **Local Storage:** 
  - Utilizes AsyncStorage to persist tasks locally on the user's device.

- **Validation:** 
  - Employs ToastAndroid to provide instant feedback for add, input, and remove actions.

- **Task Modification:** 
  - Modal interface for editing and removing tasks.

- **Splash Screen:** 
  - Includes a splash screen for a better user experience during app startup.

## Known Issues or Limitations

- **No Database Integration:** 
  - The app does not use a backend database, so all data is stored locally on the user's device. This limits the ability to sync tasks across multiple devices.

- **Platform Dependency:** 
  - Some features like ToastAndroid are specific to Android and may require alternatives for iOS or other platforms.

- **Limited Offline Support:**
  - While the app works offline due to local storage, there is no mechanism to sync data when the user goes back online.

Feel free to contribute to the project by submitting issues or pull requests.
