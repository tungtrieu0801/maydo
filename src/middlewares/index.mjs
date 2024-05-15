export const resolveId = (idName) => (req, res, next) => {
    const {
        params: { [idName]: id },
    } = req;
    const parsedId = parseInt(id);
    if (isNaN(parsedId) || parsedId <= 0) {
        req.isValidId = false; 
    } else {
        req.isValidId = true;
    }
    next();
};
