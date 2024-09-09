

export const handle = async ({ event, resolve }) => {
    const route = event.url

    let start = performance.now()
    const response = await resolve(event)
    let end = performance.now()

    let responseTime = end - start

    if (responseTime > 2000) {
        console.log(`SLOW! - ${route} took ${responseTime.toFixed(2)} ms`)
    }

    if (responseTime < 1000) {
        console.log(`FAST! - ${route} took ${responseTime.toFixed(2)} ms`)
    }

    console.log('+page.server.js')

    return response
}