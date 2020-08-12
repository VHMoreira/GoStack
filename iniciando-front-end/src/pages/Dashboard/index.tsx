import React, { useState } from 'react';
import { FiPower, FiClock } from "react-icons/fi";
import { Container, Header, HeaderContent, Profile, Content, Schedule, Calendar, NextAppointment, Section, Appointment } from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());


  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img src="https://cdn.discordapp.com/avatars/517827264717520901/8ee237408f9dbd35b609a46f0e1ae19b" alt="Vitor Henrique" />

              <strong>Vitor Henrique</strong>
              <span>
                <FiClock />
              08:00
            </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img src="https://cdn.discordapp.com/avatars/517827264717520901/8ee237408f9dbd35b609a46f0e1ae19b" alt="Vitor Henrique" />
                <strong>Vitor Henrique</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img src="https://cdn.discordapp.com/avatars/517827264717520901/8ee237408f9dbd35b609a46f0e1ae19b" alt="Vitor Henrique" />
                <strong>Vitor Henrique</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img src="https://cdn.discordapp.com/avatars/517827264717520901/8ee237408f9dbd35b609a46f0e1ae19b" alt="Vitor Henrique" />
                <strong>Vitor Henrique</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img src="https://cdn.discordapp.com/avatars/517827264717520901/8ee237408f9dbd35b609a46f0e1ae19b" alt="Vitor Henrique" />
                <strong>Vitor Henrique</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
}

export default Dashboard;
