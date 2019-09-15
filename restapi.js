class RestApi {
    constructor() {

    }

    async getEquipment(equipment) {
        // whatever information you add here, you'll see it in 'data'
        const equipmentResponse = await fetch(`http://localhost:3000/players?name=${equipment}`);

        const eq = await equipmentResponse.json();
        
        console.log('eq', eq);

        return {
            eq
        }
    }
}

/* 
Get Single Products
http://localhost:3000/players/1
http://localhost:3000/mixers/10
http://localhost:3000/controllers/19
http://localhost:3000/turntables/33

Filter By Name
http://localhost:3000/players?name=CDJ-2000NXS2

Pagination & Limit
http://localhost:3000/players?_page=1&_limit=2

Sorting
http://localhost:3000/players?_sort=name&_order=asc

Range
http://localhost:3000/turntables?id=34

Text Search
http://localhost:3000/players?q=MPEG 
*/