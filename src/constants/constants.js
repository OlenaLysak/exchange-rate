const API_KEY = 'z2bQtCZE5thYg80Lwm1Xpmp9P4lOhBew';

const myHeaders = new Headers();
myHeaders.append('apikey', API_KEY);

const REQUEST_OPTIONS = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export { API_KEY, REQUEST_OPTIONS };
