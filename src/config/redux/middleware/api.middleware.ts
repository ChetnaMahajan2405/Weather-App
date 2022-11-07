import networkHandler from "./api.middleware.helper";
import { isExisty, isObject, replaceUrlVariables } from "utils/helpers.utils";
import { Dispatch, MiddlewareAPI } from "redux";
import {
  apiStart,
  apiEnd,
  apiSuccess,
  apiError,
  accessDenied,
} from "../actions/api.action";
import { TApiMiddlewareAction } from "./api.middleware.types";

const apiMiddleware =
  () =>
  ({ dispatch }: MiddlewareAPI<any>) =>
  (next: Dispatch<TApiMiddlewareAction>) =>
  async (action: TApiMiddlewareAction) => {
    if (!isObject(action) || !isExisty(action.type)) {
      return;
    }

    next(action);

    const { payload, type } = action;

    if (!payload || !payload.url) {
      return;
    }

    // Extraxt API action payload
    const {
      label,
      url,
      enableProgress = true,
      onSuccess,
      onFailure,
      onFinally,
      params = {},
      ...restApiOption
    } = payload;

    let requestUrl = url;
    requestUrl = replaceUrlVariables(url, { ...params });

    // Dispatch ${type}_START
    if (enableProgress) {
      dispatch(apiStart(type));
    }

    try {
      const { data } = await networkHandler({
        requestUrl,
        apiOptions: restApiOption,
      });

      if (onSuccess) {
        dispatch(onSuccess(data));
      } else {
        dispatch(apiSuccess(type, data));
      }
    } catch (error: any) {
      const errorResponseStatus = (error.response || {}).status || 0;

      if (errorResponseStatus === 403) {
        dispatch(accessDenied(payload));
      }

      if (onFailure) {
        dispatch(onFailure(error.message, error));
      } else {
        dispatch(apiError(type, error));
      }
    }

    if (onFinally) {
      dispatch(onFinally());
    }

    // Dispatch ${type}_END if enableProgress
    if (enableProgress) {
      dispatch(apiEnd(type));
    }
  };

export default apiMiddleware;
