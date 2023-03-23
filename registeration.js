// const acces = require("./verifytoken");
// const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const User=require("./models/User")
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
module.exports = (app, express, mysqlcon) => {
  const router = express.Router();
  app.use("/", router);
  app.use(express.urlencoded({ extended: true }));

  router.get("/registeration", (req, res) => {
    res.render("registeration");
  });
  router.get("/user", async(req, res) => {
    const user=await User.find()
    console.log(user)
    // return res.render("userdetail",{data:user})
    if(user){
     return res.render("userdetail",{data:user})
      
    }
    else{
     return res.render("userdetail",{data:[]})
      
    }

  });

  router.post("/registeration", async (req, res) => {
    console.log(req.body, "////////");
    let stusername = req.body.username;
    let stpassword = req.body.password;
    let stemail = req.body.email;
    let stgender = req.body.inlineRadioOptions;
    let stphone = req.body.phone;
    let stbuyer_id = uuid.v4();

    if (stgender == "option1") {
      stgender = "female";
    } else if (stgender == "option2") {
      stgender = "male";
    } else if (stgender == "option3") {
      stgender = "other";
    }

    // console.log(stgender, stphone);
    try {
    //   let value = await mysqlcon("select * from buyer_registeration");
    // const verifyUser=await User.findOne({email:req.body.email})
    // if(verifyUser){
    //     return res.send("already exist")
    // }

    let user=new User({
        FirstName:req.body.firstName,
        LastName:req.body.lastName,
        Email:req.body.email,
        Country:req.body.country,
        State:req.body.state,
        City:req.body.city,
        Gender:req.body.gender,
        DateOfBirth:req.body.dob,



    })
    const createUser=await User.create(user)
    if(createUser){
      res.redirect("/user")
        // res.json({
        //     status:"SUCCESS",
        //     data:createUser
        // })

    
}
else{
res.json({
    status:"ERROR",
    data:{}
})
}

      // let value = await prisma.buyer_registeration.findMany();

    //   console.log({ value }, "---------------------------");
    //   for (let i in value) {
    //     if (value[i].username === stusername) {
    //       return res.send("seller username already exists");
    //     }
    //   }
    //   let a = await mysqlcon(
    //     `insert into buyer_registeration (username,password,email,gender,phone,buyer_id,role) values ("${stusername}","${stpassword}","${stemail}","${stgender}","${stphone}","${stbuyer_id}",2)`
    //   );

      // const insertcart = await prisma.buyer_registeration.create({
      //   data: {
      //     username: String(stusername),
      //     password: Number(stpassword),
      //     email: String(stemail),
      //     gender: String(stgender),
      //     phone: Number(stphone),
      //     buyer_id: String(stbuyer_id),
      //     role: 2,
      //   },
      // });

    //   res.redirect("/buyer_login");
    } catch (err) {
      console.log(err);
    }
  });
};