exports.syncCitizenPayment = async (req, res) => {
  const { citizenId, amount, serviceType } = req.body;
  console.log("Syncing payment:", citizenId, amount, serviceType);
  res.json({ success: true, message: "Payment synced across Royal Mix systems" });
};

exports.registerBusinessSync = async (req, res) => {
  const { businessName, ownerId } = req.body;
  console.log("Business registration synced:", businessName);
  res.json({ success: true, message: "Business synced" });
};

exports.agentActivitySync = async (req, res) => {
  const { agentId, activityType } = req.body;
  console.log("Agent activity synced:", agentId, activityType);
  res.json({ success: true, message: "Agent activity recorded" });
};
