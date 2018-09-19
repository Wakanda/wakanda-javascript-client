class HttpResponse {
  public statusCode: number;
  public headers: any[];
  public body: string;

  constructor({ statusCode, headers, body }: { statusCode: number; headers: any[]; body: string }) {
    this.statusCode = statusCode;
    this.headers = headers || [];
    this.body = body;
  }
}

export default HttpResponse;
