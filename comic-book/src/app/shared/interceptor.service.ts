import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";

export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>,next: HttpHandler) {

    const modifiedReq = req.clone({
      headers: req.headers.append('Access-Control-Allow-Origin','*')
    })
    return next.handle(modifiedReq)

  }
}
