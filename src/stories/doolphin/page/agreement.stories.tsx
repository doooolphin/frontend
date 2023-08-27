import { Meta, StoryObj } from '@storybook/react';
import Agreement from '@pages/sign-up/agreement';
import { within } from '@testing-library/dom';
import { userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { color } from '@styles/common';

const meta: Meta<typeof Agreement> = {
  component: Agreement
};

export default meta;

type Story = StoryObj<typeof Agreement>;

export const Primary: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const optionalCheckbox = canvas.queryAllByTestId(/checkbox_optional/);

    await step('check optional box', async () => {
      for (let i = 0; i < optionalCheckbox.length; i++) {
        await userEvent.click(optionalCheckbox[i]);
      }
    });

    await expect(canvas.queryByText('다음')).toHaveStyle({
      'background-color': color.lightgray
    });
  }
};

export const Submitted: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const requiredCheckbox = canvas.queryAllByTestId(/checkbox_require/);

    await step('check required box', async () => {
      for (let i = 0; i < requiredCheckbox.length; i++) {
        await userEvent.click(requiredCheckbox[i]);
      }
    });

    await expect(canvas.queryByText('다음')).toHaveStyle({
      'background-color': color.primary
    });
  }
};
