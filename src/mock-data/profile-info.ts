import burger from '../img/burger.png';
import places from '../img/places.png';
import mesto from '../img/mesto.png';
import movies from '../img/movies.png';
import messenger from '../img/messenger.png';
import travel from '../img/travel.png';
import svg from '../img/svg.png';
import itmo from '../img/itmo.png';
import kuda from '../img/kuda.png';
import makku from '../img/makku.png';
import how from '../img/how.png';
import d3 from '../img/d3.png';
import puzzle from '../img/puzzle.png';
import ugmk from '../img/ugmk.png';
import activityRings from '../img/cover-rings.png';
import kupi from '../img/kupi.png';

import {
  tagReact,
  tagJavaScript,
  tagTypeScript,
  tagRedux,
  tagExpress,
  tagEslint,
  tagDocker,
  tagMongodb,
  tagMongoose,
  tagNest,
  tagTypeORM,
  tagPostgreSQL,
  tagSequelize,
  tagWebpack,
  tagJest,
  tagCypress,
  tagAxios,
  tagBem,
  tagRtk,
  tagTailwind,
  tagHTML,
  tagCSS,
  tagAntdesign,
  tagMocha,
  tagReactD3,
  tagReactDnd,
  tagRecharts,
  tagCanvas,
  tagHandlebars,
  tagForge,
  tagSvg,
  tagWebSocket,
  tagServiceWorker,
  tagCicd,
  tagFramerMotion,
} from './tags';

/* eslint-disable operator-linebreak */
const profileInfo: Record<string, TypeProfile> = {
  EN: {
    name: 'Bogdan',
    profession: 'Frontend developer',
    portfolio: 'Portfolio',
    tech: 'Professional skills',
    use: 'I use technology in my work',
    company: 'Work experience',
    age: new Date(1985, 4, 22),
    education: 'Education',
    educationList: [
      {
        place: 'Moscow State University of Civil Engineering',
        name: 'Public Health Engineer',
        from: '2004',
        to: '2009',
      },
      {
        place: 'Practicum by Yandex',
        name: 'The Web Development',
        from: '2022',
        to: '2022',
      },
      {
        place: 'Practicum by Yandex (INO CPE “Yandex EdTech”)',
        name: 'The Mid-Level Web Developer training course',
        from: '2021',
        to: '2022',
      },
      {
        place: 'Practicum by Yandex (INO CPE “Yandex EdTech”)',
        name: 'React Development',
        from: '2023',
        to: '2023',
      },
    ],
    about: [
      'I am a frontend developer. I have experience in programming on React, Vue, Express and Next (JS/TS). \n' +
      'I develop REST API, UI components, layout, write unit tests, code review. \n' +
      'I use VSCode, Postman, Swagger, Figma, GitLab in my work.',
      'I am constantly improving and expanding my skills, solving problems on CodeWars, working on pet projects.',
      'I am enthusiastic about designing and manufacturing 3D printers, CNC devices, as well as programming IoT devices.',
      'I am currently looking for new career opportunities and am open to suggestions.',
    ],
    companyList: [
      {
        name: 'AECOM',
        position: 'Senior Public Health Engineer',
        from: '2009',
        to: '2019',
        description: '',
        stack: '',
      },
      {
        name: 'Apex',
        position: 'Desktop developer',
        from: '2019',
        to: '2021',
        description: 'Introducing automation in design processes. Developing applications for engineering calculations, plugins for Revit, AutoCAD, DIALux, MS Excel.',
        stack: 'Stack: C#, Framework 4.8, WPF, Revit API, WPFMath, Django, Python, PostgreSQL, LaTeX, Material design, Bootstrap, Git.',
      },
      {
        name: 'StepLogic',
        position: 'Frontend-developer',
        from: '2021',
        to: '2022',
        description: 'Introducing automation in design processes. Developing applications for engineering calculations, plugins for Revit. Developing Web services for interaction with the Autodesk Forge API.',
        stack: 'Stack: React.js, ASP.NET Core, MSSQL, MUI, JS, Node.js, HTML, CSS, KaTeX, Canvas, viewer Autodesk Forge, Framework 4.8, WPF, GitHub.',
      },
      {
        name: 'IFellow',
        position: 'Frontend-developer',
        from: '2022',
        to: 'recently',
        description: 'Developing new CRM system tools using Vue.js framework. Developing UI components, REST API, adaptive layout, writing unit tests. Debugging.',
        stack: 'Stack: Vue.js, React.js, Next.js, Express.js, Redux, RTK, React-de-tree, React-dnd, JS/TS, MUI, Tailwind, CSS, SASS, Jest, Webpack, Docker, Maven, GitLab.',
      },
    ],
    portfolioList: [
      {
        img: places,
        title: 'Photo posting service [ntlstl.places]',
        label: 'Single page application CSR. Backend API',
        tech: [tagReact, tagRedux, tagRtk, tagExpress, tagTypeScript, tagPostgreSQL, tagSequelize, tagFramerMotion, tagWebpack, tagEslint, tagDocker, tagCicd],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/ntlstl.mesto' },
          { label: '[places]', url: 'https://places.ntlstl.dev/' },
        ],
      },
      {
        img: burger,
        title: 'Stellar React-burger',
        label: 'Single page application CSR',
        tech: [tagReact, tagRedux, tagRtk, tagReactDnd, tagFramerMotion, tagTypeScript, tagWebSocket, tagWebpack, tagEslint, tagJest, tagCypress],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/react-burger' },
          { label: 'Netlify', url: 'https://bejewelled-youtiao-8f9817.netlify.app/' },
        ],
      },
      {
        img: mesto,
        title: 'Photo posting service Mesto',
        label: 'Single page application CSR',
        tech: [tagReact, tagRedux, tagTypeScript, tagAxios, tagWebpack, tagEslint, tagDocker, tagServiceWorker, tagCicd],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/react-mesto-auth' },
          { label: 'Netlify', url: 'https://whimsical-sprite-5d5e95.netlify.app/' },
          { label: '[mesto]', url: 'https://mesto.ntlstl.dev/' },
        ],
      },
      {
        img: puzzle,
        title: 'Game 15-puzzle',
        label: 'Game SSR. Backend API',
        tech: [tagReact, tagRedux, tagExpress, tagCanvas, tagPostgreSQL, tagServiceWorker, tagSequelize, tagTypeScript, tagJest, tagAxios, tagTailwind, tagWebpack, tagEslint, tagDocker, tagCicd],
        links: [{ label: 'GitHub', url: 'https://github.com/babylon-game/practicum_15puzzle_babylon' }],
      },
      {
        img: movies,
        title: 'Movies explorer',
        label: 'Single page application CSR. Backend API',
        tech: [tagReact, tagRedux, tagTypeScript, tagAxios, tagWebpack, tagEslint, tagExpress, tagMongodb, tagMongoose],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/movies-explorer-frontend' },
          { label: 'Netlify', url: 'https://63dabdfebc34881642dc87ec--graceful-cassata-eff5c3.netlify.app/' },
        ],
      },
      {
        img: messenger,
        title: 'Messenger',
        label: 'Single page application CSR. Messenger',
        tech: [tagReact, tagRedux, tagExpress, tagTypeScript, tagAxios, tagWebSocket, tagWebpack, tagBem, tagEslint, tagDocker, tagCicd],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/messenger' },
          { label: '[messenger]', url: 'https://messenger.ntlstl.dev/' },
        ],
      },
      {
        img: d3,
        title: 'Product-tree',
        label: 'd3.js',
        tech: [tagReact, tagRedux, tagExpress, tagTypeScript, tagReactD3, tagWebpack, tagAntdesign, tagEslint],
        links: [{ label: 'GitHub', url: 'https://github.com/bmazurme/react-redux-d3' }],
      },
      {
        img: ugmk,
        title: 'UGMK',
        label: 'Recharts.js',
        tech: [tagReact, tagExpress, tagJavaScript, tagRecharts, tagWebpack, tagEslint, tagDocker],
        links: [{ label: 'GitHub', url: 'https://github.com/bmazurme/ugmk_test_app' }],
      },
      {
        img: activityRings,
        title: 'Activity rings',
        label: 'React RadialBar component',
        tech: [tagReact, tagTypeScript, tagSvg],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme' },
        ],
      },
      {
        img: messenger,
        title: 'Messenger',
        label: 'Single page application CSR. Messenger',
        tech: [tagTypeScript, tagHandlebars, tagMocha, tagWebSocket, tagWebpack, tagBem, tagEslint, tagDocker],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/messenger' },
          { label: 'Netlify', url: 'https://velvety-babka-2aac37.netlify.app/' },
        ],
      },
      {
        img: travel,
        title: 'Russian travel',
        label: 'Static page. Adaptive page',
        tech: [tagHTML, tagCSS, tagBem],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/russian-travel' },
          { label: 'GitHub Pages', url: 'https://bmazurme.github.io/russian-travel/' },
        ],
      },
      {
        img: kuda,
        title: 'Kuda poedu',
        label: 'Static page. Adaptive page',
        tech: [tagHTML, tagCSS, tagBem],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/kudaYaPoedu' },
          { label: 'GitHub Pages', url: 'https://bmazurme.github.io/kudaYaPoedu/' },
        ],
      },
      {
        img: itmo,
        title: 'ITMO',
        label: 'Adaptive page',
        tech: [tagHTML, tagCSS, tagJavaScript, tagBem],
        links: [{ label: 'GitHub Pages', url: 'https://bmazurme.github.io/itmo/' }],
      },
      {
        img: makku,
        title: 'MAKKU',
        label: 'Adaptive page',
        tech: [tagHTML, tagCSS, tagJavaScript, tagBem],
        links: [{ label: 'Netlify', url: 'https://stellar-custard-0d637a.netlify.app/' }],
      },
      {
        img: how,
        title: 'How to learn',
        label: 'Static page',
        tech: [tagHTML, tagCSS, tagBem],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/how-to-learn' },
          { label: 'GitHub Pages', url: 'https://bmazurme.github.io/how-to-learn/' },
        ],
      },
      {
        img: svg,
        title: 'Gallery svf',
        label: 'Static page',
        tech: [tagHTML, tagCSS, tagBem, tagForge],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/gallery-svf' },
          { label: 'GitHub Pages', url: 'https://bmazurme.github.io/gallery-svf/' },
        ],
      },
      {
        img: kupi,
        title: 'Kupipodariday API',
        label: 'Backend API',
        tech: [tagTypeScript, tagNest, tagTypeORM, tagPostgreSQL],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme' },
        ],
      },
      {
        img: mesto,
        title: 'Mesto API',
        label: 'Backend API',
        tech: [tagTypeScript, tagExpress, tagMongoose, tagMongodb],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme' },
        ],
      },
    ],
  },
  RU: {
    name: 'Богдан',
    profession: 'Фронтенд-разработчик',
    portfolio: 'Портфолио',
    tech: 'Профессиональные навыки',
    use: 'В работе использую следующие технологии',
    company: 'Опыт работы',
    age: new Date(1985, 4, 22),
    education: 'Образование',
    educationList: [
      {
        place: 'Московский государственный строительный университет',
        name: 'Инженер водоснабжения и водоотведения',
        from: '2004',
        to: '2009',
      },
      {
        place: 'Яндекс.Практикум (АНО ДПО «ШАД»)',
        name: 'Веб-разработчик',
        from: '2021',
        to: '2022',
      },
      {
        place: 'Яндекс Практикум (АНО ДПО «Образовательные технологии Яндекса») ',
        name: 'Мидл фронтенд-разработчик',
        from: '2022',
        to: '2022',
      },
      {
        place: 'Яндекс Практикум (АНО ДПО «Образовательные технологии Яндекса») ',
        name: 'React-разработчик',
        from: '2023',
        to: '2023',
      },
    ],
    about: [
      'Я фронтенд разработчик. Имею опыт разработки на React, Vue, Express и Next (JS/TS). \n' +
      'Занимаюсь разработкой REST API, UI-компонентов, версткой, написанием unit-тестов, code review. \n' +
      'В работе использую VSCode, Postman, Swagger, Figma, GitLab.',
      'Постоянно улучшаю и расширяю свои навыки, решаю задачи на CodeWars, работаю над pet-проектами.',
      'Увлекаюсь проектированием и изготовлением 3D-принтеров, CNC-устройств, а также программированием IoT-устройств.',
      'В настоящее время ищу новые карьерные перспективы и открыт к предложениям.',
    ],
    companyList: [
      {
        name: 'AECOM',
        position: 'Ведущий инженер водоснабжения и водоотведения',
        from: '2009',
        to: '2019',
        description: null,
        stack: null,
      },
      {
        name: 'Apex',
        position: 'Desktop-разработчик',
        from: '2019',
        to: '2021',
        description: 'Автоматизация процессов проектирования. Разработка приложений для инженерных расчетов, плагинов для Revit, AutoCAD, DiaLux, MS Excel.',
        stack: 'Стек: C#, Framework 4.8, WPF, Revit API, WPFMath, Django, Python, PostgreSQL, LaTeX, Material design, Bootstrap, Git.',
      },
      {
        name: 'StepLogic',
        position: 'Frontend-разработчик',
        from: '2021',
        to: '2022',
        description: 'Автоматизация процессов проектирования. Разработка приложений для инженерных расчетов, плагинов для Revit. Разработка Web-сервисов для взаимодействия с API Autodesk Forge.',
        stack: 'Стек: React.js, ASP.NET Core, MSSQL, MUI, JS, Node.js, HTML, CSS, KaTeX, Canvas, viewer Autodesk Forge, Framework 4.8, WPF, GitHub.',
      },
      {
        name: 'IFellow',
        position: 'Frontend-разработчик',
        from: '2022',
        to: 'по настоящее время',
        description: 'Разработка новых инструментов CRM-системы с использование фреймворка Vue.js. Разработка UI-компонентов, REST API, адаптивная-верстка, написание unit-тестов. Исправление ошибок.',
        stack: 'Stack: Vue.js, React.js, Next.js, Express.js, Redux, RTK, React-d3-tree, React-dnd, JS/TS, MUI, Tailwind, CSS, SASS, Jest, Webpack, Docker, Maven, GitLab.',
      },
    ],
    portfolioList: [
      {
        img: places,
        title: 'Сервис размещения фотографий [ntlstl.places]',
        label: 'Одностраничный сайт CSR. Backend API',
        tech: [tagReact, tagRedux, tagRtk, tagExpress, tagTypeScript, tagPostgreSQL, tagSequelize, tagFramerMotion, tagWebpack, tagEslint, tagDocker, tagCicd],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/ntlstl.mesto' },
          { label: '[places]', url: 'https://places.ntlstl.dev/' },
        ],
      },
      {
        img: burger,
        title: 'Stellar React-burger',
        label: 'Одностраничный сайт CSR',
        tech: [tagReact, tagRedux, tagRtk, tagReactDnd, tagFramerMotion, tagTypeScript, tagWebSocket, tagWebpack, tagEslint, tagJest, tagCypress],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/react-burger' },
          { label: 'Netlify', url: 'https://bejewelled-youtiao-8f9817.netlify.app/' },
        ],
      },
      {
        img: mesto,
        title: 'Сервис размещения фотографий Mesto',
        label: 'Одностраничный сайт CSR',
        tech: [tagReact, tagRedux, tagTypeScript, tagAxios, tagWebpack, tagEslint, tagDocker, tagServiceWorker, tagCicd],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/react-mesto-auth' },
          { label: 'Netlify', url: 'https://whimsical-sprite-5d5e95.netlify.app/' },
          { label: '[mesto]', url: 'https://mesto.ntlstl.dev/' },
        ],
      },
      {
        img: puzzle,
        title: 'Игра пятнашки',
        label: 'Игра SSR. Backend API',
        tech: [tagReact, tagRedux, tagExpress, tagCanvas, tagPostgreSQL, tagSequelize, tagServiceWorker, tagTypeScript, tagJest, tagAxios, tagTailwind, tagWebpack, tagEslint, tagDocker, tagCicd],
        links: [{ label: 'GitHub', url: 'https://github.com/babylon-game/practicum_15puzzle_babylon' }],
      },
      {
        img: movies,
        title: 'Movies explorer',
        label: 'Одностраничный сайт CSR. Backend API',
        tech: [tagReact, tagRedux, tagTypeScript, tagAxios, tagWebpack, tagEslint, tagExpress, tagMongodb, tagMongoose],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/movies-explorer-frontend' },
          { label: 'Netlify', url: 'https://63dabdfebc34881642dc87ec--graceful-cassata-eff5c3.netlify.app/' },
        ],
      },
      {
        img: messenger,
        title: 'Простой мессенджер',
        label: 'Одностраничный сайт CSR Мессенджер',
        tech: [tagReact, tagRedux, tagExpress, tagTypeScript, tagAxios, tagWebSocket, tagWebpack, tagBem, tagEslint, tagDocker, tagCicd],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/messenger' },
          { label: '[messenger]', url: 'https://messenger.ntlstl.dev/' },
        ],
      },
      {
        img: d3,
        title: 'Product-tree',
        label: 'd3.js',
        tech: [tagReact, tagRedux, tagExpress, tagTypeScript, tagReactD3, tagWebpack, tagAntdesign, tagEslint],
        links: [{ label: 'GitHub', url: 'https://github.com/bmazurme/react-redux-d3' }],
      },
      {
        img: ugmk,
        title: 'UGMK',
        label: 'Recharts.js',
        tech: [tagReact, tagExpress, tagJavaScript, tagRecharts, tagWebpack, tagEslint, tagDocker],
        links: [{ label: 'GitHub', url: 'https://github.com/bmazurme/ugmk_test_app' }],
      },
      {
        img: activityRings,
        title: 'Activity rings',
        label: 'React RadialBar компонент',
        tech: [tagReact, tagTypeScript, tagSvg],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme' },
        ],
      },
      {
        img: messenger,
        title: 'Простой мессенджер',
        label: 'Мессенджер',
        tech: [tagTypeScript, tagHandlebars, tagMocha, tagWebSocket, tagWebpack, tagBem, tagEslint, tagDocker],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/messenger' },
          { label: 'Netlify', url: 'https://velvety-babka-2aac37.netlify.app/' },
        ],
      },
      {
        img: travel,
        title: 'Путешествие по России',
        label: 'Адаптивный сайт',
        tech: [tagHTML, tagCSS, tagBem],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/russian-travel' },
          { label: 'GitHub Pages', url: 'https://bmazurme.github.io/russian-travel/' },
        ],
      },
      {
        img: kuda,
        title: 'Куда поеду',
        label: 'Адаптивный сайт',
        tech: [tagHTML, tagCSS, tagBem],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/kudaYaPoedu' },
          { label: 'GitHub Pages', url: 'https://bmazurme.github.io/kudaYaPoedu/' },
        ],
      },
      {
        img: itmo,
        title: 'ИТМО',
        label: 'Адаптивный сайт',
        tech: [tagHTML, tagCSS, tagJavaScript, tagBem],
        links: [{ label: 'GitHub Pages', url: 'https://bmazurme.github.io/itmo/' }],
      },
      {
        img: makku,
        title: 'МАККУ',
        label: 'Адаптивный сайт',
        tech: [tagHTML, tagCSS, tagJavaScript, tagBem],
        links: [{ label: 'Netlify', url: 'https://stellar-custard-0d637a.netlify.app/' }],
      },
      {
        img: how,
        title: 'How to learn',
        label: 'Статичный сайт',
        tech: [tagHTML, tagCSS, tagBem],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/how-to-learn' },
          { label: 'GitHub Pages', url: 'https://bmazurme.github.io/how-to-learn/' },
        ],
      },
      {
        img: svg,
        title: 'Gallery svf',
        label: 'Статичный сайт',
        tech: [tagHTML, tagCSS, tagBem, tagForge],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme/gallery-svf' },
          { label: 'GitHub Pages', url: 'https://bmazurme.github.io/gallery-svf/' },
        ],
      },
      {
        img: kupi,
        title: 'Kupipodariday API',
        label: 'Бэкенд Kupipodariday. Каркас API',
        tech: [tagTypeScript, tagNest, tagTypeORM, tagPostgreSQL],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme' },
        ],
      },
      {
        img: mesto,
        title: 'Mesto API',
        label: 'Бэкенд Mesto. Каркас API',
        tech: [tagTypeScript, tagExpress, tagMongoose, tagMongodb],
        links: [
          { label: 'GitHub', url: 'https://github.com/bmazurme' },
        ],
      },
    ],
  },
};

export default profileInfo;
