import React, { useCallback, useMemo } from 'react';
import { Container, Title, Description, OkButton, OkButtonText } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

interface RouteParams {
  date: number;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routePrams = params as RouteParams;

  const handleOKPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard',
        }
      ],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(routePrams.date, "EEEE', dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'", { locale: ptBr });
  }, []);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
      <Title>Agendamento concluído</Title>
      <Description>{formattedDate}</Description>
      <OkButton onPress={handleOKPressed}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
