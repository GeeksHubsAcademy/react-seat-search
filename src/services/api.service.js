
// const API_URL = 'https://mibackend.com/api';

export async function getRooms() {
    // return fetch(API_URL + '/rooms').then(data => data.json());
    return [
        {
            id: 1,
            price_per_night: 100,
            guest: 4,
            booked: ['2020-11-30', '2020-11-29'],
            description_short: 'asljha khljh k lh hljhd',
            description_long: 'asljha khljh k lh hljh ahljh jhlj ah h lk ljhd5h lh5jh5kdhlhsdh hhdl jkhx hxHKJHANXHñh klhhdjhd',
            type: 'double'
        },
        {
            id: 2,
            price_per_night: 200,
            guest: 6,
            booked: ['2020-12-31', '2020-12-30'],
            description_short: 'asljha khljh k lh hljhd',
            description_long: 'asljha khljh k lh hljh ahljh jhlj ah h lk ljhd5h lh5jh5kdhlhsdh hhdl jkhx hxHKJHANXHñh klhhdjhd',
            type: 'suite'
        },
        {
            id: 3,
            price_per_night: 50,
            guest: 2,
            booked: ['2020-12-29', '2020-12-30'],
            description_short: 'asljha khljh k lh hljhd',
            description_long: 'asljha khljh k lh hljh ahljh jhlj ah h lk ljhd5h lh5jh5kdhlhsdh hhdl jkhx hxHKJHANXHñh klhhdjhd',
            type: 'simple'
        },

    ]
}