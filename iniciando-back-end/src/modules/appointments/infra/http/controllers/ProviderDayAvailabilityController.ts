import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListProviderDayAvailabityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year, day } = request.body;

    const listProviderDayAvailabity = container.resolve(
      ListProviderDayAvailabityService,
    );

    const availability = await listProviderDayAvailabity.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(availability);
  }
}
