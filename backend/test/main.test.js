const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../server');

describe('Post Endpoints', () => {
  it('Should get empty videos list', async () => {
    const res = await request(app)
      .get('/video');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(0);
  });

  it('Should create a new video', async () => {
    await fs.readFile(path.resolve(__dirname, 'sample.mp4'), async (err, data) => {
      if (data) {
        try {
          const res = await request(app)
          .post('/video')
          .send({
            title: 'video',
            video: data,
          });
          
          expect(res.statusCode).toEqual(200);
          expect(res.body).toHaveProperty('message');
        } catch (e) {}
      }
    })
  });
});