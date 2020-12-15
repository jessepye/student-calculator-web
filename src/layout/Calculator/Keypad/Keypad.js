import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';

const keypad = () => (
  <section className="keypad">
    <KeypadRow>
      <Button />
      <Button />
      <Button />
      <Button />
    </KeypadRow>

    <KeypadRow>
      <Button />
      <Button />
      <Button />
      <Button />
    </KeypadRow>

    <KeypadRow>
      <Button />
      <Button />
      <Button />
      <Button />
    </KeypadRow>

    <KeypadRow>
      <Button />
      <Button />
      <Button />
      <Button />
    </KeypadRow>

    <KeypadRow>
      <Button />
      <Button />
      <Button />
      <Button />
    </KeypadRow>

  </section>
);

export default keypad;