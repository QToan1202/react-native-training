# REACT NATIVE TRAINING PLAN

**Aug 3rd, 2023**

## **OVERVIEW**

A revision of React Native training plan which focuses on the latest
version of React Native (v0.72). It will help trainees learn React
Native fundamentals step by step following the instructions and hands-on
practices.

## **TIMELINE**

- Basic: 2 weeks

  - At the end of this step, trainees should be able to join projects for hot training and doing React Native Components.

- Advanced: 3 weeks

## **PREREQUISITE**

Supporters should make sure trainees got the below prerequisites:

- [ES6](https://www.javascripttutorial.net/es6/)

- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)

- [React](https://reactjs.org/)

- [Storybook](https://storybook.js.org/)

- Unit testing:

  - [Jest](https://jestjs.io/docs/getting-started)

  - [React testing](https://reactnative.dev/docs/testing-overview)

- Install [nvm](https://github.com/nvm-sh/nvm#install--update-script) and [Node.js](https://nodejs.org/en/download/) v16.x

## **BASICS (4 days)**

### **BUILD TOOL**

We use [expo](https://expo.dev/) which is a set of tools
built around React Native and, while it has many features, the most
relevant feature for us right now is that it can get you writing a React
Native app within minutes.

### **HELLO WORLD**

Let's start your first project using npm and Expo CLI.

```bash
npm install -g expo-cli
```

Creating an app and start a development server

```bash
expo init HelloWorld

cd HelloWorld
npm start # you can also use: expo start
```

Then follow [Running your app on a simulator or virtual device](https://reactnative.dev/docs/environment-setup) to run your first app!

[Genymotion](https://www.genymotion.com/) is one of the best Android Virtual Devices, let's use it for development & testing.

### **THE BASICS**

First of all, please get started with [Using TypeScript in React Native](https://reactnative.dev/docs/typescript)

Step by step learning The Basics. For any examples you found in the
documentation, you can try it in your first React Native app created
above.

- [Core Components and Native Components](https://reactnative.dev/docs/intro-react-native-components)

- [Handling Text Input](https://reactnative.dev/docs/handling-text-input)

- [Using a ScrollView](https://reactnative.dev/docs/using-a-scrollview)

- [Using List Views](https://reactnative.dev/docs/using-a-listview)

- [Platform Specific Code](https://reactnative.dev/docs/platform-specific-code)

- [Fast Refresh](https://reactnative.dev/docs/fast-refresh)

- [Debugging](https://reactnative.dev/docs/debugging)

### **CORE COMPONENTS**

React Native provides a number of built-in Core Components ready for you
to use in your app

- [ActivityIndicator](https://reactnative.dev/docs/activityindicator)

- [Button](https://reactnative.dev/docs/button)

- [FlatList](https://reactnative.dev/docs/flatlist)

- [Image](https://reactnative.dev/docs/image)

- [ImageBackground](https://reactnative.dev/docs/imagebackground)

- [KeyboardAvoidingView](https://reactnative.dev/docs/keyboardavoidingview)

- [Modal](https://reactnative.dev/docs/modal)

- [Pressable](https://reactnative.dev/docs/pressable)

- [RefreshControl](https://reactnative.dev/docs/refreshcontrol)

- [ScrollView](https://reactnative.dev/docs/scrollview)

- [SectionList](https://reactnative.dev/docs/sectionlist)

- [StatusBar](https://reactnative.dev/docs/statusbar)

- [Switch](https://reactnative.dev/docs/switch)

- [Text](https://reactnative.dev/docs/text)

- [TextInput](https://reactnative.dev/docs/textinput)

- [TouchableHighlight](https://reactnative.dev/docs/touchablehighlight)

- [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)

- [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback)

- [View](https://reactnative.dev/docs/view)

- [VirtualizedList](https://reactnative.dev/docs/virtualizedlist)

### **APIs**

- [Alert](https://reactnative.dev/docs/alert)

- [Dimension](https://reactnative.dev/docs/dimensions)

- [Keyboard](https://reactnative.dev/docs/keyboard)

- [Platform](https://reactnative.dev/docs/platform)

- [StyleSheet](https://reactnative.dev/docs/stylesheet)

### **DESIGNS**

- [Style](https://reactnative.dev/docs/style)

- [Height and Width](https://reactnative.dev/docs/height-and-width)

- [Layout with Flex-box](https://reactnative.dev/docs/flexbox)

- [Images](https://reactnative.dev/docs/images)

- [Colors](https://reactnative.dev/docs/colors)

### **INTERACTION**

- [Handling Touches](https://reactnative.dev/docs/handling-touches)

- [Navigate between screens](https://reactnative.dev/docs/navigation)

- [Animations](https://reactnative.dev/docs/animations)

- [Testing](https://reactnative.dev/docs/testing-overview)

### **STORYBOOK**

[Storybook](https://storybook.js.org/) is an open source
tool for building UI components and pages in isolation. It streamlines
UI development, testing and documentation.

Install storybook into your first React Native app:

```bash
# install storybook

expo install @storybook/react-native@next @react-native-async-storage/async-storage
```

Then look at [Storybook Configuration](http://expo%20install%20@storybook/react-native@next%20@react-native-async-storage/async-storage)

### **PRACTICE**

This practice will let you understand more about React Native:

- You can choose one of those designs for your practice

  - [Food Delivery App](<http://figma.com/file/NbRUzaDoMd82rV5LzuO1Cz/Food-delivery-APP-(Community)>)

  - [Shopping App](https://www.figma.com/file/heaAiyZrYBGzJpuT0gGZfE/LAZA-UI-KIT-%F0%9F%9B%92?node-id=221%3A117)

  - [Healthy Food App](<https://www.figma.com/file/LLkkEV64nhoR8empRw79Kl/Healthy-Food-App-(Community)?node-id=0%3A1>)

  - [Grocery App](https://www.figma.com/file/cbyU4pamdddEA1uowX8Am8/grocery-marketplace-tradly.app?node-id=0%3A1)

- You can choose one platform Android or iOS, depending on your machine

- Apply [React Navigation](https://reactnavigation.org/)

- Storybook is required

- Unit test coverage should greater than 80%

## **ADVANCED**

This course will help you understand more about React Native networking,
notification, application performance & configuration, and getting
familiar with [Flipper](https://fbflipper.com/).

### **CONNECTIVITY**

- [Network](https://reactnative.dev/docs/network)

- [Security](https://reactnative.dev/docs/security)

### **NOTIFICATION**

- [React Native Push Notification](https://github.com/zo0r/react-native-push-notification)

### **ASYNC STORAGE**

- [React Native Async Storage](https://github.com/react-native-async-storage/async-storage)

### **PERFORMANCE**

- [Overview](https://reactnative.dev/docs/performance)

- [Optimizing Flatlist Configuration](https://reactnative.dev/docs/optimizing-flatlist-configuration)

- [​​RAM Bundles and Inline Requires](https://reactnative.dev/docs/ram-bundles-inline-requires)

- [Hermes](https://reactnative.dev/docs/hermes)

- [Profiling](https://reactnative.dev/docs/profiling)

### **DEBUGGING**

- [Flipper](https://fbflipper.com/) is a platform for debugging iOS, Android and React Native apps

### **FRAMEWORK (5 days)**

- Learning [Native base](https://github.com/GeekyAnts/NativeBase)

### **PRACTICE**

You will continue work with your Practice 1 application

- Create mocking APIs & integrate with current application

- Apply [Deep linking](https://reactnavigation.org/docs/deep-linking/) and [React Native Push Notification](https://github.com/zo0r/react-native-push-notification), use local notifications to handle notification

- Optimize application performance

  - Create a Google Sheet to log current application performance

  - Add the result after optimized performance for comparison

- Flipper is required for debugging

## **REFERENCES**

This is not in the plan, you can take time to read more about state
management, libraries, etc.

### **State Management**

- [Mobx state tree](https://mobx-state-tree.js.org/intro/welcome)

- [Zustand](https://github.com/pmndrs/zustand)

### **UI Components & Libraries**

- [React Native Web](https://necolas.github.io/react-native-web/)

- [Styled-components](https://styled-components.com/docs/basics#react-native)

- [React Native Elements](https://github.com/react-native-elements/react-native-elements)

- [Native Base](https://github.com/GeekyAnts/NativeBase)

- [React Native UI Kitten](https://blog.logrocket.com/react-native-component-libraries/#react-native-ui-kitten)

- [RNUI (React Native UI Library)](https://wix.github.io/react-native-ui-lib/)

- [Teaset](https://github.com/rilyu/teaset)

- [Shoutem UI](https://shoutem.github.io/docs/ui-toolkit/introduction)

- [React Native Paper](https://callstack.github.io/react-native-paper/index.html)

- [Lottie For React Native](https://github.com/lottie-react-native/lottie-react-native)

- [React Native Maps](https://github.com/react-native-maps/react-native-maps)

- [React Native Vision Camera](https://github.com/mrousavy/react-native-vision-camera)
