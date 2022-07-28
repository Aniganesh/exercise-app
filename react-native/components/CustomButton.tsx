import React, {FC} from 'react';
import {Button} from 'react-native';

interface CustomButtonProps {}

const CustomButton: FC<CustomButtonProps> = () => {
  return <Button title="Button" />;
};

export default CustomButton;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = {};
