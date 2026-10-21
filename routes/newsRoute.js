const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");
const getNewsAsUserPreferences = require("../controller/newsController");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const news = await getNewsAsUserPreferences(req.userId);

    return res.status(200).json({ news });
  } catch (err) {
    return res.status(err.status || 500).json({
      error: err.message,
    });
  }
});

module.exports = router;
