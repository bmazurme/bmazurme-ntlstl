interface IProfile {
  name: string;
  profession: string;
  portfolio: string;
  use: string;
  tech: string;
  age: Date;
  company: string;
  companyList: Record<string, string>[];
  portfolioList: Record<string, string>[];
};

export default IProfile;
