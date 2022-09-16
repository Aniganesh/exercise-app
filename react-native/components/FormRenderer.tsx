import {Formik, FormikConfig} from 'formik';
import React from 'react';
import {
  TextInput,
  TextInputProps,
  Checkbox,
  CheckboxItemProps,
} from 'react-native-paper';

interface FormRendererProps<FormValues> extends FormikConfig<FormValues> {
  formConfig: ValidConfigType[];
}

function FormRenderer<FormValues>({
  formConfig,
  ...rest
}: FormRendererProps<FormValues>) {
  return (
    <Formik<FormValues> {...rest}>
      {formikProps => (
        <>
          {formConfig.map(({type, props, valueKey}) => {
            return React.cloneElement(TypeMap[type], {
              ...props,
              value: (formikProps.values as {[valueKey: string]: any})[
                valueKey
              ],
              onChange: formikProps.handleChange,
            });
          })}
        </>
      )}
    </Formik>
  );
}

export default FormRenderer;

const TypeMap = {
  text: <TextInput />,
  checkbox: <Checkbox status="unchecked" />,
};

interface FieldConfig {
  type: keyof typeof TypeMap;
  valueKey: string;
}

interface TextFieldConfig extends FieldConfig {
  type: 'text';
  props: TextInputProps;
}

interface CheckboxConfig extends FieldConfig {
  type: 'checkbox';
  props: CheckboxItemProps;
}

type ValidConfigType = TextFieldConfig | CheckboxConfig;
