interface IProfile {
  name: string;
  profession: string;
  portfolio: string;
  use: string;
  tech: string;
  age: Date;
  about: string[];
  company: string;
  companyList: Record<string, string>[];
  portfolioList: Record<string, string>[];
};

export default IProfile;
