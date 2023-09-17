function decimalToBinary(num) {
  //Write you code here
	let arr=[];
	var quo=num/2;
	while(quo!=0)
		{
			let rem=num%2;
			arr.unshift(rem);
			quo=num/2;
			num=quo;
		}
  return arr;
}

window.decimalToBinary = decimalToBinary;
