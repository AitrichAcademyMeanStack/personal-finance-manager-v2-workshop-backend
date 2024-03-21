// Winston is a popular logging library
import {createLogger , format , transports} from "winston";

// Creating logger instance and exporting as a module
export default createLogger({

    format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Including timestamps for the entry
        format.colorize(), // Applying colorize to log entries
        format.printf((info) => {
            const {timestamp , level , message , ...args} = info;
            const formattedArgs = Object.keys(args).length
            ? JSON.stringify(args , null , 2)
            : "";
            return `${timestamp} ${level} ${message} ${formattedArgs}`
        })
    ),
    transports: [new transports.Console({})], //  Creates a transport that logs messages to the console
})
