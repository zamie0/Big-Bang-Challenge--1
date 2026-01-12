# BigBang Challenge #1

## Overview

This project contains a TypeScript script that generates numbers from **1 to 100** and replaces numbers based on the following rules:

- Numbers divisible by **3** → `"BIG"`  
- Numbers divisible by **5** → `"BANG"`  
- Numbers divisible by both **3 and 5** → `"BIGBANG"`  
- All other numbers → remain as their string representation

The result is saved to `output.json`.

Example output (first few items):

```json
["1","2","BIG","4","BANG","BIG","7","8","BIG","BANG","11","BIG","13","14","BIGBANG",...]
````

---

## Installation Steps

1. Initialize the project (if not already done):

```bash
npm init -y
```

2. Install TypeScript as a development dependency:

```bash
npm install typescript --save-dev
```

3. (Optional) Install Node.js type definitions for TypeScript:

```bash
npm install --save-dev @types/node
```

4. Initialize TypeScript configuration file:

```bash
npx tsc --init
```

---

## Running the Script

1. Compile your TypeScript file (`bigbang.ts`) into JavaScript:

```bash
npx tsc bigbang.ts
```

2. Run the compiled JavaScript with Node.js:

```bash
node bigbang.js
```

3. After running:

* `output.json` is created in the project folder containing the array
* Console displays the original array and the BigBang array

---

## Folder Structure Example

```
BigBangProject/
├─ bigbang.ts
├─ bigbang.js
├─ output.json
├─ package.json
├─ package-lock.json
└─ tsconfig.json
└─ README.MD
```

