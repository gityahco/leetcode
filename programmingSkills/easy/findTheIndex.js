var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      // console.log(haystack.slice(i, i + needle.length)) // This is the needle
      return i
    }
  }
  return -1
}

let haystack = "hello"
let needle = "el"
let result = strStr(haystack, needle)
console.log(result)
