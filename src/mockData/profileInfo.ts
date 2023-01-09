import IProfile from '../interfaces/IProfile';

const profileInfo: Record<string, IProfile> = {
  EN: {
    name: 'Bogdan',
    profession: 'Frontend developer',
    portfolio: 'Portfolio',
    tech: 'Tech stack',
    use: 'I use technology in my work',
    company: 'Company',
    age: new Date(1985, 5, 22),
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
        description: 'Internal automation service: thin client. Functionality: personal user accounts, settlement services, project gallery, family manager, updating the panel and its modules, modules for automating calculations and preparing documentation, integration with third-party services. Plugins for Ribbon panel Revit. Functionality: search for a route for laying cables through trays, pipelines using graphs, generating specifications, working with a 3D model. Communication with related programs AutoCAD, DiaLux, MS Excel.',
        stack: 'Stack: C#, ASP.NET Core .NET 5.0, MSSQL, IIS, React.js, MUI, Bootstrap, JS, Node.js, HTML, CSS, KaTeX, Canvas, viewer Autodesk Forge, Framework 4.8, WPF.',
      },
      {
        name: 'IFellow',
        position: 'Frontend-developer',
        from: '2022',
        to: 'recently',
        description: 'Development of a thin client CRM system. Development of REST API, components, layout, implementation of new tools (from business). Unit tests.',
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
    profession: 'Фронтенд разработчик',
    portfolio: 'Портфолио',
    tech: 'Технологии',
    use: 'В работе использую следующие технологии',
    company: 'Опыт работы',
    age: new Date(1985, 5, 22),
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
        description: 'Сервис внутренней автоматизации: тонкий клиент. Функционал: личные кабинеты пользователей, расчетные сервисы, галерея проектов, менеджер семейств, обновление панели и входящих в нее модулей, модули для автоматизации расчетов и оформления документации, интеграция со сторонними сервисами. Плагины для Ribbon panel Revit. Функционал: поиск пути прокладки кабелей по лоткам, трубопроводов с использованием графов, генерация спецификаций, работа с 3D моделью. Связь со смежными программами AutoCAD, DiaLux, MS Excel.',
        stack: 'Стек: C#, ASP.NET Core .NET 5.0, MSSQL, IIS, React.js, MUI, Bootstrap, JS, Node.js, HTML, CSS, KaTeX, Canvas, viewer Autodesk Forge, Framework 4.8, WPF.',
      },
      {
        name: 'IFellow',
        position: 'Frontend-разработчик',
        from: '2022',
        to: 'по настоящее время',
        description: 'Разработка тонкого клиента CRM-системы. Разработка REST API, компонентов, верстка, внедрение новых инструментов (от бизнеса). Unit-тесты.',
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
