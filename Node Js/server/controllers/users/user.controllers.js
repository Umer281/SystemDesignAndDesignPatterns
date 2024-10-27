import  users  from '../../MOCK_DATA.json' assert { type: "json" };;






export async function fetchUsers(req, res) {
    
    try {
        await res.json(users);      
    } catch (error) {
        console.log(error)
    }
}


