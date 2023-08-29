import img from '../img/screen.jpg';

const cards = [
  {
    id: '0',
    link: '0',
    name: 'JavaScript',
    tag: 'code',
  },
  {
    id: '1',
    link: '1',
    name: 'TypeScript',
    tag: 'code',
  },
  {
    id: '2',
    link: '2',
    name: 'my voron',
    tag: 'hobby',
  },
  {
    id: '3',
    link: '3',
    name: 'spb',
    tag: 'places',
    content: [
      { src: img.src, alt: 'draft' },
      { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    ],
  },
];

export { cards };
