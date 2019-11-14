# REACT-NATIVE-STRUCTURE

## CONFIGURATION
* Add your custom colors to `constants/colors` file
* Edit application configuration in `constants/config` file
* Add your fonts to `constants/fonts` file as `name: require(path)`
* Copy your images to `assets` folder then add your images to `constants/images` file as `name: require(path)`


## LOCALIZATION
* You can add a language by creating a file inside `localization` directory. Then you have to import and add it to `languages` array in `localization/index` file
* Translations are described by `key: value`
* Application automatically detects all languages


## NAVIGATION
* I use `react-navigation@next` version for navigating between screens (pages)
* You should define application routes in `navigator/routes` file
