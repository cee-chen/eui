/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { EuiSelectableOption } from './selectable_option';

const getSearchableLabel = <T>(
  option: EuiSelectableOption<T>,
  isCaseSensitive?: boolean
): string => {
  const searchableLabel = option.searchableLabel || option.label;
  return isCaseSensitive ? searchableLabel : searchableLabel.toLowerCase();
};

type SelectableOptions<T> = Array<EuiSelectableOption<T>>;

export const getMatchingOptions = <T>(
  /**
   * All available options to match against
   */
  options: SelectableOptions<T>,
  /**
   * String to match option.label || option.searchableLabel against
   */
  searchValue: string,
  config?: {
    isPreFiltered?: boolean;
    isCaseSensitive?: boolean;
    hideSelectedOptionsOnSearch?: boolean;
  }
) => {
  const { isPreFiltered, isCaseSensitive, hideSelectedOptionsOnSearch } =
    config || {};

  // If the options have already been prefiltered (e.g., by an asynchronous search service)
  // then we can skip doing our own matching/filtering logic.
  if (isPreFiltered) return [...options];

  // If there's no search value, there's nothing to do here.
  if (!searchValue) return [...options];

  const normalizedSearchValue = isCaseSensitive
    ? searchValue
    : searchValue.toLowerCase();

  const matchingOptions: SelectableOptions<T> = options.filter((option) => {
    // Don't show options that have already been selected
    if (hideSelectedOptionsOnSearch && option.checked === 'on') return false;

    const normalizedText = getSearchableLabel<T>(option, isCaseSensitive);
    return normalizedText.includes(normalizedSearchValue);
  });
  return matchingOptions;
};
