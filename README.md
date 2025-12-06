<!--
 / My portfolio site
 / Copyright (C) 2025  ChosenSoul
 /
 / This program is free software: you can redistribute it and/or modify
 / it under the terms of the GNU General Public License as published by
 / the Free Software Foundation, either version 3 of the License, or
 / (at your option) any later version.
 /
 / This program is distributed in the hope that it will be useful,
 / but WITHOUT ANY WARRANTY; without even the implied warranty of
 / MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 / GNU General Public License for more details.
 /
 / You should have received a copy of the GNU General Public License
 / along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

<h1 align="center">ChosenSoul: My portfolio</h1>

<div align="center">

![RepoStars](https://img.shields.io/github/stars/ChosenSoull/ChosenSoulPortfolio?style=for-the-badge&logo=github&logoColor=E0AAFE&labelColor=11002C&color=E0AAFE)
![SizeRepo](https://img.shields.io/github/repo-size/ChosenSoull/ChosenSoulPortfolio?style=for-the-badge&logo=github&logoColor=E0AAFE&labelColor=11002C&color=E0AAFE)
![BuildStatus](https://img.shields.io/github/actions/workflow/status/ChosenSoull/ChosenSoulPortfolio/vercel_deploy.yml?style=for-the-badge&logo=github&logoColor=E0AAFE&labelColor=11002C&color=E0AAFE)
</div>

<div align="center">

![Commits](https://img.shields.io/github/commit-activity/m/ChosenSoull/ChosenSoull?style=for-the-badge&logo=github&logoColor=E0AAFE&labelColor=11002C&color=E0AAFE)
![Issues](https://img.shields.io/github/issues/ChosenSoull/ChosenSoulPortfolio?style=for-the-badge&logo=github&logoColor=E0AAFE&labelColor=11002C&color=E0AAFE)
![Contributors](https://img.shields.io/github/contributors/ChosenSoull/ChosenSoulPortfolio?style=for-the-badge&logo=github&logoColor=E0AAFE&labelColor=11002C&color=E0AAFE)


</div>

# About the project
The project was initially for familiarization with new libraries for me tailwind css
, MUI, Framer motion. But eventually it grew into my portfolio :)

https://github.com/user-attachments/assets/5a95db6c-6fb4-428e-9d2d-81913dea5721

# Libraries

- [`Vite`](https://vite.dev/)
- [`TypeScript`](https://typescriptlang.org/)
- [`React`](https://react.dev/)
- [`Tailwind`](https://tailwindcss.com/)
- [`Material UI`](https://mui.com/material-ui/)
- [`Framer motion`](https://motion.dev/)

# Install 

## 1. install Node.js and npm

* Windows 

    [`Download Node.js`](https://nodejs.org/en/download)

* Arch linux
  
    ```bash
    sudo pacman -S nodejs npm
    ```

* MacOS

    [`Download Node.js`](https://nodejs.org/en/download)

* Docker

    [`Manual`](#or-docker-if-you-dont-want-to-install-nodejs)

## 2. Clone repository

<div name="download-repo">

```bash
git clone https://github.com/ChosenSoull/ChosenSoulPort.git
cd ChosenSoulPort
```
</div>

## 3. install packages

```bash
npm install
```

## 4. Start dev server or build

```bash
npm run dev
```

or

```bash
npm run build
```

# Or Docker if you don't want to install Node.js

> [!CAUTION]
> Need download [`docker`](https://www.docker.com/products/docker-desktop/) first

> [!WARNING]
> Please [`download`](#download-repo) the repository if you haven't already.

```sh
docker build -t chosensoul-portfolio:latest . && \
docker run -d -rm -p 5173:5173 --name portfolio chosensoul-portfolio:latest
```