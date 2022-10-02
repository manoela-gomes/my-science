var { exec, spawn }  = require("child_process");

exports.summarize = (req, res, next) => {
   //exec("cd conda activate runML")
   var process = spawn('python3',["text_summarize.py",
    req.body.age,
    req.body.gender,
    req.body.ethnicity,
    req.body.arts,
    req.body.colour,
    req.body.text,
   ]);
   //console.log(req.body.hipertensao)
   // Takes stdout data from script which executed
   // with arguments and send this data to res object
   process.stdout.on('data', function(data) {
      res.send(data.toString());
   })
};