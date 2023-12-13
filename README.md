# Storybook + React Native + CSF + configure bug repro case

## Setup

This project assumes the following environement:

- Xcode 15
- Node 18.15.0 (installed via NVM)
- Ruby 2.7.4 (installed via rbenv)

Note: it's quite possible that the bug still occurs with more modern versions of RN / Node / Ruby, as it seem to be localized to the `configure` method of react-native. However, I discovered late in the process that this seemed to be the root cause of the issue, so I did setup the project to match my real project as close as possible.

### Run project

```sh
git clone git@github.com:flochtililoch/sbbug.git
cd sbbug
yarn
npx patch-package
yarn start
```

**in another terminal:**

```sh
yarn ios --simulator "iPhone 15 Pro"
```

At this point, you have the app installed on a simulator and rendering the default RN screen. Kill metro packager, then:

```sh
yarn sb:server
```

**in another terminal:**

```sh
yarn sb
```

### Reproduce bug

1. Kill app in simulator, then open http://localhost:7007, then open the app on simulator, then observe:

   - Storybook UI on web does not render story for component `World`
   - Storybook UI on mobile does not render story for component `World`

2. Trigger hot reload by opening any file under either component, and save it (this triggers hot reload), then observe:

   - Storybook UI on web now renders story for component `World`
   - Storybook UI on mobile still does not render story for component `World`

3. Comment out line 4 in storybook/index.js, then kill app and reopen, then observe:

   - Storybook UI on web renders story for component `World`
   - Storybook UI on mobile renders story for component `World`

## Demo

![demo](demo.mov)
