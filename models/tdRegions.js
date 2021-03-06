var db = require('./db');

module.exports = {

	get: function(td_id, callback)
	{
		var sql = "select * from td_regions where td_id=?";
		db.getResults(sql, [td_id], function(result)
		{
				if(result.length > 0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}
		});
	},

	getAll: function(callback)
	{
			var sql = "select * from td_regions";
			db.getResults(sql, null, function(result)
			{
					if(result.length > 0)
					{
							callback(result);
					}
					else
					{
							callback([]);
					}
			});
	},

// getByUname: function(username, callback){
// 		var sql = "select * from user where username='"+username+"'";
// 		db.getResults(sql, function(results){
// 			if(results.length > 0){
// 				callback(results[0]);
// 			}else{
// 				callback(null);
// 			}
// 		});
// 	},


	validate: function(td, callback)
	{
		var sql = "select * from td_list where td_name=? and type='Trans_Dealer'";
		db.getResults(sql, [td.td_name, td.type], (result) =>
		{
			 if(result.length > 0)
			 {
				 console.log("LIST FOR TRANSPORT DEALERS FOUND SUCCESFULLY !~_~! ");
				 callback(true);
			 }
			 else
			 {
				 callback(false);
			 }
		});
	},


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

update: function(td, callback)
{
	var sql = "update td_regions set  r_name=?, country=?, continent=?, r_code=? where td_id=?";

  db.execute(sql, [td.v_name, td.v_type, td.v_distance, td.v_cost, td.td_id], (status) =>
	{
    if(status)
		{
			console.log("D A T A ~ UPDATED ~ S U C C E S F U L L Y !~_~! ");
      callback(true);
    }
		else
		{
      callback(false);
    }
	});

},

insert: function(td, callback)
	{
		var sql = "insert into td_regions values(?, ?, ?, ?, ?)";

		db.execute(sql, ['', td.v_name, td.v_type, td.v_distance, td.v_cost], (status) =>
		{
			if(status)
			{
				console.log("D A T A ~ INSERTED ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}
			else
			{
				callback(false);
			}
		});
	},

delete: function(td, callback)
	{
		var sql = "delete from td_regions where td_id=?";
		db.execute(sql, [td], (status) =>
		{
			if(status)
			{
				console.log("D A T A ~ REMOVED ~ S U C C E S F U L L Y !~_~! ");
				callback(true);
			}
			else
			{
				callback(false);
			}
		});
	},

search: function (key, callback)
{
		var sql = "SELECT * FROM td_regions WHERE r_name LIKE '" + key + "%' ";
		console.log(sql);
		db.getResults(sql, function (results)
		{
				console.log("dataset length " + results.length);
					if (results.length > 0)
					{
							callback(results);
					}
					else
					{
							callback(false);
					}
		});
}


}
