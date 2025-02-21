import express from 'express';
import http from 'http';
async function start() {
    const app = express();

    const httpServer = http.createServer((req, res) => {
        app(req, res);
    });

    const port = 3000;
    
}