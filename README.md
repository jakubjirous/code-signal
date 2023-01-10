# Code Signal

Also known as a developer assessment platform, [CodeSignal](https://codesignal.com/) offers a cloud-based technical skills screening software powered by professionally-designed skills evaluations and a proprietary predictive Coding Score.

In preparation for technical interviews, I discovered this platform that provides a code challenge in the form of an [Arcade](https://app.codesignal.com/arcade/) and a chance to compare myself with other developers. 

---

<p align="center">
    <img src="https://sonarcloud.io/images/project_badges/sonarcloud-white.svg" alt="Sonar Cloud">
</p>

<p align="center">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=jakubjirous_code-signal&metric=coverage" alt="Coverage">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=jakubjirous_code-signal&metric=code_smells" alt="Code Smells">    
    <img src="https://sonarcloud.io/api/project_badges/measure?project=jakubjirous_code-signal&metric=ncloc" alt="Lines of Code">
</p>

---

## Arcade

### Intro

#### The Journey Begins

1) [Add](/src/arcade/intro/01-add/INDEX.md)
2) [Century From Year](/src/arcade/intro/02-century-from-year/INDEX.md)
3) [Check Palindrome](/src/arcade/intro/03-check-palindrome/INDEX.md)

#### Edge Of The Ocean

4) [Adjacent Elements Product](/src/arcade/intro/04-adjacent-elements-product/INDEX.md)
5) [Shape Area](/src/arcade/intro/05-shape-area/INDEX.md)
6) [Make Array Consecutive](/src/arcade/intro/06-make-array-consecutive/INDEX.md)
7) [Almost Increasing Sequence](/src/arcade/intro/07-almost-increasing-sequence/INDEX.md)
8) [Matrix Elements Sum](/src/arcade/intro/08-matrix-elements-sum/INDEX.md)

#### Smooth Sailing

9) [All Longest Strings](/src/arcade/intro/09-all-longest-strings/INDEX.md)
10) [Common Character Count](/src/arcade/intro/10-common-character-count/INDEX.md)
11) [Is Lucky](/src/arcade/intro/11-is-lucky/INDEX.md)
12) [Sort By Height](/src/arcade/intro/12-sort-by-height/INDEX.md)
13) [Reverse In Parentheses](/src/arcade/intro/13-reverse-in-parentheses/INDEX.md)

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
