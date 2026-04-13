export interface PaperImage {
    src: string;
    width?: number;
    height?: number;
}

export interface Paper {
    _key: string;
    _type: string;
    title: string;
    author: string;
    venue: string;
    volume?: string;
    number?: string;
    pages?: string;
    doi?: string;
    abstract: string;
    publisher?: string;
    editor?: string;
    note?: string;
    _pdf?: string;
    talk?: string;
    data?: string;
    thumbnail?: PaperImage;
    preview?: PaperImage;
}

export const blankPaper: Paper = {
    _key: '',
    _type: '',
    title: '',
    author: '',
    venue: '',
    abstract: ''
};
