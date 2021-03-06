const glob = require("glob");
const path = require("path");

// returns a list of all filepaths in a given directory
const readDirRecursiveSync = dir => {
    return glob.sync(`${dir}/**/*.*`);
};

const getThemeAliases = (dir, theme) => {
    const themeFilesDir = `src/themes/${theme}/${dir}`;
    return (
        readDirRecursiveSync(themeFilesDir)
        // make paths relative
        .map(componentPath => componentPath.replace(themeFilesDir, "").substr(1))
        // create alias for path
        .reduce((aliases, componentPath) => {
            aliases[`@${dir}/${componentPath}`] =
                themeFilesDir + "/" + componentPath;
            return aliases;
        }, {})
    );
};

const aliases = {
    // generate theme aliases for the src/components directory
    ...getThemeAliases("assets", process.env.THEME),
    ...getThemeAliases("pages", process.env.THEME),
    ...getThemeAliases("components", process.env.THEME),
    // required to not break nuxt
    "@": "src",
    "@@": ".",
    // custom aliases
    "@node_modules": "node_modules",
    "@assets": "src/assets",
    "@components": "src/components",
    "@pages": "src/pages",
    "@helpers": "src/helpers"
};

for (const alias in aliases) {
    module.exports[alias] = path.resolve(__dirname, aliases[alias]);
}