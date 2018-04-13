var recipes = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key, value) {
  var Object2 = Object.assign({}, recipes, {[key]:value})
  delete Object2.[key]
  return Object2
}
