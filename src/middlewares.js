export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "JeonghyunTube";
    res.locals.isHeroku = isHeroku;
    next();
};

const isHeroku = process.env.NODE_ENV === "production";
