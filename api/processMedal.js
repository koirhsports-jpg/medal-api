import fetch from "node-fetch";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }


  try {
    const { imageUrl } = req.body;


    if (!imageUrl) {
      return res.status(400).json({ error: "Missing image URL" });
    }


    console.log("🖼️ Received medal URL:", imageUrl);


    // Placeholder logic for testing
    return res.status(200).json({
      status: "✅ API reached successfully",
      imageUrl: imageUrl,
    });
  } catch (err) {
    console.error("❌ API error:", err);
    return res.status(500).json({ error: err.message });
  }
}

