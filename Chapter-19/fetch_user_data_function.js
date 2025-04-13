const calculateSum = (a, b) => a + b;

exports = async function fetchUserData() {
  try {
    const userId = context.user.custom_data.id;
    const { URL } = require('url');

    const apiUrl = new URL('https://api.example.com/user');
    apiUrl.pathname += `/${userId}`;

    const response = await context.http.get({
      url: apiUrl.toString(),
      headers: { Accept: 'application/json' }
    });

    if (!response || response.statusCode !== 200) {
      console.error('Failed to fetch user data.');
      return 'Error fetching user data';
    }

    const userData = JSON.parse(response.body.text());
    const { name, email } = userData;

    return `User Information:\nName: ${name}\nEmail: ${email}`;
  } catch (error) {
    console.error(`Error in fetchUserData: ${error.message}`);
    return 'Error fetching user data';
  }
}
