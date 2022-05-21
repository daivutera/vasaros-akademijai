import React from 'react';
import Footer from './Footer';

export const Default = () => (
  <Footer>Copyright Ⓒ by Daiva Rajackiene {new Date().getFullYear()}</Footer>
);

export default {
  title: 'footer',
  component: Footer,
};
