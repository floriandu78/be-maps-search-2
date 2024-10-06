export type TomTomApiResponse<T> = {
    results: T[]
}

export interface GetPlaceResult {
    address: Place
}

export interface AutoCompleteResult {
    id: string;
    address: Place;
}

export interface Place {
    countryCode: string;
    freeformAddress: string;
    municipality: string;
    placeId: string;
    streetNumber: string;
}