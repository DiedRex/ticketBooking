let time = function (time, range) {
  time = new Date(time.replace('-', '/'))
  const beginTime = new Date(range[0])
  const endTime = new Date(range[1])

  if (time >= beginTime && time <= endTime) {
    return true
  } else {
    return false
  }
}

export default time
