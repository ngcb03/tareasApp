import { useState } from "react";

export const useForm = (initialState = {}) => {

  const [formState, setFormState] = useState(initialState);

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return {
    ...formState,
    formState,
    onChangeInput
  }
}
