class RestApi {
    constructor() {

    }

    async getEquipment(equipment) {
        // whatever information you add here, you'll see it in 'data'
        const playersResponse = await fetch(`http://localhost:3000/players?name=${equipment}`);
        const players = await playersResponse.json();        
        // console.log('players:', players);

        const mixersResponse = await fetch(`http://localhost:3000/mixers?name=${equipment}`);
        const mixers = await mixersResponse.json();        
        // console.log('mixers:', mixers);  

        const controllersResponse = await fetch(`http://localhost:3000/controllers?name=${equipment}`);
        const controllers = await controllersResponse.json();        
        // console.log('controllers:', controllers);     
        
        const turntablesResponse = await fetch(`http://localhost:3000/turntables?name=${equipment}`);
        const turntables = await turntablesResponse.json();        
        // console.log('turntables:', turntables);          
        
        // console.log('players length:', players.length);
        // console.log('mixers length:', mixers.length);
        // console.log('controllers length:', controllers.length);
        // console.log('turntables length:', turntables.length);

        
        return {
            players,
            mixers,
            controllers,
            turntables
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