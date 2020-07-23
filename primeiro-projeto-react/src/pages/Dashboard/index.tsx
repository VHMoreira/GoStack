import React from 'react';
import { FiChevronRight } from "react-icons/fi";

import { Title, Form, Repositories } from './style';

import logoImg from "../../assets/logo.svg";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href='teste'>
          <img src="https://avatars2.githubusercontent.com/u/45210188" alt="Vitor Henrique" />
          <div>
            <strong>VHMoreira/vpokedex</strong>
            <p>That's my new Pokedex made with ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='teste'>
          <img src="https://avatars2.githubusercontent.com/u/45210188" alt="Vitor Henrique" />
          <div>
            <strong>VHMoreira/vpokedex</strong>
            <p>That's my new Pokedex made with ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='teste'>
          <img src="https://avatars2.githubusercontent.com/u/45210188" alt="Vitor Henrique" />
          <div>
            <strong>VHMoreira/vpokedex</strong>
            <p>That's my new Pokedex made with ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
