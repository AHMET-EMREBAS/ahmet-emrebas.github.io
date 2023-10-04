import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
describe('GET /signup', () => {
  let token: string;
  let headers: any;
  let data: any;
  let saved: any;

  beforeAll(async () => {
    try {
      data = await axios.post(`${BASE_URL}/auth/signup`, {
        username: 'job@aemrebas.com',
        password: '!Password1234.',
      });
    } catch (err) {
      data = await axios.post(`${BASE_URL}/auth/login`, {
        username: 'job@aemrebas.com',
        password: '!Password1234.',
      });
    }

    token = data.data.access_code;
    headers = { Authorization: `Bearer ${token}` };

    try {
      saved = await axios.post(
        `${BASE_URL}/permission`,
        { name: 'CREATE:PERMISSION' },
        { headers }
      );
    } catch (err) {
      saved = await axios.get(`${BASE_URL}/permission/1`, { headers });
      // Ignore
    }
  });

  it('should create entity', async () => {
    expect(saved).toBeDefined();
    expect(saved.data.name).toBe('CREATE:PERMISSION');
  });

  it('should update entity', async () => {
    await axios.put(
      `${BASE_URL}/permission/1`,
      {
        name: 'UPDATED',
      },
      { headers }
    );

    const found = await axios.get(`${BASE_URL}/permission/1`, { headers });

    expect(found.data.name).toBe('UPDATED');
  });
});
