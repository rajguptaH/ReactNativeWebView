# Welcome to React Native Webview!

Hi! I'm Raj 
To Change The WebView Uri Source go to /App.tsx-> Look For **WebView** Componenet And then Change Uri In Source Property Of this component .
```js
  return (
    <SafeAreaView style={{ height: 780 }} >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebView  source={{ uri: 'example.com' }}
      />
      
    </SafeAreaView>
  );
}
```
# Question And Answer
## Question 1 :- How to Run React Native Project
If You want To Run The Project Then Make Sure You have installed Android Emulator or You have connected your device with Debugging mode and android sdk 
and then just run these commands 
```cmd
npm start
```
Then Output will look like this 
> SdtPOC@0.0.1 start
> react-native start


                        ▒▒▓▓▓▓▒▒
                     ▒▓▓▓▒▒░░▒▒▓▓▓▒
                  ▒▓▓▓▓░░░▒▒▒▒░░░▓▓▓▓▒
                 ▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▓▓
                 ▓▓░░░░░▒▓▓▓▓▓▓▒░░░░░▓▓
                 ▓▓░░▓▓▒░░░▒▒░░░▒▓▒░░▓▓
                 ▓▓░░▓▓▓▓▓▒▒▒▒▓▓▓▓▒░░▓▓
                 ▓▓░░▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░▓▓
                 ▓▓▒░░▒▒▓▓▓▓▓▓▓▓▒░░░▒▓▓
                  ▒▓▓▓▒░░░▒▓▓▒░░░▒▓▓▓▒
                     ▒▓▓▓▒░░░░▒▓▓▓▒
                        ▒▒▓▓▓▓▒▒


                Welcome to Metro v0.76.7
              Fast - Scalable - Integrated

r - reload the app
d - open developer menu
i - run on iOS
a - run on Android
## Just put a and hit enter 
```cmd
a
```
And That's It 
## Question 2 :- How to Build Apk From react native project 
Answer :- To Build Apk You need to generate apk from Terminal Like below i have written
Place your terminal directory to android using:
```cmd
cd android
```
Then execute this command Sometimes you have to use with ./gradlew
```cmd
gradlew assembleRelease
```
As a result, the APK creation process is done. You can find the generated APK at android/app/build/outputs/apk/app-release.apk or android/app/build/outputs/apk/debug-release/app.apk This is the actual app, which you can send to your phone or upload to the Google Play Store.

**Congratulations, you’ve just generated a React Native Release Build APK for Android.**

# Feel Free To Suggest Mistakes or Propose New Ideas You Can Reach Out To Me Using Instagram [Raj_rr](https://instagram.com/raj__rr)
Thanks [React Native](https://facebook.com)
