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


    // ---- STEP 1: Test the image fetch ----
    const imgResponse = await fetch(imageUrl);
    if (!imgResponse.ok) {
      throw new Error("Failed to fetch image from URL");
    }


    // ---- STEP 2: Simulate medal processing (for now) ----
    console.log("🔥 Image fetched successfully, returning test success");


    // This returns a simple confirmation instead of trying OpenAI yet
    return res.status(200).json({
      status: "✅ Medal processed successfully (test mode)",
      imageUrl: imageUrl,
    });
  } catch (err) {
    console.error("❌ Internal API error:", err);
    return res.status(500).json({
      error: err.message,
      details: "Server error inside /api/processMedal",
    });
  }
}

