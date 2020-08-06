import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProviders.DTO';

export default interface IFindAllInMonthProviderDTO {
  provider_id: string;
  month: number;
  year: number;
}
