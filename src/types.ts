export type LocalizedText = {
    language: string;
    text: string;
}

export type Country = {
    isoCode: string;
    name: LocalizedText[];
    officialLanguages: string[]
}

export type Countries = Country[];

// ---

export type PublicHoliday = {
 id: string;
 startDate: string;
 endDate: string;
 type: string;
 name: LocalizedText[];
 regionalScope: string;
 temporalScope: string;
 nationwide: boolean;
}

export type PublicHolidays = PublicHoliday[]