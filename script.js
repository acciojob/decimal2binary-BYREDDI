function decimalToBinary(num) {
  //Write you code here
	let arr=[];
	var res="";
	var quo=num;
	while(quo!=0)
		{
			let rem=num%2;
			arr.unshift(rem);
			quo=num/2;
			num=quo;
		}
	for(let i=arr.length-1;i>=0;i--)
		{
			res+=arr[i];
		}
	console.log(Number(res));
	return res;
}

window.decimalToBinary = decimalToBinary;
