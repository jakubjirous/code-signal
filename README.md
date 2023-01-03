# Code Signal

Also known as a developer assessment platform, [CodeSignal](https://codesignal.com/) offers a cloud-based technical skills screening software powered by professionally-designed skills evaluations and a proprietary predictive Coding Score.

In preparation for technical interviews, I discovered this platform that provides a code challenge in the form of an [Arcade](https://app.codesignal.com/arcade/) and a chance to compare myself with other developers. 

---

<p align="center">
    <img src="https://sonarcloud.io/images/project_badges/sonarcloud-white.svg" alt="Sonar Cloud">
</p>

<p align="center">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=jakubjirous_code-signal&metric=coverage" alt="Coverage">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=jakubjirous_code-signal&metric=ncloc" alt="Lines of Code">
</p>

---

## Arcade

### Intro

#### The Journey Begins

1) [Add](/src/arcade/intro/01-add/)
2) [Century From Year](/src/arcade/intro/02-century-from-year/)
3) [Check Palindrome](/src/arcade/intro/03-check-palindrome/)

#### Edge Of The Ocean

4) [Adjacent Elements Product](/src/arcade/intro/04-adjacent-elements-product/)
5) [Shape Area](/src/arcade/intro/05-shape-area/)
6) [Make Array Consecutive](/src/arcade/intro/06-make-array-consecutive/)
7) [Almost Increasing Sequence](/src/arcade/07-almost-increasing-sequence/)

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
