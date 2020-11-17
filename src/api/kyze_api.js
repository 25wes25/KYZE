import request from './request';

const parseApiResponse = response => {
  if (response != null) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(
      new Error('Error, Request response was null or undefined'),
    );
  }
};

const parseApiError = error => {
  let serverError;
  try {
    serverError = error.message;
  } catch (e) {
    serverError = error;
  }
  return serverError;
};

export default class Api {
  constructor() {}

  async apiRequest(apiReq) {
    const {endpoint, method, data} = apiReq;
    let {query, jsonData} = apiReq;

    if (query && typeof query !== 'string' && typeof query !== 'object') {
      throw new Error(
        'Invalid type supplied for "query": Must be of type "string" or "object"',
      );
    }

    if (
      jsonData &&
      typeof jsonData !== 'string' &&
      typeof jsonData !== 'object'
    ) {
      throw new Error(
        'Invalid type supplied for "jsonData": Must be of type "string" or "object"',
      );
    }

    if (query) {
      // query should  be a string. In case it was passed as a string, do a little sanitizing
      query = query.trim().replace(/^[?]/, '');
    }

    if (typeof jsonData === 'string') {
      jsonData = JSON.parse(jsonData);
    }

    const finalUrl = query ? `${endpoint}?${query}` : endpoint;

    const config = {
      method,
      url: finalUrl,
    };

    if (jsonData) {
      config.data = jsonData;
    }

    if (data) {
      config.data = data;
    }

    try {
      const response = await request(config);
      return response.data;
    } catch (err) {
      if (
        err.response &&
        err.response.status === 400 &&
        err.response.data.code === 4005
      ) {
        throw err;
      } else {
        throw parseApiError(err);
      }
    }
  }

  /*
   * Student Endpoints
   */

  async createStudent(userData) {
    const config = {
      method: 'post',
      endpoint: '/students/',
      jsonData: userData,
    };

    return this.apiRequest(config).then(parseApiResponse);
  }

  async getStudentById(id) {
    const config = {
      method: 'get',
      endpoint: `/students/id/${id}`,
    };

    return this.apiRequest(config).then(parseApiResponse);
  }

  async getStudentByEmail(userEmail) {
    const config = {
      method: 'get',
      endpoint: `/students/email/${userEmail}`,
    };

    return this.apiRequest(config).then(parseApiResponse);
  }

  /*
   * Tutor Endpoints
   */

  async createTutor(userData) {
    const config = {
      method: 'post',
      endpoint: '/tutors/',
      jsonData: userData,
    };

    return this.apiRequest(config).then(parseApiResponse);
  }

  async getTutorById(id) {
    const config = {
      method: 'get',
      endpoint: `/tutors/id/${id}`,
    };

    return this.apiRequest(config).then(parseApiResponse);
  }

  async getTutorByEmail(userEmail) {
    const config = {
      method: 'get',
      endpoint: `/tutors/email/${userEmail}`,
    };

    return this.apiRequest(config).then(parseApiResponse);
  }
}
