exports.syncPiPayment = async (req, res) => {
  const { txId, amount, sourceApp } = req.body;

  console.log("Pi payment received:", txId, amount, sourceApp);

  // TODO: verify with Pi API later
  res.json({ success: true, message: "Payment synced to Royal Mix ecosystem" });
};

exports.transferBetweenWallets = async (req, res) => {
  const { from, to, amount } = req.body;

  console.log(`Transfer: ${amount} from ${from} to ${to}`);
  res.json({ success: true, message: "Internal wallet transfer recorded" });
};
