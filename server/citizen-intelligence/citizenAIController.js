exports.getCitizenUsageStats = async (req, res) => {
  res.json({
    mostUsedService: "License Renewal",
    peakUsageRegion: "Central Province",
    dailyActiveCitizens: 8421
  });
};

exports.getServiceDemandMap = async (req, res) => {
  res.json({
    highDemandServices: ["Business Registration", "Tax Payment"],
    underservedRegions: ["Rural North", "Zone D"]
  });
};

exports.getDigitalInclusionReport = async (req, res) => {
  res.json({
    digitallyActiveRate: "67%",
    regionsNeedingAgents: ["District 5", "District 9"]
  });
};
