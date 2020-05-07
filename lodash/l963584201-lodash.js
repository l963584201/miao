var l963584201 = {
	isNull: function (val)
	{
		if (val === null)
		{
			return true
		} else
		{
			return false
		}
	},
	isNaN: function (val)
	{
		if (val !== val)
		{
			return true
		} else{
			return false
		}
	},
	chunk: function (ary,size = 1){
		var arys = []
		arys.push(ary.slice(0,size))
		arys.push(ary.slice(size,ary.length))
		return arys
	},
		compact: function (array)
		{
			return array.filter(x => x>0)
	},
	concat: function (array, ...values)
	{
		return array.concat(...values)
	}

}
