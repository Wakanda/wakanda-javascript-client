class HttpResponse {
  public statusCode: number;
  public headers: {
    [name: string]: string;
  };
  public body: string;

  constructor({ statusCode, headers, body }: { statusCode: number; headers: {
    [name: string]: string;
  }; body: string }) {
    this.statusCode = statusCode;
    this.headers = headers || {};
    this.body = body;
  }
}

export default HttpResponse;
