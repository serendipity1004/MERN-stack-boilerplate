module.exports = {
    "parser":"babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": ["eslint:recommended", "google", "plugin:react/recommended"],
    "plugins":[
        "babel"
    ],
    "env":{
        "browser":true,
        "node":true
    },
    "rules":{
        "max-len":0,
        "no-invalid-this":0,
        "babel/no-invalid-this":1,
        "react/jsx-max-props-per-line":2
    }
};
