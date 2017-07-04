module.exports = {
    parser : "vue-eslint-parser",
    plugins: [ "vue" ],
    rules  : {
        "vue/html-end-tags"           : "off",
        "vue/html-no-self-closing"    : "off",
        "vue/html-quotes"             : "off",
        "vue/jsx-uses-vars"           : "error",
        "vue/no-confusing-v-for-v-if" : "error",
        "vue/no-duplicate-attributes" : "off",
        "vue/no-invalid-template-root": "error",
        "vue/no-invalid-v-bind"       : "error",
        "vue/no-invalid-v-cloak"      : "error",
        "vue/no-invalid-v-else"       : "error",
        "vue/no-invalid-v-else-if"    : "error",
        "vue/no-invalid-v-for"        : "error",
        "vue/no-invalid-v-html"       : "error",
        "vue/no-invalid-v-if"         : "error",
        "vue/no-invalid-v-model"      : "error",
        "vue/no-invalid-v-on"         : "error",
        "vue/no-invalid-v-once"       : "error",
        "vue/no-invalid-v-pre"        : "error",
        "vue/no-invalid-v-show"       : "error",
        "vue/no-invalid-v-text"       : "error",
        "vue/no-parsing-error"        : "error",
        "vue/no-template-key"         : "off",
        "vue/no-textarea-mustache"    : "error",
        "vue/order-in-components"     : "off",
        "vue/require-component-is"    : "error",
        "vue/require-v-for-key"       : "error",
        "vue/v-bind-style"            : "off",
        "vue/v-on-style"              : "off",
    },
    settings: {
        "import/extensions": [ ".js", ".vue" ],
    },
}
