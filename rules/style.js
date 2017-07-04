module.exports = {
    rules: {
        // This rule enforces consistent spacing inside array brackets.
        "array-bracket-spacing": [ "error", "always" ],

        // Require space before/after arrow function's arrow
        "arrow-spacing": [ "error", {
            after : true,
            before: true,
        } ],

        /*
         * Enforce a consistent style of comments across your codebase,
         * specifically by either requiring or disallowing a capitalized
         * letter as the first word character in a comment. This rule will not
         * issue warnings when non-cased letters are used.
         */
        "capitalized-comments": [ "error", "always", {
            ignoreInlineComments: true,
        } ],

        // Enforces consistent spacing inside computed property brackets.
        "computed-property-spacing": [ "error", "always" ],

        /*
         * Enforces two things about variables with the designated alias names
         * for this:
         *      - If a variable with a designated name is declared, it must be
         *      either initialized (in the declaration) or assigned (in the
         *      same scope as the declaration) the value this.
         *
         *      - If a variable is initialized or assigned the value this, the
         *      name of the variable must be a designated alias.
         *
         *  With arrow functions this should not matter and pattern not be
         *  used anymore.
         */
        "consistent-this": [ "error", "self" ],

        /*
         * Enforces at least one newline (or absence thereof) at the
         * end of non-empty files.
         */
        "eol-last": [ "error", "always" ],

        /*
         * Requires or disallows spaces between the function name and the
         * opening parenthesis that calls it.
         */
        "func-call-spacing": [ "error", "never" ],

        /*
         * Require or disallow named function expressions
         *
         * A pattern that’s becoming more common is to give function
         * expressions names to aid in debugging. For example:
         *
         * Foo.prototype.bar = function bar() {};
         *
         * Adding the second bar in the above example is optional. If you
         * leave off the function name then when the function throws an
         * exception you are likely to get something similar to anonymous
         * function in the stack trace. If you provide the optional name for a
         * function expression then you will get the name of the function
         * expression in the stack trace.
         */
        "func-names": [ "error", "always" ],

        /*
         * "There are only two hard things in Computer Science:
         * cache invalidation and naming things."
         * — Phil Karlton
         *
         * Bad names can lead to hard-to-decipher code. Generic names, such as
         * data, don’t infer much about the code and the values it receives.
         * This rule allows you to configure a blacklist of bad identifier
         * names, that you don’t want to see in your code.
         */
        "id-blacklist": [ "error", "data", "err", "e", "cb", "callback" ],

        // Enforce consistent indentation.
        "indent": [ "error", 4 ],

        /*
         * This rule enforces consistent spacing between keys and values in
         * object literal properties. In the case of long lines, it is
         * acceptable to add a new line wherever whitespace is allowed.
         */
        "key-spacing": [ "error", {
            afterColon: true,
            align     : {
                afterColon : true,
                beforeColon: false,
                on         : "colon",
            },
            beforeColon: false,
            mode       : "strict",
        } ],

        /*
         * Enforces consistent spacing around keywords and keyword-like
         * tokens: as (in module declarations), async (of async functions),
         * await (of await expressions), break, case, catch, class, const,
         * continue, debugger, default, delete, do, else, export, extends,
         * finally, for, from (in module declarations), function, get (of
         * getters), if, import, in, instanceof, let, new, of (in for-of
         * statements), return, set (of setters), static, super, switch, this,
         * throw, try, typeof, var, void, while, with, and yield. This rule is
         * designed carefully not to conflict with other spacing rules: it
         * does not apply to spacing where other rules report problems.
         */
        "keyword-spacing": [ "error", {
            after : true,
            before: true,
        } ],

        /*
         * Enforces consistent position of line comments. Block comments are
         * not affected by this rule. By default, this rule ignores comments
         * starting with the following words: eslint, jshint, jslint,
         * istanbul, global, exported, jscs, falls through.
         */
        "line-comment-position": [ "error", {
            position: "above",
        } ],

        /*
         * This rule requires empty lines before and/or after comments. It can
         * be enabled separately for both block (/*) and line (//) comments.
         * This rule does not apply to comments that appear on the same line
         * as code and does not require empty lines at the beginning or end of
         * a file.
         */
        "lines-around-comment": [ "error", {
            afterBlockComment : false,
            afterLineComment  : false,
            allowArrayStart   : true,
            allowBlockStart   : true,
            allowObjectStart  : true,
            beforeBlockComment: true,
            beforeLineComment : true,
        } ],

        /*
         * Enforces a maximum line length to increase code readability and
         * maintainability. The length of a line is defined as the number of
         * Unicode characters in the line.
         */
        "max-len": [ "warn", 80 ],

        /*
         * This rule requires constructor names to begin with a capital
         * letter. Certain built-in identifiers are exempt from this rule.
         * These identifiers are:
         */
        "new-cap": "error",

        /*
         * This rule requires parentheses when invoking a constructor with no
         * arguments using the new keyword in order to increase code clarity.
         */
        "new-parens": "error",

        /*
         * This rule enforces a coding style where empty lines are required or
         * disallowed after var, let, or const statements to achieve a
         * consistent coding style across the project.
         */
        "newline-after-var": [ "error", "always" ],

        /*
         * This rule requires an empty line before return statements to
         * increase code clarity, except when the return is alone inside a
         * statement group (such as an if statement). In the latter case, the
         * return statement does not need to be delineated by virtue of it
         * being alone. Comments are ignored and do not count as empty lines.
         */
        "newline-before-return": "error",

        /*
         * This rule requires a newline after each call in a method chain or
         * deep member access. Computed property accesses such as instance[
         * something] are excluded.
         */
        "newline-per-chained-call": [ "error", {
            ignoreChainWithDepth: 2,
        } ],

        /*
         * This rule disallows if statements as the only statement in else
         * blocks.
         */
        "no-lonely-if": "error",

        /*
         * This rule checks BinaryExpression and LogicalExpression.
         * This rule may conflict with no-extra-parens rule. If you use both
         * this and no-extra-parens rule together, you need to use the
         * nestedBinaryExpressions option of no-extra-parens rule.
         */
        "no-mixed-operators": [ "error", {
            allowSamePrecedence: true,
            groups             : [
                [ "+", "-", "*", "/", "%", "**" ],
                [ "&", "|", "^", "~", "<<", ">>", ">>>" ],
                [ "==", "!=", "===", "!==", ">", ">=", "<", "<=" ],
                [ "&&", "||" ],
                [ "in", "instanceof" ],
            ],
        } ],

        /*
         * This rule disallows using multiple assignments within a single
         * statement.
         */
        "no-multi-assign": "error",

        // Enforces the consistent use of empty lines.
        "no-multiple-empty-lines": [ "error", {
            max   : 2,
            maxBOF: 0,
            maxEOF: 1,
        } ],

        /*
         * This rule disallows negated conditions in either of the following:
         *      - if statements which have an else branch
         *      - ternary expressions
         */
        "no-negated-condition": "error",

        /*
         * This rule disallows trailing whitespace (spaces, tabs, and other
         * Unicode whitespace characters) at the end of lines.
         */
        "no-trailing-spaces": [ "error", {
            skipBlankLines: false,
        } ],

        /*
         * This rule disallow ternary operators when simpler alternatives
         * exist.
         */
        "no-unneeded-ternary": [ "error", {
            defaultAssignment: true,
        } ],

        /*
         * This rule disallows whitespace around the dot or before the opening
         * bracket before properties of objects if they are on the same line.
         * This rule allows whitespace when the object and property are on
         * separate lines, as it is common to add newlines to longer chains of
         * properties:
         *      foo
         *          .bar()
         *          .baz()
         *          .qux()
         */
        "no-whitespace-before-property": "error",

        /*
         * This rule enforces consistent line breaks inside braces of object
         * literals or destructuring assignments.
         */
        "object-curly-newline": [ "error", "always" ],

        /*
         * This rule enforce consistent spacing inside braces of object
         * literals, destructuring assignments, and import/export specifiers.
         */
        "object-curly-spacing": [ "error", "always" ],

        /*
         * This rule enforces variables to be declared either together or
         * separately per function ( for var) or block (for let and const)
         * scope.
         */
        "one-var": "off",

        /*
         * This rule enforces a consistent newlines around variable
         * declarations. This rule ignores variable declarations inside for
         * loop conditionals.
         */
        "one-var-declaration-per-line": [ "error", "always" ],

        // This rule requires quotes around object literal property names.
        "quote-props": [ "error", "consistent-as-needed" ],

        /*
         * Enforces the consistent use of either backticks, double, or single
         * Quotes.
         */
        "quotes": [ "error", "double" ],

        // Disallows semicolons as the end of statements.
        "semi": [ "error", "never" ],

        // Checks all property definitions of object expressions and verifies
        // That all variables are sorted alphabetically.
        "sort-keys": [ "error", "asc", {
            caseSensitive: true,
            natural      : true,
        } ],

        /*
         * This rule checks all variable declaration blocks and verifies that
         * all variables are sorted alphabetically. The default configuration
         * of the rule is case-sensitive.
         */
        "sort-vars": "error",

        /*
         * Enforce consistency of spacing before blocks. It is only applied on
         * blocks that don’t begin on a new line.
         *      -This rule ignores spacing which is between => and a block.
         *      The spacing is handled by the arrow-spacing rule.
         *      - This rule ignores spacing which is between a keyword and a
         *      block. The spacing is handled by the keyword-spacing rule.
         */
        "space-before-blocks": [ "error", {
            classes  : "always",
            functions: "always",
            keywords : "always",
        } ],

        /*
         * This rule aims to enforce consistent spacing before function
         * parentheses and as such, will warn whenever whitespace doesn’t
         * match the preferences specified.
         */
        "space-before-function-paren": [ "error", "never" ],

        /*
         * This rule will enforce consistency of spacing directly inside of
         * parentheses, by disallowing or requiring one or more spaces to the
         * right of ( and to the left of ). In either case, () will still be
         * allowed.
         */
        "space-in-parens": [ "error", "always" ],

        /*
         * This rule is aimed at ensuring there are spaces around infix
         * operators.
         */
        "space-infix-ops": "error",

        /*
         * This rule enforces consistency regarding the spaces after words
         * unary operators and after/before nonwords unary operators.
         */
        "space-unary-ops": [ "error", {
            nonwords: false,
            words   : true,
        } ],

        /*
         * Enforce consistency of spacing after the start of a comment // or
         * /*. It also provides several exceptions for various documentation
         * styles.
         */
        "spaced-comment": [ "warn", "always" ],
    },
}
