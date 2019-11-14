# REACT-NATIVE-STRUCTURE

## CONFIGURATION
* You can add your custom colors to `constants/colors` file. Then you can import `constants/colors` as `{ colors }` and use like `...color: colors.primary`
* You can edit application configuration in `constants/config` file
* You can add your fonts to `constants/fonts` file as `name: require(path)`
* You can copy your images to `assets` folder then add your images to `constants/images` file as `name: require(path)`. Then you can import `constants/images` as `{ images }` and use like `<Image source={images.logo}.../>`
* (information) Application automatically caches all your fonts and images


## LOCALIZATION
* You can add a language by creating a file inside `localization` directory. Then you have to import and add it to `languages` array in `localization/index` file
* Translations are described like `key: value`
* (information) Application automatically detects all languages


## NAVIGATION
* (information) I use `react-navigation@next` version for navigating between screens (pages)
* You can define application routes in `navigator/routes` file (`AppFlow` is required)
* You can change default home route in `navigator/config` file

## AUTHENTICATION
* You have to validate `token` in `navigator/index` file (there is a TODO)
* You can change default auth route in `navigator/config` file
* If you don't want to use authentication, you can set `hasAuth` to `false` in `navigator/config` file and application will open default home route as default


## GLOBAL STATE
* You can define `initialState` of application inside `context/index` file
* You can get global state variables by importing `MainContext` and using like `const {_state, _setState, _lang, ...} = useContext(MainContext)`
