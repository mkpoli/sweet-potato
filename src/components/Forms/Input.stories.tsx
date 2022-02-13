import React from 'react';
import Input from 'components/Forms/Input';

export default { title: 'Forms/Input' };

export const normal = (): JSX.Element => <Input id="title" name="Title" required={false} />;
export const isRequired = (): JSX.Element => <Input id="title" name="Title" required={true} />;
export const withMaxLength = (): JSX.Element => (
  <Input id="title" name="Title" required={true} maxLength={50} />
);
