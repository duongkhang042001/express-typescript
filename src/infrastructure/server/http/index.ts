import express, { Application } from 'express';
import http from 'http';

export class ExpressServer {
    private app: Application;
    private server?: http.Server;
    private readonly port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.setupRoutes();
        this.setupMiddleware();
    }

    private setupMiddleware(): void {
        this.app.use(express.json());
    }

    private setupRoutes(): void {
        this.app.get('/helth', (req, res) => {
            res.json({ message: 'Server is running' });
        });
    }

    public start(): void {
        this.server = this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
        this.setupGracefulShutdown();
    }

    public stop(): void {
        if (this.server) {
            this.server.close((err) => {
                if (err) {
                    console.error('Error during server shutdown', err);
                } else {
                    console.log('Server has been stopped gracefully');
                }
            });
        }
    }

    private setupGracefulShutdown(): void {
        const shutdown = () => {
            console.log('Received shutdown signal');
            this.stop();
        };

        process.on('SIGINT', shutdown);
        process.on('SIGTERM', shutdown);
    }
}
