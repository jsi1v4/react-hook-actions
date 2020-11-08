import { useState } from 'react';
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
  AxiosError
} from 'axios';

export type Response<T> = Promise<AxiosResponse<T>>;
export type Error = AxiosError;
export type Source = CancelTokenSource;
export type Axios<T> = [Response<T>, Source | undefined];

export function httpClient<T>(params: AxiosRequestConfig): Axios<T> {
  const source = axios.CancelToken.source();
  return [
    axios.request<T>({ ...params, cancelToken: source.token }),
    source
  ];
}

export function httpClientTesting<T>(data: T | undefined, error?: string): Axios<T> {
  return [
    new Promise((done, reject) => {
      if (!error && !!data) {
        setTimeout(
          () => done({ status: 200, data, statusText: '', headers: undefined, config: {} }),
          2000
        );
      } else {
        setTimeout(
          () => reject({ response: { data: error || 'Empty error message!' } }),
          2000
        );
      }
    }),
    undefined
  ];
}

export interface Status {
  loading: boolean;
  error: string;
  pristine: boolean;
  valid: boolean;
}

export interface Options {
  defaultErrorMsg?: string;
  clearPayloadBeforeExec?: boolean;
}

const wrapper = (
  loading = false, error = '', pristine = true, valid = false
) => ({
  loading, error, pristine, valid
});

export function useAction<T>(initialValue?: T) {
  const [payload, setPayload] = useState<T | undefined>(initialValue);
  const [status, setStatus] = useState<Status>(wrapper());
  let source: Source | undefined;

  function exec(
    promise: Axios<T>,
    onSuccess = (res: T) => { },
    onError = (err: Error) => { },
    options?: Options
  ) {
    const [request, src] = promise;
    source = src;
    setStatus(wrapper(true, ''));
    if (options?.clearPayloadBeforeExec) {
      setPayload(undefined);
    }
    request
      .then((response) => {
        onSuccess(response.data);
        setStatus(wrapper(false, '', false, true));
        setPayload(response.data);
      })
      .catch(({ response }) => {
        onError(response);
        setStatus(wrapper(
          false,
          response?.data || options?.defaultErrorMsg,
          false
        ));
      });
  }

  function reset() {
    setStatus(wrapper());
    setPayload(undefined);
  }

  function cancel() {
    source?.cancel();
  }

  return { payload, ...status, exec, reset, cancel };
}
