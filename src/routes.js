import fetch from 'node-fetch';
export const getCities = async (req, res) => {
    const {
        zipcode
    } = req.query;
    try {
        const apiRawResponse = await fetch(`https://geo.api.gouv.fr/communes?codePostal=${zipcode}`);
        const apiResponse = await apiRawResponse.json();

        res.json({
            status: true,
            cities: apiResponse.map(city => city.nom)
        })
    } catch (e) {
        res
            .status(500)
            .json({
                status: false,
                error: 'Une erreur est survenue. Veuillez reessayer plus tard'
            })
    }
}