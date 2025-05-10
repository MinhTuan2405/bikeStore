# Plan to Update `REST_BASE_URL` for `rest-api` MCP Server

The `rest-api` MCP server (identified as `node /home/ductrung/.nvm/versions/node/v23.10.0/lib/node_modules/dkmaker-mcp-rest-api/build/index.js`) is configured using environment variables. To change `REST_BASE_URL`, you'll need to stop the server, then restart it with the new environment variable set.

**Plan:**

1.  **Stop the `rest-api` MCP Server:**
    *   Locate the terminal or process running the `rest-api` MCP server script (`node /home/ductrung/.nvm/versions/node/v23.10.0/lib/node_modules/dkmaker-mcp-rest-api/build/index.js`) and stop it. If it's running in an interactive terminal, `Ctrl+C` usually works. If it's a background process, you might need to use process management commands (e.g., `kill`, `pkill`).

2.  **Restart the `rest-api` MCP Server with the New `REST_BASE_URL`:**
    *   Open a new terminal or use the existing one where you manage MCP servers.
    *   Execute the following command to start the server with the updated `REST_BASE_URL`:
        ```bash
        REST_BASE_URL=https://new-api.example.com node /home/ductrung/.nvm/versions/node/v23.10.0/lib/node_modules/dkmaker-mcp-rest-api/build/index.js
        ```
    *   If you use a different method to launch or manage this MCP server (e.g., a custom script, a process manager like PM2, or a specific `.env` file for this server), you'll need to update the `REST_BASE_URL` variable according to that method and then restart the server.

3.  **Confirmation (IDE):**
    *   After restarting, your IDE should reconnect to the MCP server. The `rest-api` tool will then use `https://new-api.example.com` as its base URL for any subsequent API tests.

**Visual Plan:**

```mermaid
graph TD
    A[Current rest-api MCP Server Running] -- User Action: Stop Process --> B(rest-api MCP Server Stopped);
    B -- User Action: Set ENV Var & Restart Server --> C{rest-api MCP Server Restarted};
    C -- Now Uses --> D[New REST_BASE_URL: https://new-api.example.com];