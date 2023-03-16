import IProfile from '../interfaces/IProfile';

const profileInfo: Record<string, IProfile> = {
  EN: {
    name: 'Bogdan',
    profession: 'Frontend developer',
    portfolio: 'Portfolio',
    tech: 'Professional skills',
    use: 'I use technology in my work',
    company: 'Work experience',
    age: new Date(1985, 5, 22),
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
        position: 'Fullstack-developer',
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
        stack: 'Stack: Vue.js, React.js, Next.js, Express.js, Redux, RTK, JS/TS, MUI, Tailwind, CSS, SASS, Jest, Webpack, Docker, Maven, GitLab.',
      },
    ],
    portfolioList: [
      {
        title: 'Photo posting service Mesto',
        label: 'Static page CSR',
        tech: ['React', 'Redux', 'TypeScript', 'Axios', 'Webpack', 'Eslint', 'Docker', 'ServiceWorker', 'CI/CD'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/react-mesto-auth',
          },
          {
            label: 'Netlify',
            url: 'https://whimsical-sprite-5d5e95.netlify.app/',
          },
        ],
      },
      {
        title: 'Game 15-puzzle',
        label: 'Game SSR',
        tech: ['React', 'Redux', 'Express', 'Canvas', 'PostgreSQL', 'ServiceWorker', 'TypeScript', 'Jest', 'Axios', 'Tailwind CSS', 'Webpack', 'Eslint', 'Docker', 'CI/CD'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/babylon-game/practicum_15puzzle_babylon',
          },
        ],
      },
      {
        title: 'Movies explorer',
        label: 'Static page CSR',
        tech: ['React', 'Redux', 'TypeScript', 'Axios', 'Webpack', 'Eslint'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/movies-explorer-frontend',
          },
          {
            label: 'Netlify',
            url: 'https://63dabdfebc34881642dc87ec--graceful-cassata-eff5c3.netlify.app/',
          },
        ],
      },
      {
        title: 'Messenger',
        label: 'Messenger',
        tech: ['React', 'Redux', 'Express', 'TypeScript', 'Axios', 'WebSocket', 'Webpack', 'BEM', 'Eslint', 'Docker', 'CI/CD'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/messenger',
          },
        ],
      },
      {
        title: 'Messenger',
        label: 'Messenger',
        tech: ['TypeScript', 'Handlebars', 'Mocha', 'WebSocket', 'Webpack', 'BEM', 'Eslint', 'Docker'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/messenger',
          },
          {
            label: 'Netlify',
            url: 'https://velvety-babka-2aac37.netlify.app/',
          },
        ],
      },
      {
        title: 'Russian travel',
        label: 'Adaptive page',
        tech: ['HTML', 'CSS', 'BEM'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/russian-travel',
          },
          {
            label: 'GitHub Pages',
            url: 'https://bmazurme.github.io/russian-travel/',
          },
        ],
      },
      {
        title: 'Kuda poedu',
        label: 'Adaptive page',
        tech: ['HTML', 'CSS', 'BEM'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/kudaYaPoedu',
          },
          {
            label: 'GitHub Pages',
            url: 'https://bmazurme.github.io/kudaYaPoedu/',
          },
        ],
      },
      {
        title: 'ITMO',
        label: 'Adaptive page',
        tech: ['HTML', 'CSS', 'JavaScript', 'BEM'],
        links: [
          {
            label: 'GitHub Pages',
            url: 'https://bmazurme.github.io/itmo/',
          },
        ],
      },
      {
        title: 'MAKKU',
        label: 'Adaptive page',
        tech: ['HTML', 'CSS', 'JavaScript', 'BEM'],
        links: [
          {
            label: 'Netlify',
            url: 'https://stellar-custard-0d637a.netlify.app/',
          },
        ],
      },
      {
        title: 'How to learn',
        label: 'Static page',
        tech: ['HTML', 'CSS', 'BEM'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/how-to-learn',
          },
          {
            label: 'GitHub Pages',
            url: 'https://bmazurme.github.io/how-to-learn/',
          },
        ],
      },
      {
        title: 'Gallery svf',
        label: 'Static page',
        tech: ['HTML', 'CSS', 'BEM', 'Forge'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/gallery-svf',
          },
          {
            label: 'GitHub Pages',
            url: 'https://bmazurme.github.io/gallery-svf/',
          },
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
    age: new Date(1985, 5, 22),
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
        position: 'Fullstack-разработчик',
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
        stack: 'Стек: Vue.js, React.js, Next.js, Express.js, Redux, RTK, JS/TS, MUI, Tailwind, CSS, SASS, Jest, Webpack, Docker, Maven, GitHub, GitLab.',
      },
    ],
    portfolioList: [
      {
        title: 'Сервис размещения фотографий Mesto',
        label: 'Одностраничный сайт CSR',
        tech: ['React', 'Redux', 'TypeScript', 'Axios', 'Webpack', 'Eslint', 'Docker', 'ServiceWorker', 'CI/CD'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/react-mesto-auth',
          },
          {
            label: 'Netlify',
            url: 'https://whimsical-sprite-5d5e95.netlify.app/',
          },
        ],
      },
      {
        title: 'Игра пятнашки',
        label: 'Игра SSR',
        tech: ['React', 'Redux', 'Express', 'Canvas', 'PostgreSQL', 'ServiceWorker', 'TypeScript', 'Jest', 'Axios', 'Tailwind CSS', 'Webpack', 'Eslint', 'Docker', 'CI/CD'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/babylon-game/practicum_15puzzle_babylon',
          },
        ],
      },
      {
        title: 'Movies explorer',
        label: 'Static page CSR',
        tech: ['React', 'Redux', 'TypeScript', 'Axios', 'Webpack', 'Eslint'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/movies-explorer-frontend',
          },
          {
            label: 'Netlify',
            url: 'https://63dabdfebc34881642dc87ec--graceful-cassata-eff5c3.netlify.app/',
          },
        ],
      },
      {
        title: 'Простой мессенджер',
        label: 'Месседжер',
        tech: ['React', 'Redux', 'Express', 'TypeScript', 'Axios', 'WebSocket', 'Webpack', 'BEM', 'Eslint', 'Docker', 'CI/CD'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/messenger',
          },
        ],
      },
      {
        title: 'Простой мессенджер',
        label: 'Месседжер',
        tech: ['TypeScript', 'Handlebars', 'Mocha', 'WebSocket', 'Webpack', 'BEM', 'Eslint', 'Docker'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/messenger',
          },
          {
            label: 'Netlify',
            url: 'https://velvety-babka-2aac37.netlify.app/',
          },
        ],
      },
      {
        title: 'Путешествие по России',
        label: 'Адаптивный сайт',
        tech: ['HTML', 'CSS', 'BEM'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/russian-travel',
          },
          {
            label: 'GitHub Pages',
            url: 'https://bmazurme.github.io/russian-travel/',
          },
        ],
      },
      {
        title: 'Куда поеду',
        label: 'Адаптивный сайт',
        tech: ['HTML', 'CSS', 'BEM'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/kudaYaPoedu',
          },
          {
            label: 'GitHub Pages',
            url: 'https://bmazurme.github.io/kudaYaPoedu/',
          },
        ],
      },
      {
        title: 'ИТМО',
        label: 'Адаптивный сайт',
        tech: ['HTML', 'CSS', 'JavaScript', 'BEM'],
        links: [
          {
            label: 'GitHub Pages',
            url: 'https://bmazurme.github.io/itmo/',
          },
        ],
      },
      {
        title: 'МАККУ',
        label: 'Адаптивный сайт',
        tech: ['HTML', 'CSS', 'JavaScript', 'BEM'],
        links: [
          {
            label: 'Netlify',
            url: 'https://stellar-custard-0d637a.netlify.app/',
          },
        ],
      },
      {
        title: 'How to learn',
        label: 'Статичный сайт',
        tech: ['HTML', 'CSS', 'BEM'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/how-to-learn',
          },
          {
            label: 'GitHub Pages',
            url: 'https://bmazurme.github.io/how-to-learn/',
          },
        ],
      },
      {
        title: 'Gallery svf',
        label: 'Статичный сайт',
        tech: ['HTML', 'CSS', 'BEM', 'Forge'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/bmazurme/gallery-svf',
          },
          {
            label: 'GitHub Pages',
            url: 'https://bmazurme.github.io/gallery-svf/',
          },
        ],
      },
    ],
  },
};

export default profileInfo;

