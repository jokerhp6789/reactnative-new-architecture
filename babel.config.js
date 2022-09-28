const pak = require("./package.json");

module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                cwd: "babelrc",
                extensions: [".tsx", ".ts", ".js", ".json"],
                alias: {
                    "@animated": "./src/animated",
                    "@assets": "./src/assets",
                    "@components": "./src/components/",
                    "@configuration": "./src/configuration",
                    "@constant": "./src/constant",
                    "@context": "./src/context",
                    "@hooks": "./src/hooks",
                    "@interfaces": "./src/interfaces",
                    "@languages": "./src/languages",
                    "@navigation": "./src/navigation",
                    "@network": "./src/network",
                    "@notifications": "./src/notifications",
                    "@schemas": "./src/schemas",
                    "@screens": "./src/screens",
                    "@storage": "./src/storage",
                    "@store": "./src/store",
                    "@styles": "./src/styles",
                    "@utils": "./src/utils",
                },
            },
        ],
        // "react-native-reanimated/plugin",
    ],
};
