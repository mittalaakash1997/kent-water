var express = require('express');
var router = express.Router();
var conn = require('../../db');

/* GET users listing. */
router.delete('/:id', function(req, res, next) {
    let sql = "DELETE FROM romodules WHERE id=" + req.params.id + "";
	let query = conn.query(sql, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: "Record deleted successfully" }));
	});
});

module.exports = router;

