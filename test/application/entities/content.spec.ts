import { repeat } from 'rxjs';
import { Content } from 'src/application/entities/content';

describe('Content', () => {
  it('should be able to create a notification content', () => {
    const value = 'Nova notificação';
    const content = new Content(value);

    expect(content.value).toBe(value);
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => {
      const value = 'any';
      new Content(value);
    }).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => {
      const value = 'a'.repeat(241);
      new Content(value);
    }).toThrow();
  });
});
