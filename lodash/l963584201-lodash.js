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
	},
	difference: function (array,...values)
	{
		let arrays = []
		for (let x of values)
		{
			arrays = arrays.concat(x)
		}
		return array.filter((x) => !arrays.includes(x))
	},
	drop: function (array, n=1)
	{
		for (let i = 1; i <= n; i++)
		{
			array.shift()
		}
		return array
	},
	fill: function (array,value,start = 0,end = array.length)
	{
		for (let i = start; i < end; i++)
		{
			array[i] = value
		}
		return array
	},
	dropRight: function (array,n = 1)
	{
		if (n <= array.length)
		{for (i = 0; i < n; i++)
			{
				array.pop()
		}
			return array
		} else if (n = 0)
		{
			return array
		}
		else
		{
			return []
		}
	}
}
