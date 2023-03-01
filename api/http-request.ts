export class HttpRequest {
    public url?: string;
    public method?: string;
    public path: Record<string, string> = {};
    public query: Record<string, string> = {};
    public headers: Record<string, string> = {};
    public body?: {};
}