const express = require("express");
const path = require("path");
const status = require("statuses");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.use("/static/css", express.static(path.join(__dirname, "../frontend/css")));
app.use("/static/javascript", express.static(path.join(__dirname, "../frontend/javascript")));
app.use(express.json());


// API route
app.get("/api/message", (req, res) => {
 return res.json({success: true, message: "Hello from the backend!!!" });
});

app.post("/api/login", (req, res)=>{

  const {email, password} = req.body;

  if(email!=="sjg123@gmail.com")
    return res.status(404).json({success: false, message: "email not found!"})
  
  if(password!=="sjg123")
  return res.status(400).json({success: false, message: "Password not matched!"})

  return res.status(200).json({success: true, message: "Login successful!", data: {email, password}});
})
app.put("/api/changePassword/:id", (req, res) => {
  const {id} = req.params;
  const {newPassword, confirmPassword} = req.body;
  if(id!=1){
    return res.status(400).json({success: false, message: "Password not matched!"})
  }
  if(newPassword != "hello" || confirmPassword != "hello"){
    return res.status(401).json({success: false, message: "Password not matched!"})
  }
  return res.json({
    status:"success",
    message: "password change succesfully"
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
