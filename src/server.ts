import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import { routes } from "./routes"

const app = express()

//para aceitar requisições do tipo json
app.use(express.json())

//rotas
app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: "Server internal error"
    })
})

//inicializa o servidor
app.listen(3333, () => console.log("Server is running!"))