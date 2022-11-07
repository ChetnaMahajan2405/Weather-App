import { IAction, TDispatch } from "config/redux/types/redux.types";

export const enum EApiMiddlewareMethods {
  DELETE = "DELETE",
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
}

export interface IApiMiddlewarePayload {
  data?: object | string; // Usually used with "POST|PUT" methods
  headers?: object; // Override headers
  label?: string; // Module/feature specific label
  method?: EApiMiddlewareMethods;
  onSuccess?: (...args: any) => void | IAction;
  onFailure?: (...args: any[]) => void | IAction;
  onFinally?: () => void | IAction;
  params?: object; // Usually used with "GET|DELETE" methods
  url: string;
  enableProgress?: boolean;
}

export type TApiMiddlewareAction = IAction<IApiMiddlewarePayload>;
export type TApiMiddlewareDispatch = TDispatch<TApiMiddlewareAction>;
