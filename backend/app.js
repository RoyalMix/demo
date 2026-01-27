const verificationRoutes = require("./routes/verification");
app.use("/api/verify", verificationRoutes);
const verificationRoutes = require("./routes/verification");
app.use("/api/verify", verificationRoutes);
const govDashboard = require("./routes/govDashboard");
app.use("/api/gov", govDashboard);
