import React, { useState } from 'react';

import {
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiButton,
  EuiText,
  EuiTitle,
  EuiFlyoutFooter,
} from '../../../../src/components';
import { useGeneratedHtmlId } from '../../../../src/services';

export default () => {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const pushedFlyoutTitleId = useGeneratedHtmlId({
    prefix: 'pushedFlyoutTitle',
  });
  let flyout;

  if (isFlyoutVisible) {
    flyout = (
      <EuiFlyout
        type="push"
        size="s"
        onClose={() => setIsFlyoutVisible(false)}
        aria-labelledby={pushedFlyoutTitleId}
      >
        <EuiFlyoutHeader hasBorder>
          <EuiTitle size="m">
            <h2 id={pushedFlyoutTitleId}>A pushed flyout</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiText>
            <p>
              A pushed flyout typically contains more information about a
              particular piece of data or complex form controls for editing.
            </p>
            <p>
              Also, it is good to include a close button in the footer for a
              larger hit target than the small close button provides.
            </p>
          </EuiText>
        </EuiFlyoutBody>
        <EuiFlyoutFooter>
          <EuiButton onClick={() => setIsFlyoutVisible(false)}>Close</EuiButton>
        </EuiFlyoutFooter>
      </EuiFlyout>
    );
  }

  return (
    <div>
      <EuiButton onClick={() => setIsFlyoutVisible((visible) => !visible)}>
        Toggle pushed flyout
      </EuiButton>
      {flyout}
    </div>
  );
};
