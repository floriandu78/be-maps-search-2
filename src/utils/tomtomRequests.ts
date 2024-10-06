import axios, { AxiosResponse } from 'axios'
import { AutoCompleteResult, GetPlaceAutoComplete, GetPlaceResult, Place, TomTomApiResponse } from '../models';
import { apiKey } from '../config';


/**
 * getPlaceAutocomplete - Fetches autocomplete suggestions from the TomTom API for a given address input.
 *
 * @param {string} address - The partial or complete address to get autocomplete suggestions for.
 * @returns {Promise<GetPlaceAutoComplete[]>} - A promise that resolves to an array of objects, 
 * each containing a `placeId` representing a unique place suggestion.
 *
 * The function performs the following steps:
 * 1. Sends a GET request to the TomTom Autocomplete API with the provided `address`.
 * 2. Receives and processes the autocomplete suggestions from the API response.
 * 3. Maps the response data into an array of objects, each containing a `placeId`.
 * 4. Returns the array of objects as the result.
 */
export const getPlaceAutocomplete = async (
    address: string
): Promise<Place[]> => {
    if (!address) {
        throw new Error();
    }

    try {
        const autocomplete = 
            await axios.get<TomTomApiResponse<AutoCompleteResult>>(`https://api.tomtom.com/search/2/search/${address}.json'`, {
                params: {
                    key: apiKey,
                    limit: 100,
                    countrySet: 'AU'
                }
            });

        return autocomplete.data.results.map((place: AutoCompleteResult) => {
            return {
                ...place.address,
                placeId: place.id,
                streetNumber: place.address.streetNumber ?? '',
                
            }
        });
    } catch (error) {
        return [];
    }

}


/**
 * This function has been implemented for testing but is not in use.
 * getPlaceByID - Fetches place details from the TomTom API using a given place ID and returns a formatted Place object.
 *
 * @param {string} placeID - The unique identifier of the place to retrieve details for.
 * @returns {Promise<Place>} - A promise that resolves to a formatted Place object containing the place's details.
 *
 * The function performs the following steps:
 * 1. Sends a GET request to the TomTom API with the provided `placeID`.
 * 2. Receives and processes the response from the API.
 * 3. Formats the response data into a `Place` object.
 * 4. Returns the `Place` object as the result.
 */
export const getPlaceByID = async (
    placeId: string
): Promise<Place> =>  {
    const place = 
        await axios.get<TomTomApiResponse<GetPlaceResult>>('https://api.tomtom.com/search/2/search/place.json', {
            params: {
                countrySet: 'AU',
                entityId: placeId,
                key: apiKey,
            }
        });
    // Select the first result of the list.
    const result = place.data.results[0]

    return {
        ...result.address, 
        streetNumber: result.address.streetNumber ?? '',
        placeId
    };
}
    
