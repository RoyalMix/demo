const THRESHOLD = process.env.RISK_ALERT_THRESHOLD || 60;

function analyzeTransaction(tx) {
    let riskScore = 0;
    let flags = [];

    if (tx.amount > 10000) {
        riskScore += 30;
        flags.push("HIGH_VALUE_TRANSACTION");
    }

    if (tx.frequency > 20) {
        riskScore += 25;
        flags.push("UNUSUAL_FREQUENCY");
    }

    if (tx.locationMismatch) {
        riskScore += 20;
        flags.push("LOCATION_ANOMALY");
    }

    if (tx.unregisteredBusiness) {
        riskScore += 40;
        flags.push("UNREGISTERED_BUSINESS_ACTIVITY");
    }

    const riskLevel =
        riskScore >= THRESHOLD ? "HIGH" :
        riskScore >= 30 ? "MEDIUM" : "LOW";

    return { riskScore, riskLevel, flags };
}

module.exports = { analyzeTransaction };
