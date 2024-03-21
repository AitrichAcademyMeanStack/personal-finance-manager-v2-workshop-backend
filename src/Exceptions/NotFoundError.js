class NotFoundError extends Error {
    constructor(message) {
        super(message)
        this.statuscode = 404
        this.message = message
    }
}

export default NotFoundError

// Defining Not Found Error Handler