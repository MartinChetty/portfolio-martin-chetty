export type IsoYearMonth = `${number}${number}${number}${number}-${number}${number}`;

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly organization: string;
  readonly location: string;
  readonly email: string;
  readonly phone: string;
  readonly summary: string;
  readonly specialties: readonly string[];
}

export interface Experience {
  readonly id: string;
  readonly organization: string;
  readonly role: string;
  readonly startDate: IsoYearMonth;
  readonly endDate: IsoYearMonth | "present";
  readonly highlights: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly highlights: readonly string[];
  readonly details: ProjectDetails;
  readonly links?: ProjectLinks;
}

export interface ProjectDetails {
  readonly problem: string;
  readonly architecture: readonly string[];
  readonly capabilities: readonly string[];
  readonly engineeringFocus: readonly string[];
}

export interface ProjectLinks {
  readonly github?: string;
  readonly liveDemo?: string;
}

export interface SkillGroup {
  readonly id: string;
  readonly label: string;
  readonly skills: readonly string[];
}

export interface Certification {
  readonly id: string;
  readonly name: string;
  readonly provider: string;
  readonly category: string;
  readonly featured?: boolean;
  readonly issuedBy?: readonly string[];
  readonly note?: string;
  readonly credentialUrl?: string;
}

export interface VerifiedBadge {
  readonly id: string;
  readonly name: string;
  readonly issuer: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly credentialUrl: string;
}

export interface Education {
  readonly id: string;
  readonly institution: string;
  readonly qualification: string;
  readonly label: "Degree" | "Program" | "Qualification";
  readonly result: string;
  readonly startYear: number;
  readonly endYear: number;
  readonly featured?: boolean;
}

export interface Language {
  readonly language: string;
  readonly proficiency: string;
}

export type SocialPlatform = "github" | "linkedin";

export interface Social {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly handle: string;
  readonly href: string;
}

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface LearningArea {
  readonly id: string;
  readonly label: string;
  readonly focus: string;
  readonly featured?: boolean;
}
