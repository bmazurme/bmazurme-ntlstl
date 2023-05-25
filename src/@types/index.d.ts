type TypeLink = {
  label: string;
  url: string;
}

type TypeCard = {
  title: string;
  label: string;
  tech: string[];
  links: Link[];
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
