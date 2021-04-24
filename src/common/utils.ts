
export function sleep(delay: number = 1): Promise<number> {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(delay);
    }, delay * 1000)
  })
}