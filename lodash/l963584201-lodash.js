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
	flatten: function (array){
		let arr = []
		let arrs = []
		for (let i = 0; i < array.length; i++){
				arrs = array[i]
				if (Array.isArray(arrs)){
				arr.push(...arrs)
			} else{
				arr.push(arrs)
			}
		}
		return arr
		// return array.reduce((result, item) => {
		// 	if (Array.isArray(item)){
		// 		result.push(...item)
		// 	} else {
		// 		result.push(item)
		// 	}
		//  return result
		// },[])
	},
	flattenDeep: function (array){
		for (var i = 0;i < array.length;i++){
			if (Array.isArray(array[i])){
				array = this.flatten(array)
				this.flattenDeep(array)
			}
		}
		return array
// 		var result = []
// array.forEach(item => {
// 	if (Array.isArray(item)){
// 		result.push(...flattenDeep(item))
// 	}else {
// 		result.push(item)
// 	}
// })
// return result

//   return array.reduce((result, item) => {
// 	if (Array.isArray(item)){
// 		result.push(...flattenDeep(item))
// 	}else {
// 		result.push(item)
// 	}
// 	return result
// },[])
// return result

	},
	flattenDepth: function(array, depth) {
		for (var i in array){
			if (Array.isArray(array[i])){
				for (var j = 1;j <= depth;j++){
				array = this.flatten(array)
				this.flattenDeep(array)
				}
			}
		}
		return array

		// if (depth == 0){
		// 	return array.slice()
		// }
		// return array.reduce((result, item) => {
		// 	if (Array.isArray(item)){
		// 		result.push(...flattenDepth(item,depth - 1))
		// 	}else {
		// 		result.push(item)
		// 	}
		// 	return result
		// },[])
		// return result

	},
	keyBy: 	function(collection,iteratee){
		return collection.reduce((obj,item) =>{
			if ( typeof iteratee == 'function'){
				obj[iteratee(item)] = item
		 }else {
			 	obj[item[iteratee]] = item
		 }
			return obj
		},{})
	},
	groupBy: function(collection,iteratee){
		var result = {}
		collection.forEach(item =>{
			var key
			if (typeof iteratee == 'string'){
				 key = item[iteratee]
			} else if ( typeof iteratee == 'function'){
				 key = iteratee(item)
			}
			if (!(key in result)){
				result[key] = []
			}
			result[key].push(item)
		})
		return result
	},
	fromPairs: function(pairs){
		var result = {}
		for (var i of pairs) {
			result[i[0]] = i[1]
		}
		return result
	},
	head: function(array){
		for (var i = 0;i <array.length;i++){
			return array[0]
		}
	},
	indexOf: function(array, value, fromIndex = 0) {
		for (var i = fromIndex;i <array.length;i++) {
			if (array[i] == value) {
				return i
			}
		}
	},
	initial: function(array) {
		var result = []
		for (var i = 0;i < array.length - 1;i++) {
			result.push(array[i])
		}
		return result
	},
	intersection: function(...arrays) {
		var result = arrays[0]
		for (var i = 0;i < arrays.length;i++){
			result = result.filter(val => arrays[i].includes(val))
			}
		return result
	},
	join: function(array, separator) {
		var res = ''
		var r = _
		for (var i = 0;i < array.length-1;i++){
			var result = res + array[i] + separator
			r +=result
		}
		res = r + array[array.length - 1]
		return res
	},
	last: function(array) {
		return array[array.length - 1]
	},
	indexOf: function(array, value, fromIndex = 0) {
		for (var i = fromIndex;i < array.length;i++) {
			if (array[i] === value) {
				return i
			}
		}
		return -1
	},
	lastIndexOf: function(array, value, fromIndex = array.length-1) {
		for (var i = fromIndex;i > 0;i--) {
			if (array[i] === value){
				return i
			}
		}
		return -1
	},
	nth: function(array, n = 0 ) {
		if (n >= 0) {
			return array[n]
		}else {
			return array[array.length + n]
		}
	},
	pull: function(array, ...values) {
		var result = []
		for (var i of array) {
				if (values.indexOf(i) == -1) {
					result.push(i)
				}
			}
		return result
	},
	pullAll: function(array, values){
		var result = []
		for (var i of array) {
				if (values.indexOf(i) == -1) {
					result.push(i)
				}
			}
		return result
	},
	reverse: function(array) {
		var res = []
			for (var i = array.length - 1;i >= 0;i--) {
				res.push(array[i])
			}
			return res
	},
	sortedIndex: function(array, value) {
		for (var i = 0;i < array.length;i++) {
			if (array[i] < value) {
				return i + 1
			}
		}
	}
}
