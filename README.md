# Code Signal

Also known as a developer assessment platform, [CodeSignal](https://codesignal.com/) offers a cloud-based technical skills screening software powered by professionally-designed skills evaluations and a proprietary predictive Coding Score.

In preparation for technical interviews, I discovered this platform that provides a code challenge in the form of an [Arcade](https://app.codesignal.com/arcade/) and a chance to compare myself with other developers. 

---

## Arcade

### Intro

#### The Journey Begins

1) [Add](/src/arcade/intro/01-add/)
2) [Century From Year](/src/arcade/intro/02-century-from-year/)

---

## Setup

1) Create new project

```
npm init -y
```

2) TypeScript install

```
yarn add -D typescript
```

3) Configure TypeScript compiler

```
npx tsc --init
```

4) Configure Jest

```
yarn add -D jest ts-jest @types/jest
```

5) Configure JEST

```
npx ts-jest config:init
```

6) Add commands

```
...
"scripts": {
    "build": "tsc",
    "test": "jest
}
