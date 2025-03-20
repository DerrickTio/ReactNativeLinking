# React Native WebView App

## Overview
This is a React Native application built with Expo that integrates a WebView for navigating between a sandbox and a production environment. The app also includes functionality to open external links in a web browser or an external application.

## Features
- **WebView Navigation**: Load and navigate between a sandbox and a production environment inside a WebView.
- **External Links Handling**: Open URLs in an external browser or another app.
- **Communication Between WebView and React Native**:
  - Send messages from WebView to React Native.
  - Close WebView via WebView events.
- **Interactive UI**: Users can interact with the WebView using navigation buttons.

## Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <your-project-directory>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

3. Start the project:
   ```sh
   npx expo start
   ```

## Usage

- Press the **Open WebView** button to launch the WebView.
- Inside the WebView, use navigation buttons to switch between **Sandbox** and **Production** environments.
- Click on external links to open them in a web browser or an external app.
- Press **Back** inside the WebView to return to the main screen.

## File Structure
```
.
├── app/(tabs)
│   ├── index.tsx       # Main entry point with WebView logic
├── .expo               # Expo-specific files
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── README.md           # Project documentation
```

## Dependencies
- **Expo**
- **React Native**
- **react-native-webview**
- **react-native-linking**

## License
This project is licensed under the MIT License.

