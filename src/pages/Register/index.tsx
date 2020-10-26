import React, { useState } from 'react';

import DefaultLayout from '../_layouts/default';
import { Form } from './styles';

import Input from '~/components/Input';

const Register = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(Number(undefined));

  const handleSubmit = () => {
    console.log(name, price);
  };

  return (
    <DefaultLayout>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Novo Produto</legend>

          <Input
            required
            autoComplete="off"
            name="name"
            label="Nome"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <Input
            required
            autoComplete="off"
            name="price"
            min="0"
            label="Preço"
            type="number"
            value={price}
            onChange={({ target }) => setPrice(Number(target.value))}
          />
        </fieldset>

        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </Form>
    </DefaultLayout>
  );
};

export default Register;
