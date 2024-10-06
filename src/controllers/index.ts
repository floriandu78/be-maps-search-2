import { Place } from '../models';
import { getPlaceByID, getPlaceAutocomplete } from '../utils/';


/**
 * Function to search for places based on a given address.
 * 
 * @param {string} address - The input address for which to search for places.
 * @returns {Promise<Place[]>} - A promise that resolves to an array of places matching the given address.
 * 
 * @throws {Error} - Throws an error if the search fails or the input is invalid.
 */
export const getAutoCompleteDetails = async (
    address: string
): Promise<Place[]> => {
    const autoCompleteResults = await getPlaceAutocomplete(address);

    const autoCompleteResultsDetails = (await Promise.all(
        autoCompleteResults.map(async ({ placeId }) => {
            try {
                const place = await getPlaceByID(placeId)
                return place
            } catch (error) {
                return null
            }
        })
    )).filter((place) => !!place);

    return autoCompleteResultsDetails
}
