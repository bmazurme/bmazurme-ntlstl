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
      'I am a frontend developer. I have development experience with React, Vue, Express and Next (JS/TS). \n' +
      'I am engaged in the development of REST API, UI components, layout, writing unit tests, code review. \n' +
      'In my work I use VSCode, Postman, Swagger, Figma, GitLab.',
      'I constantly improve and expand my skills, solve problems on CodeWars, work on pet-projects.',
      'My hobbies are designing and manufacturing 3D printers, CNC devices, and programming IoT devices.',
      'Currently looking for new career prospects and open to suggestions.',
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
        description: 'Automation of design processes. Development of applications for engineering calculations, plugins for Revit, AutoCAD, DiaLux, MS Excel.',
        stack: 'Stack: C#, Framework 4.8, WPF, Revit API, WPFMath, Django, Python, PostgreSQL, LaTeX, Material design, Bootstrap, Git.',
      },
      {
        name: 'StepLogic',
        position: 'Fullstack-developer',
        from: '2021',
        to: '2022',
        description: 'Automation of design processes. Development of applications for engineering calculations, plug-ins for Revit. Development of Web services to interact with the Autodesk Forge API.',
        stack: 'Stack: React.js, ASP.NET Core, MSSQL, MUI, JS, Node.js, HTML, CSS, KaTeX, Canvas, viewer Autodesk Forge, Framework 4.8, WPF, GitHub.',
      },
      {
        name: 'IFellow',
        position: 'Frontend-developer',
        from: '2022',
        to: 'recently',
        description: 'Development of new CRM system tools using the Vue.js framework. Development of UI components, REST API, adaptive layout, writing unit tests. Error correction.',
        stack: 'Stack: Vue.js, React.js, Next.js, Express.js, Redux, RTK, JS/TS, MUI, Tailwind, CSS, SASS, Jest, Webpack, Docker, Maven, GitLab.',
      },
    ],
    portfolioList: [
      {
        label: 'Static page',
        url: 'https://bmazurme.github.io/how-to-learn/',
      },
      {
        label: 'Adaptive page',
        url: 'https://bmazurme.github.io/russian-travel/',
      },
      {
        label: 'Mesto CSR',
        url: 'https://whimsical-sprite-5d5e95.netlify.app/',
      },
      {
        label: 'Messager',
        url: 'https://deploy--brilliant-dasik-aed875.netlify.app/',
      },
      {
        label: 'Game 15-puzzle',
        url: 'https://github.com/babylon-game/practicum_15puzzle_babylon',
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
      'Увлекаюсь проектированием и изготовлением 3D-принтеров, CNC-устройств, а также программирование IoT-устройств.',
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
        description: 'Автоматизация процессов проектирования. Разработка приложений для инженерных расчетов, плагинов для Revit. Разработка Web-сервисов для взаимодествия с API Autodesk Forge.',
        stack: 'Стек: React.js, ASP.NET Core, MSSQL, MUI, JS, Node.js, HTML, CSS, KaTeX, Canvas, viewer Autodesk Forge, Framework 4.8, WPF, GitHub.',
      },
      {
        name: 'IFellow',
        position: 'Frontend-разработчик',
        from: '2022',
        to: 'по настоящее время',
        description: 'Разработка новых инструментов CRM-системы с использование фреймворка Vue.js. Разработка UI-компонентов, REST API, адаптивная-верстка, написание unit-тестов. Исправление ошибок.',
        stack: 'Стэк: Vue.js, React.js, Next.js, Express.js, Redux, RTK, JS/TS, MUI, Tailwind, CSS, SASS, Jest, Webpack, Docker, Maven, GitLab.',
      },
    ],
    portfolioList: [
      {
        label: 'Статичный сайт',
        url: 'https://bmazurme.github.io/how-to-learn/',
      },
      {
        label: 'Адаптивный сайт',
        url: 'https://bmazurme.github.io/russian-travel/',
      },
      {
        label: 'Одностраничный сайт',
        url: 'https://whimsical-sprite-5d5e95.netlify.app/',
      },
      {
        label: 'Простой месседжер',
        url: 'https://deploy--brilliant-dasik-aed875.netlify.app/',
      },
      {
        label: 'Игра пятнашки',
        url: 'https://github.com/babylon-game/practicum_15puzzle_babylon',
      },
    ],
  },
};

export default profileInfo;

