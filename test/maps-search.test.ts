import { describe } from '@jest/globals'
import { getAutoCompleteDetails } from '../src/controllers'
import { getPlaceAutocomplete } from '../src/utils'

// These are end-to-end tests
describe('Tomtom Places E2E Tests', () => {
    describe('getAutoCompleteDetails', () => {
        it ('returns a promise', () => {
            const res = getAutoCompleteDetails('Charlotte Street')
            expect(res).toBeInstanceOf(Promise)
        })

        it('can fetch from the autocomplete api', async () => {
            const res = await getAutoCompleteDetails('Charlotte Street')
            const firstRes = res[0];
            expect(firstRes).toHaveProperty('placeId')
            expect(firstRes).toHaveProperty('streetNumber')
            expect(firstRes).toHaveProperty('countryCode')
            expect(firstRes).toHaveProperty('country')
            expect(firstRes).toHaveProperty('freeformAddress')
            expect(firstRes).toHaveProperty('municipality')
        })
    })

    describe('getPlaceAutocomplete', () => {

        it('handles no results', async () => {
            const res = await getPlaceAutocomplete('asfasffasfasafsafs');
            expect(res).toStrictEqual([])
        })

        it('handles error', async () => {
            expect(getPlaceAutocomplete('')).rejects.toThrow()
        })
    })

})
