const Company = require("../models/Company");

// SIGNUP
exports.signupCompany = async (req, res) => {
  try {
    console.log("Signup API HIT");
    console.log("Body:", req.body);

    const { name, email, password } = req.body;

    //  Check if company already exists
    const existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return res.status(400).json({ message: "Company already exists" });
    }

    // ✅ Create new company
    const company = new Company({
      name,
      email,
      password,
    });

    await company.save();

    //  Send user data back
    res.json({
      message: "Signup successful",
      user: {
        name: company.name,
        email: company.email,
      },
    });

  } catch (error) {
    console.log("Signup Error:", error);
    res.status(500).json({ error: error.message });
  }
};

// LOGIN
exports.loginCompany = async (req, res) => {
  try {
    console.log("Login API HIT");
    console.log("Body:", req.body);

    const { email, password } = req.body;

    const company = await Company.findOne({ email });

    //  Invalid check
    if (!company || company.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ Send user data
    res.json({
      message: "Login successful",
      user: {
        name: company.name,
        email: company.email,
      },
    });

  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ error: error.message });
  }
};