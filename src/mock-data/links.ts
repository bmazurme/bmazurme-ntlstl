import { Links } from '../utils';

const links = [
  { label: 'LinkedIn', url: Links.LINKEDIN },
  { label: 'GitHub', url: Links.GITHUB },
  { label: 'CV', url: Links.PROFILE },
  { label: 'Portfolio', url: Links.PORTFOLIO },
  { label: 'E-mail', url: Links.EMAIL },
];

const noticeLinks = [
  { name: 'All', to: '/' },
  { name: 'Code', to: '/code' },
  { name: 'Hobby', to: '/hobby' },
  { name: 'Places', to: '/places' },
];

export { noticeLinks, links };
