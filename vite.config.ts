import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-middleware',
      configureServer(server) {
        server.middlewares.use('/api/contact', async (req, res) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            req.on('end', async () => {
              try {
                const data = JSON.parse(body);

                // Import the handler dynamically
                const { default: handler } = await import('./api/contact');

                // Create mock Vercel request/response
                const mockReq = {
                  method: 'POST',
                  body: data,
                } as any;

                const mockRes = {
                  statusCode: 200,
                  status(code: number) {
                    this.statusCode = code;
                    return this;
                  },
                  json(data: any) {
                    res.statusCode = this.statusCode;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                  }
                } as any;

                await handler(mockReq, mockRes);
              } catch (error) {
                console.error('API Error:', error);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Internal server error' }));
              }
            });
          } else {
            res.statusCode = 405;
            res.end('Method not allowed');
          }
        });
      }
    }
  ],
})
