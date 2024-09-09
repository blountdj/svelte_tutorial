export const handle = async ({ event, resolve }) => {
    
    // Example
    // const session = event.cookies.get('session')
    // const user = await getUser(session)

    const locale = 'es'
    event.locals.locale = locale

    if (event.url.pathname.startsWith('/banana')) {
        return new Response('banana')
    }

    event.locals.user = 'Test'

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('$lang', locale)
    }) // this returns +page.svelte
}

