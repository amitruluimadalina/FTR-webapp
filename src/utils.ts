export function isFibonacci (num: number, count = 1, last = 0): boolean {
   if(count < num){
      return isFibonacci(num, count+last, count);
   };
   if(count === num){
      return true;
   }
   return false;
}
export const getValueFromInput = (e: React.FormEvent<HTMLFormElement>) => {
   const element = e.target as any;
   const value = element[0].value;
   return value;
};