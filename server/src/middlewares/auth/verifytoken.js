export const verifyToken = (req, res, next) => {
    console.log ('from middleware')
    next ()
}

export const test = (req, res, next) => {
    console.log ('from test middleware')
    next ()
}