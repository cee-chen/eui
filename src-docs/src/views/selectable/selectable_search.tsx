import React, { useState } from 'react';

import {
  EuiSelectable,
  EuiSelectableOption,
  EuiFlexGroup,
  EuiSwitch,
  EuiSpacer,
} from '../../../../src';

export default () => {
  const [isCaseSensitive, setIsCaseSensitive] = useState(false);
  const [hideSelectedOptionsOnSearch, setHideSelectedOptionsOnSearch] =
    useState(false);

  const [options, setOptions] = useState<EuiSelectableOption[]>([
    {
      label: 'Titan',
      'data-test-subj': 'titanOption',
    },
    {
      label: 'Enceladus is disabled',
      disabled: true,
    },
    {
      label: 'Mimas',
      checked: 'on',
    },
    {
      label: 'Dione',
    },
    {
      label: 'Iapetus',
      checked: 'on',
    },
    {
      label: 'Phoebe',
    },
    {
      label: 'Rhea',
    },
    {
      label:
        "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
    },
    {
      label: 'Tethys',
    },
    {
      label: 'Hyperion',
    },
  ]);

  return (
    <>
      <EuiFlexGroup responsive={false} wrap>
        <EuiSwitch
          label="Case sensitive"
          checked={isCaseSensitive}
          onChange={() => setIsCaseSensitive(!isCaseSensitive)}
        />
        <EuiSwitch
          label="Exclude selected options while searching"
          checked={hideSelectedOptionsOnSearch}
          onChange={() =>
            setHideSelectedOptionsOnSearch(!hideSelectedOptionsOnSearch)
          }
        />
      </EuiFlexGroup>
      <EuiSpacer />
      <EuiSelectable
        aria-label="Searchable example"
        searchable
        searchProps={{
          isCaseSensitive,
          hideSelectedOptionsOnSearch,
          'data-test-subj': 'selectableSearchHere',
        }}
        options={options}
        onChange={(newOptions) => setOptions(newOptions)}
      >
        {(list, search) => (
          <>
            {search}
            {list}
          </>
        )}
      </EuiSelectable>
    </>
  );
};
