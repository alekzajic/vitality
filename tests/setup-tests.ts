import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { afterAll, afterEach, beforeAll } from 'vitest';
import { rest } from 'msw';

import { server } from '../__mocks__/msw/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { rest, server };
