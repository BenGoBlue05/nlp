import {fetchData} from "../client/js/network-utils";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({key: '123'}),
    })
)

test('fetchData', () => {
    return fetchData('example.com')
        .then(data => expect(data).toEqual({key: '123'}))
})