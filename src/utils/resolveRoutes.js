const resolveRoutes = (route) => {
    if(route ==='/'){
        return '/'
    }
    return `/${route}`;
};
export default resolveRoutes;