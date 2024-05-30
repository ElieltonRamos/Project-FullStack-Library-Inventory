export type StatusHTTP = 'ok' | 'notFound' | 'badRequest' | 'unauthorized';

export type ServiceResponse<type> = {
  status: StatusHTTP,
  data: type | { message: string }
};