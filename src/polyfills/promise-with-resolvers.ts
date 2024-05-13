Promise.withResolvers || (Promise.withResolvers = function withResolvers<T = unknown>(): PromiseWithResolvers<T> {
    let resolve: (value: T | PromiseLike<T>) => void = null!;
    let reject: (reason?: any) => void = null!;
    const promise = new Promise<T>((ok, ko) =>{
        resolve = ok;
        reject = ko;
    });
    
    return {resolve, reject, promise};
  });