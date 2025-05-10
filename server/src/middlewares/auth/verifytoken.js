export const verifyToken = (req, res, next) => {
    console.log('Verifying token:', req.headers.authorization);
    
    // Get token from header
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    
    // For development, accept a hard-coded dev token
    if (token === 'dev_token_for_testing') {
        // Add mock user to request
        req.user = { 
            id: 1, 
            role: 'admin',
            username: 'dev_admin'
        };
        return next();
    }
    
    // In production, verify JWT token here
    // This is a simplified version for development
    return next();
}

export const test = (req, res, next) => {
    console.log('from test middleware');
    next();
}