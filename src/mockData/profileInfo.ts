import IProfile from '../interfaces/IProfile';

const profileInfo: Record<string, IProfile> = {
  EN: {
    name: 'Bogdan',
    profession: 'Frontend developer',
    portfolio: 'Portfolio',
    tech: 'Skills',
    use: 'I use technology in my work',
    company: 'Work experience',
    age: new Date(1985, 5, 22),
    education: 'Education',
    educationList: [
      {
        place: 'Moscow State University of Civil Engineering',
        name: 'Water supply and sanitation',
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
      'I am a frontend developer. I improve my\n' +
      'skills and expand them by learning new\n' +
      'technologies. I have experience in creating\n' +
      'SPA using React(JS/TS), Redux, HTML, CSS,\n' +
      'and also have commercial experience as a\n' +
      'middle frontend developer. In my free\n' +
      'time, I try to watch IT channels for my\n' +
      'development.',
      'Engaged in the development of new\n' +
      'functionality and support for existing ones,\n' +
      'also worked with API requests, Swagger,\n' +
      'Figma. Now I am looking for new\n' +
      'opportunities in a new company. I am open\n' +
      'to new possibilities.',
    ],
    companyList: [
      {
        name: 'Apex',
        position: 'Fullstack-developer',
        from: '2019',
        to: '2021',
        description: 'Automation of design processes. Development of plug-ins for Revit, for engineering calculations, automation of documentation processes.',
        stack: 'Stack: C#, Framework 4.8, WPF, Revit API, WPFMath, Django, Python, PostgreSQL, LaTeX, Material design, Bootstrap.',
      },
      {
        name: 'StepLogic',
        position: 'Fullstack-developer',
        from: '2021',
        to: '2022',
        description: 'Internal automation service: thin client. Plugins for Ribbon panel Revit. Functionality: search for a route for laying cables through trays, pipelines using graphs, generating specifications, working with a 3D model. Communication with related programs AutoCAD, DiaLux, MS Excel.',
        stack: 'Stack: C#, ASP.NET Core .NET 5.0, MSSQL, IIS, React.js, MUI, Bootstrap, JS, Node.js, HTML, CSS, KaTeX, Canvas, viewer Autodesk Forge, Framework 4.8, WPF.',
      },
      {
        name: 'IFellow',
        position: 'Frontend-developer',
        from: '2022',
        to: 'recently',
        description: 'Development of a thin client CRM system. Fixed bugs, optimized functions. Development of REST API, components, layout, implementation of new tools (from business). Unit tests.',
        stack: 'Stack: Vue.js, React.js, Next.js, Express.js, Redux, RTK, JS, TS, MUI, Tailwind, CSS, SASS, Jest, Eslint, Stylelint, NPM, Webpack, Node.js, Docker, Maven, Git.',
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
    tech: 'Навыки',
    use: 'В работе использую следующие технологии',
    company: 'Опыт работы',
    age: new Date(1985, 5, 22),
    education: 'Образование',
    educationList: [
      {
        place: 'Московский государственный строительный университет',
        name: 'Водоснабжение и водоотведение',
        from: '2004',
        to: '2009',
      },
      {
        place: 'Яндекс.Практикуме (АНО ДПО «ШАД»)',
        name: 'Веб-разработчик',
        from: '2021',
        to: '2022',
      },
      {
        place: 'Яндекс Практикуме (АНО ДПО «Образовательные технологии Яндекса») ',
        name: 'Мидл фронтенд-разработчик',
        from: '2022',
        to: '2022',
      },
    ],
    about: [
      'Я фронтенд-разработчик. Я улучшаю свои\n' +
      'навыки и расширяю их, изучая новые\n' +
      'технологии. Имею опыт разработки\n' +
      'SPA с использованием React (JS/TS), Redux, HTML, CSS,\n' +
      'а также имею коммерческий опыт в качестве\n' +
      'мидл фронтенд-разработчика. В моем свободном\n' +
      'время, я стараюсь смотреть IT-каналы для своего\n' +
      'развития.',
      'Занимаюсь разработкой нового\n' +
      'функционала и поддержкой существующего,\n' +
      'также работал с запросами API, Swagger,\n' +
      'Figma. Сейчас ищу новые\n' +
      'возможности в новой компании. Я открыт\n' +
      'к новым возможностям.',
    ],
    companyList: [
      {
        name: 'Apex',
        position: 'Fullstack-разработчик',
        from: '2019',
        to: '2021',
        description: 'Автоматизация процессов проектирования. Разработка плагинов для Revit, для инженерных расчетов, автоматизации процессов оформления документации.',
        stack: 'Стек: C#, Framework 4.8, WPF, Revit API, WPFMath, Django, Python, PostgreSQL, LaTeX, Material design, Bootstrap.',
      },
      {
        name: 'StepLogic',
        position: 'Fullstack-разработчик',
        from: '2021',
        to: '2022',
        description: 'Сервис внутренней автоматизации: тонкий клиент. Плагины для Ribbon panel Revit. Функционал: поиск пути прокладки кабелей по лоткам, трубопроводов с использованием графов, генерация спецификаций, работа с 3D моделью. Связь со смежными программами AutoCAD, DiaLux, MS Excel.',
        stack: 'Стек: C#, ASP.NET Core .NET 5.0, MSSQL, IIS, React.js, MUI, Bootstrap, JS, Node.js, HTML, CSS, KaTeX, Canvas, viewer Autodesk Forge, Framework 4.8, WPF.',
      },
      {
        name: 'IFellow',
        position: 'Frontend-разработчик',
        from: '2022',
        to: 'по настоящее время',
        description: 'Разработка тонкого клиента CRM-системы. Исправление ошибок, оптимизация. Разработка REST API, компонентов, верстка, внедрение новых инструментов (от бизнеса). Unit-тесты.',
        stack: 'Стэк: Vue.js, React.js, Next.js, Express.js, Redux, RTK, JS, TS, MUI, Tailwind, CSS, SASS, Jest, Eslint, Stylelint, NPM, Webpack, Node.js, Docker, Maven, Git.',
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

