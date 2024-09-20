export default defineNuxtRouteMiddleware((to, from) => {
    const statusCode = 301 // na razie tymczasowe o kodzie 302, ale produkcyjnie będziemy używać kodu 301
    const path = to.path
    if (
        [
            '/akademiadotnet',
            '/ciss',
            '/devmentors',
            '/educativo',
            '/kuvi',
            '/videopoint',
        ].includes(path)
    )
        return navigateTo(path + '/', { redirectCode: statusCode })
    if (
        [
            '/akademiadotnet/',
            '/ciss/',
            '/devmentors/',
            '/educativo/',
            '/kuvi/',
            '/videopoint/',
        ].includes(path)
    )
        return navigateTo('/moje-kwalifikacje/', { redirectCode: statusCode })
    if (path === '/certyfikat_en-179.pdf') return navigateTo('/ciss/', { redirectCode: statusCode })
  })
  