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
  portfolioList: Record<string, string>[];
};

export default IProfile;
