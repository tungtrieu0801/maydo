import connection from "../connection.mjs";
export const getAllUser = async(req, res) => {
    connection.query('SELECT * FROM user', function(err, results){
        if(err) {
            return res.status(500).json({
                result:false,
                data: [],
                message: 'Internal Server Error'
            });
        }
        return res.status(200).json({
            result:true,
            data: results,
            message: 'Successfully'
        });
    });
}

export const getUserById = async(req, res) => {
    if (!req.isValidId) {
        return res.status(400).json({
            result: false,
            data: [],
            message: 'Invalid user_id',
        });
    }

    const user_id = parseInt(req.params.user_id);
    connection.query('SELECT *FROM user WHERE user_id  = ?',[user_id], function(err, results){
        if(err){
            res.status(500).send('Connect fail: ' + err.message); 
            return res.status(500).json({
                result: false,
                data: [],
                message: 'Faillll'
            })
        }
        if(results.length === 0) {
            return res.status(404).json({
                result:true,
                data:[],
                message:'Not Found'
            });
        }
            res.status(200).json({
            result:true,
            data: results,
            message:'Successfully'
        });
    } )
}