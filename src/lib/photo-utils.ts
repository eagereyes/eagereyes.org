export interface Photo {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export interface Gallery {
    slug: string;
    title: string;
    description: string;
    featuredImage: string;
    date: string;
    photos: (Photo | Photo[])[];
}

export const blankGallery: Gallery = {
    slug: '',
    title: '',
    description: '',
    featuredImage: '',
    date: '',
    photos: []
};
