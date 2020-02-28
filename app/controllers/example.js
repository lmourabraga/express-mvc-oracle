const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const dbpw = '' //Oracle DB password

module.exports.example = (application, req, res) => {
    async function run() {
        let connection;
        try {
            connection = await oracledb.getConnection({
                user: '', //Oracle DB user
                password: dbpw,
                connectString: '' //Oracle DB server
            });

            const result = await connection.execute(
                `` //Oracle DB script
            );
            console.log(result.rows);
            res.render('example', {
                result: result.rows
            })

        } catch (err) {
            console.error(err);
        } finally {
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }

    run();
}