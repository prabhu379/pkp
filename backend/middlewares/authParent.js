import jwt from 'jsonwebtoken';

const authParent = async (req, res, next) => {
    try {
        const { dtoken } = req.headers;

        if (!dtoken) {
            return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
        }

        // Decode the token and extract `parentEmail`
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

        // Attach parent email to the request body
        req.body.parentEmail = token_decode.email;

        next();
    } catch (error) {
        console.error("Error verifying token:", error.message);
        return res.status(403).json({ success: false, message: "Invalid or Expired Token" });
    }
};

export default authParent;
