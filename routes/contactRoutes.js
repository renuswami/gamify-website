const express = require('express');
const router = express.Router();
const axios = require('axios');

const GOOGLE_SCRIPT_URL = 'https://docs.google.com/spreadsheets/d/1js20ziZZlxwwVvvb4mI1-g22idWDhW12lqw3OVWGB9g/edit?gid=0#gid=0';

router.post('/', async (req, res) => {
    const { name, email, mobile, subject, message } = req.body;

    try {
        const response = await axios.post(GOOGLE_SCRIPT_URL, {
            name,
            email,
            mobile,
            subject,
            message
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.data.status === 'success') {
            res.status(200).json({ success: true, message: 'Saved to Google Sheet' });
        } else {
            res.status(500).json({ success: false, error: 'Google Sheet Error' });
        }
    } catch (error) {
        console.error('Error posting to Apps Script:', error.message);
        res.status(500).json({ success: false, error: 'Request to Apps Script Failed' });
    }
});

module.exports = router; // ✅ important
