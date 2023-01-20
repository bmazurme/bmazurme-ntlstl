type Link = {
  label: string
  url: string,
}

type Card = {
  title: string,
  label: string,
  tech: string[],
  links: Link[],
}

interface IProfile {
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
  portfolioList: Card[];
};

export default IProfile;
export type { Link, Card };
