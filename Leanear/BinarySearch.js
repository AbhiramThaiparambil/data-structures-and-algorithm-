console.log(rec([2,3,4,5,6,7,8,10,11,23],8))
console.log(rec([2,3,4,5,6,7,8,10,11,23],4))
console.log(rec([2,3,4,5,6,7,8,10,11,23],3))


function rec(arr,target){
    let left =0;
    let right =arr.length-1
 
    return search(arr,target,left, right)

 function search(arr,target,left,right){
  
   if(left<=right){
   
    let mid=Math.floor((left+right)/2)

    if(arr[mid]===target){
        return mid
    } 

    if(arr[mid]<target){
        return search(arr,target,left=mid+1,right)
    }else{
        return search(arr,target,left,right=mid-1)

    }
    

   }else{
    return -1
   }
   
 }

}