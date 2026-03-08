export interface Photo {
    src: string;
    alt: string;
}

export interface Gallery {
    slug: string;
    title: string;
    description: string;
    featuredImage: string;
    date: string;
    photos: Photo[][];
}

export const blankGallery: Gallery = {
    slug: '',
    title: '',
    description: '',
    featuredImage: '',
    date: '',
    photos: []
};
