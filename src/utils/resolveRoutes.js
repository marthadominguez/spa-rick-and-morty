const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute
    }
    return `/${route}` // en caso de ser una ruta

}

export default resolveRoutes;
