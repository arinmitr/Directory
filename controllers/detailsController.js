const axios = require('axios')

exports.getDetails = async (req, res) => {
  try {
    // const response = await axios.get(
    //   'https://jsonplaceholder.typicode.com/users'
    // )
    // const details = response.data
    const details = {
      name: 'test',
      number: '1234',
    }
    res.status(200).json({
      status: 'success',
      data: details,
    })
  } catch (err) {
    console.log(err)
  }
}
