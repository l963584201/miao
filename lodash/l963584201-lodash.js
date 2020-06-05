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
		for (var i = 0;i < array.length;i++){
			if (Array.isArray(array[i])){
				array = this.flatten(array)
				this.flattenDeep(array)
			}
		}
		return array
	},
	flattenDepth: function(array, depth) {
		for (var i = 0;i < depth;i++){
			if (Array.isArray(array[i])){
				array = this.flatten(array)
				this.flattenDeep(array)
			}
		}
		return array
	},
	keyBy: 	function(collection,iteratee){
		return collection.reduce((obj,item) =>{
			obj[item[iteratee]] = item
			return obj
		},{})
	},
	groupBy: function(collection, iteratee){
		var result = {}
		collection.forEach(item =>{
			iteratee = f(item)
			if (!(iteratee in result)){
				result[iteratee] = []
			}
			result[iteratee].push(item)
		})
		return result
	}
}
