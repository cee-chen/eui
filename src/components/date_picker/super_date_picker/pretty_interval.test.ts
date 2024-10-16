/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { renderHook } from '@testing-library/react';

import { usePrettyInterval } from './pretty_interval';

const IS_NOT_PAUSED = false;
const IS_PAUSED = true;
const SHORT_HAND = true;

describe('usePrettyInterval', () => {
  test('off', () => {
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 0)).result.current
    ).toBe('Off');
    expect(
      renderHook(() => usePrettyInterval(IS_PAUSED, 1000)).result.current
    ).toBe('Off');
  });

  test('seconds', () => {
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 1000)).result.current
    ).toBe('1 second');
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 15000)).result.current
    ).toBe('15 seconds');
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 15000, SHORT_HAND))
        .result.current
    ).toBe('15 s');
  });

  test('minutes', () => {
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 60000)).result.current
    ).toBe('1 minute');
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 1800000)).result.current
    ).toBe('30 minutes');
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 1800000, SHORT_HAND))
        .result.current
    ).toBe('30 m');
  });

  test('hours', () => {
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 3600000)).result.current
    ).toBe('1 hour');
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 43200000)).result
        .current
    ).toBe('12 hours');
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 43200000, SHORT_HAND))
        .result.current
    ).toBe('12 h');
  });

  test('days', () => {
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 86400000)).result
        .current
    ).toBe('1 day');
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 86400000 * 2)).result
        .current
    ).toBe('2 days');
    expect(
      renderHook(() => usePrettyInterval(IS_NOT_PAUSED, 86400000, SHORT_HAND))
        .result.current
    ).toBe('1 d');
  });
});
