const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
        files: ["public/js/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
                alert: "readonly",
                fetch: "readonly",
                localStorage: "readonly",
                XMLHttpRequest: "readonly",
                module: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "warn"
        }
    }
];