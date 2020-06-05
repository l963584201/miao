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
	},
	flatten: function (array)
	{
		let arr = []
		let arrs = []
		for (let i = 0; i < array.length; i++)
		{
			if (Array.isArray(array[i]))
			{
				arrs = array[i]
				for (let j = 0; j < arrs.length; j++)
				{
					arr.push(arrs[j])
				}
			} else
			{
				arr.push(array[i])
			}
		}
		return arr
	},
	flattenDeep: function (array){
		var result = []
		array.flatten( item => {
			if (!(Array.isArray(array[i]))){
				result.push(array[i])
			} else {
				result.push(item[array[i]])
			}
		})
		return result
	},
	keyBy: function(collection, iteratee){
		var result = {}
		collection.forEach(item => {
			result[item[iteratee]] = item
		})
		return result
	},
	groupBy: function(collection, iteratee){
		var f = by
		if (typeof by == 'string'){
			f = item => item[by]
		}
		var result = {}
		ary.forEach(item => {
			var key = f(item)
			if (!(key in result)){
				result[key] = []
			}
			result[key].push(item)
		})
		return result
	}
}
