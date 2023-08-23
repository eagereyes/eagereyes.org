import { type TransformContext } from 'vitepress';

export default
    async function transformHtml(code: string, id: string, context: TransformContext) {
        const fm = context.pageData.frontmatter;
        const date = new Date(fm.date);

        const dateString = `${date.toLocaleDateString("en-US", {month: 'long'})} ${date.getDate()}, ${date.getFullYear()}`;

        return code.replace('[[PostedBy]]', `Posted by <a href="/about">Robert Kosara</a> on ${dateString}.`);
    }
