export interface Video {
    slug: string,
    title: string,
    description: string,
    ytslug: string,
    blogpost: string,
    date: string,
}

export const blankVideo: Video = {
    slug: '',
    title: '',
    description: '',
    ytslug: '',
    blogpost: '',
    date: ''
};
