exports.getEconomicOverview = async (req, res) => {
  res.json({
    gdpTrend: "Growing",
    topSector: "Retail & Agriculture",
    taxComplianceRate: "82%",
    flaggedRisks: 3
  });
};

exports.detectFraud = async (req, res) => {
  res.json({
    suspiciousTransactions: 5,
    highRiskRegions: ["Zone A", "Zone C"]
  });
};

exports.getSMEGrowth = async (req, res) => {
  res.json({
    newBusinessesThisMonth: 124,
    fastestGrowingSector: "Food Processing"
  });
};
