export type TomTomApiResponse<T> = {
    results: T[]
}

export interface GetPlaceResult {
    address: Place
}

export interface AutoCompleteResult {
    id: string
}

export interface GetPlaceAutoComplete {
    placeId: string
}

export interface Place {
    placeId: string;
    streetNumber: string;
    countryCode: string;
    freeformAddress: string;
    municipality: string;
}