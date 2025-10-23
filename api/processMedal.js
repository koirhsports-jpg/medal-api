export default async function handler(req, res) {
  try {
    console.log("🔥 API HIT SUCCESSFULLY");
    return res.status(200).json({
      message: "✅ Medal API reached successfully — this confirms deployment is correct."
    });
  } catch (err) {
    console.error("❌ API ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
}

