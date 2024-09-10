import { parse } from "svelte/complier"
import { unified } from 'unified'

async function markdownToHtml(string) {
    return unified()
        .use(remarkParse) // turn Markdown into ast (ast = abstract syntax tree)
        .use(remarkRehype, {allowDangerousHtml: true}) // turn Markdown ast into HTML ast
        .use(rehypeStringify, {allowDangerousHtml: true})
        .process(string)
}


async function html(content) {
    const svast = parse(content)
    const { start, end } = svast.html
    const string = content.slice(start, end)
    const html = await markdownToHtml(string)

    console.log(content.replace(string, html))

    return {
        code: content.replace(string, html)
    }
}

function markdown() {
    return {
        name: 'markdown',
        markup({ content, filename }) {
            if (filename.endsWith('.md')) {
                return html(content)
            }
        }
    }
}

export default markdown