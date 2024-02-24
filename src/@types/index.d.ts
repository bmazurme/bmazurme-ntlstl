type TypeLink = {
  label: string;
  icon?: any;
  url: string;
}

type TypeCard = {
  img?: StaticImageData;
  title: string;
  label: string;
  tech: { label: string; icon?: any }[];
  links: TypeLink[];
}

type TypeLang = {
  label: string;
  active: boolean;
}

type TypeProfile = {
  name: string;
  profession: string;
  portfolio: string;
  use: string;
  tech: string;
  education: string;
  educationList: Record<string, string>[];
  age: Date;
  about: string[];
  company: string;
  companyList: Record<string, string | null>[];
  portfolioList: TypeCard[];
};

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}
