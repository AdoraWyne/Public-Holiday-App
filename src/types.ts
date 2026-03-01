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
