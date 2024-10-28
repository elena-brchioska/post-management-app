export interface UserCard {
  name: string;
  emailCard: string;
  role: string;
}

export interface General {
  birthDate: string;
  jobTitle: string;
  gender: string;
  company: string;
}

export interface Contact {
  email: string;
  phoneNumber: string;
  linkedin: string;
  github: string;
  website: string;
  address: string;
  twitter: string;
  facebook: string;
}

export interface Education {
  university: string;
  college: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: string;
  gpa: string;
  honors: string;
  relevantCoursework: string;
  extracurricularActivities: string;
  certifications: string;
}

export interface IUser {
  userCard: UserCard;
  general: General;
  contact: Contact;
  education: Education;
}
