const {Client} = require('pg')
const client = new Client({
    user: "username",
    password: "something",
    host: "localhost",
    port: 5432,
    database: "db_name"

})

execute()

const name = "Bill"
const age = 2

async function execute() {
    
    try {
    await client.connect()
    console.log("Connected")
    
    await client.query("INSERT INTO employee VALUES ($1, $2, $3)", [2, name, age])
    const results = await client.query("SELECT * FROM employee")
    
    // Returns the id, name and age of the first row element and stores them in variables
    const first_row = console.log(results.rows[0])
    const id_variable = console.log(results.rows[0]['id'])
    const name_variable = console.log(results.rows[0]['name'])
    const age_variable = console.log(results.rows[0]['age'])

    // Returns a list of dictionaries. Each dictionary represents a row
    console.log(results.rows)

    // Returns the first row of the list (of rows) as a dictionary
    console.table(results.rows[0])

    // Looping through the list of all rows/dictionaries as mentioned above and extracting each value
    for(let i=0; i < results.rows.length; i++) {
        console.log(results.rows[i])
        console.log(results.rows[i]["id"])
        console.log(results.rows[i]["name"])
        console.log(results.rows[i]["age"])
        
    }        
    }

    catch (er) {
        console.log(`Error: ${er}`)
    }

    finally {
        await client.end()
        console.log("done")    
    }
}
