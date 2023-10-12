export const validateZipCode = (req, res, next) => {
    const { zipcode } = req.query;
    if (!/^\d{5}$/.test(zipcode)) {
        return res.status(422).json({
            status: false,
            error: 'Zip code invalide'
        });
    }
    next();
}