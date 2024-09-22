const users = require('../../MOCK_DATA.json');






async function fetchUsers(req, res) {
    
    try {
        await res.json(users);      
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    fetchUsers
}