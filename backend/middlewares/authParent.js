// import jwt from 'jsonwebtoken';

// const authParent = async (req, res, next) => {
//     try {
//         const { dtoken } = req.headers;

//         // If no token is provided, return error
//         if (!dtoken) {
//             return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
//         }

//         // Decode the token
//         const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

//         // Add decoded parent ID to request body for further use
//         req.body.parentId = token_decode.id;

//         // Call next middleware/controller
//         next();
//     } catch (error) {
//         console.error(error);
//         return res.status(403).json({ success: false, message: 'Invalid or Expired Token' });
//     }
// };

// export default authParent;
