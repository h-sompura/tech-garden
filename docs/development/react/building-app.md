---
sidebar_position: 3
slug: /creating-app-build
---

# Creating App Builds

Notes on creating an app build in an Expo project.

## Prerequisites

1. Create an expo project and have a android / iOS app you want to build.
2. Expo Account. Create your account: <u>**[🔗 Expo SignUp](https://expo.dev/signup)**</u>

## Install the latest EAS CLI

```
npm install -g eas-cli
```

## Login to your Expo account

```
eas login
```

## Navigate to your project & configure

```
eas build:configure
```

<br />
<div class="theme-admonition theme-admonition-tip admonition_o5H7 alert alert--warning">

### Env Variables in your EAS build

If your project uses environment variables they need to be added to the `eas.json`. Find more information about setting up variables: <u>**[🔗 Set up ENV in Eas Build](https://docs.expo.dev/build-reference/variables/)**</u>

</div>

## Build APK for Android Emulator / Device

```
eas build -p android --profile preview
```

## References

More information about building apps in Expo:

1. <u> ➡️ **[Eas Build](https://docs.expo.dev/build/setup/)**</u>
