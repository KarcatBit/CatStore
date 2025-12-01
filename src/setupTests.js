// src/setupTests.js
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// agrega los matchers (toBeInTheDocument, etc.) a Vitest
expect.extend(matchers);

// limpia el DOM entre tests
afterEach(() => cleanup());
