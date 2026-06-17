const sendCreated = (res,message, data) => {
    res.status(201).json({
        success: true,
        data,
    })
}

const sendSuccess = (res, message, data) => {
    res.status(200).json({
        success: true,
        data,
    })
}


const sendError = (res, error) => {
    res.status(500).json({
        success: false,
        error,
    })
}