export interface Photo {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export interface FeaturedImage {
    src: string;
    width?: number;
    height?: number;
}

export interface Gallery {
    slug: string;
    title: string;
    description: string;
    featuredImage: FeaturedImage;
    date: string;
    photos: (Photo | Photo[])[];
}

export const blankGallery: Gallery = {
    slug: '',
    title: '',
    description: '',
    featuredImage: { src: '' },
    date: '',
    photos: []
};
