# "Am I Debugging NodeJS?" in TypeScript

* Author: [Jonathan M. Wilbur](https://github.com/JonathanWilbur) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2020
* License: [MIT License](https://mit-license.org/)

This package exports a single variable as the default export.

Use in TypeScript:

```typescript
import isDebugging from "is-debugging";

if (isDebugging) {
    console.log("Currently debugging NodeJS.");
}
```

Use in JavaScript:

```javascript
const isDebugging = require("is-debugging").default;

if (isDebugging) {
    console.log("Currently debugging NodeJS.");
}
```
