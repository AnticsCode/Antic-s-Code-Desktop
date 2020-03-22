import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '@core/storage/storage.service';
import { environment } from '@environments/environment';

@Injectable()

export class HttpService {

  private readonly auth = 'x-Token';
  private readonly content = 'Content-type';
  private readonly accept = 'Accept';
  private readonly type = 'application/json';
  private readonly default = 'application/json';

  constructor(private http: HttpClient,
              private ls: StorageService) {
      if (!environment.production) { console.log('HttpService'); }
    }

  public get<T>(url: string,
                headers?: HttpHeaders,
                params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { headers: this.createHeaders(headers), params });
  }

  public post<T>(url: string,
                 body: any | null,
                 headers?: HttpHeaders,
                 params?: HttpParams): Observable<T> {
    return this.http.post<T>(url, body, { headers: this.createHeaders(headers), params });
  }

  public put<T>(url: string,
                body: any | null,
                headers?: HttpHeaders,
                params?: HttpParams): Observable<T> {
    return this.http.put<T>(url, body, { headers: this.createHeaders(headers), params });
  }

  public delete<T>(url: string,
                   headers?: HttpHeaders,
                   params?: HttpParams): Observable<T> {
    return this.http.delete<T>(url, { headers: this.createHeaders(headers), params });
}

// tslint:disable-next-line: variable-name
  private createHeaders(_headers?: HttpHeaders): HttpHeaders {
    const contentType = _headers ? (_headers.get(this.type) || this.default) : this.default;
    const accept = _headers ? (_headers.get(this.accept) || this.default) : this.default;
    const headers = _headers || new HttpHeaders();

    return headers
      .set(this.auth, this.ls.get('token') || '')
      .set(this.content, contentType)
      .set(this.accept, accept);
  }
}
